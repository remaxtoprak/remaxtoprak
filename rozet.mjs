// RE/MAX Toprak – ödül rozetlerini derlemede şeffaf PNG'ye çevirir.
// Rozetler remax.com.tr'den indirilir, kenarlardan başlayan beyaz zemin silinir (flood fill),
// 240 px'e küçültülür ve site/img/odul-*.png olarak kaydedilir; index.html'deki adresler bu
// dosyalarla değiştirilir. İndirme ya da çözme başarısız olursa o rozet remax.com.tr adresinde kalır.
// Kullanım: node rozet.mjs site
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROZET = [
  ['gptw_logo.png', 'odul-gptw-2025.png'],
  ['isverenler_logo.png', 'odul-en-iyi-isverenler-2024.png'],
  ['peryon--badge-post.png', 'odul-peryon-baglilik.png'],
  ['peryon-odul-2.png', 'odul-peryon-dijital.png']
];
const KAYNAK = process.env.ROZET_KAYNAK || 'https://remax.com.tr/';
const HEDEF = 240;

function crcTable() { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; }
const CRC = crcTable();
const crc32 = (buf) => { let c = 0xffffffff; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };

function decodePNG(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('PNG değil');
  let p = 8, w, h, depth, type, inter, pal = null, trns = null; const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), tp = buf.toString('ascii', p + 4, p + 8), d = buf.subarray(p + 8, p + 8 + len);
    if (tp === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); depth = d[8]; type = d[9]; inter = d[12]; }
    else if (tp === 'PLTE') pal = d; else if (tp === 'tRNS') trns = d; else if (tp === 'IDAT') idat.push(d); else if (tp === 'IEND') break;
    p += 12 + len;
  }
  const small = depth < 8 && (type === 3 || type === 0);
  if ((depth !== 8 && !small) || inter) throw new Error('desteklenmeyen PNG (derinlik ' + depth + ', interlace ' + inter + ')');
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[type]; if (!ch) throw new Error('renk tipi ' + type);
  const bpp = small ? 1 : ch, stride = small ? Math.ceil(w * depth / 8) : w * ch;
  const raw = zlib.inflateSync(Buffer.concat(idat)), out = Buffer.alloc(w * h * 4);
  const sample = (row, x) => { if (!small) return row[x]; const bit = x * depth, v = (row[bit >> 3] >> (8 - depth - (bit & 7))) & ((1 << depth) - 1); return type === 0 ? Math.round(v * 255 / ((1 << depth) - 1)) : v; };
  let prev = Buffer.alloc(stride), cur = Buffer.alloc(stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? cur[x - bpp] : 0, b = prev[x], c = x >= bpp ? prev[x - bpp] : 0; let v = line[x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      cur[x] = v & 255;
    }
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4; let r, g, bb, al = 255;
      if (type === 0) { r = g = bb = sample(cur, x); } else if (type === 4) { r = g = bb = cur[x * 2]; al = cur[x * 2 + 1]; }
      else if (type === 2) { r = cur[x * 3]; g = cur[x * 3 + 1]; bb = cur[x * 3 + 2]; }
      else if (type === 6) { r = cur[x * 4]; g = cur[x * 4 + 1]; bb = cur[x * 4 + 2]; al = cur[x * 4 + 3]; }
      else { const i = sample(cur, x); r = pal[i * 3]; g = pal[i * 3 + 1]; bb = pal[i * 3 + 2]; al = trns && i < trns.length ? trns[i] : 255; }
      out[o] = r; out[o + 1] = g; out[o + 2] = bb; out[o + 3] = al;
    }
    [prev, cur] = [cur, prev];
  }
  return { w, h, px: out };
}

function encodePNG({ w, h, px }) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; px.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  const chunk = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t, 'ascii'), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc32(td)); return Buffer.concat([l, td, c]); };
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 6;
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

// Kenardan başlayıp açık renkli (beyaza yakın) bölgeyi şeffaf yap; kenar pikselleri yumuşat.
function clearWhite(img) {
  const { w, h, px } = img, seen = new Uint8Array(w * h), st = [];
  const light = (i) => { const o = i * 4; return px[o + 3] < 20 || (px[o] > 225 && px[o + 1] > 225 && px[o + 2] > 225); };
  for (let x = 0; x < w; x++) { st.push(x, (h - 1) * w + x); } for (let y = 0; y < h; y++) { st.push(y * w, y * w + w - 1); }
  while (st.length) {
    const i = st.pop(); if (seen[i] || !light(i)) continue; seen[i] = 1; px[i * 4 + 3] = 0;
    const x = i % w, y = (i / w) | 0;
    if (x > 0) st.push(i - 1); if (x < w - 1) st.push(i + 1); if (y > 0) st.push(i - w); if (y < h - 1) st.push(i + w);
  }
  // kenar yumuşatma: silinen alana komşu açık pikseller kısmen şeffaf
  for (let i = 0; i < w * h; i++) {
    if (seen[i]) continue; const x = i % w, y = (i / w) | 0;
    const nb = (x > 0 && seen[i - 1]) || (x < w - 1 && seen[i + 1]) || (y > 0 && seen[i - w]) || (y < h - 1 && seen[i + w]);
    if (!nb) continue; const o = i * 4, m = Math.min(px[o], px[o + 1], px[o + 2]);
    if (m > 160) px[o + 3] = Math.round(px[o + 3] * Math.max(0, (255 - m) / 95));
  }
  return img;
}

function shrink({ w, h, px }, size) {
  const s = Math.min(1, size / Math.max(w, h)); if (s === 1) return { w, h, px };
  const W = Math.max(1, Math.round(w * s)), H = Math.max(1, Math.round(h * s)), out = Buffer.alloc(W * H * 4);
  for (let Y = 0; Y < H; Y++) for (let X = 0; X < W; X++) {
    const x0 = Math.floor(X / s), x1 = Math.min(w, Math.floor((X + 1) / s)), y0 = Math.floor(Y / s), y1 = Math.min(h, Math.floor((Y + 1) / s));
    let r = 0, g = 0, b = 0, a = 0, n = 0;
    for (let y = y0; y < Math.max(y1, y0 + 1); y++) for (let x = x0; x < Math.max(x1, x0 + 1); x++) {
      const o = (y * w + x) * 4, al = px[o + 3]; r += px[o] * al; g += px[o + 1] * al; b += px[o + 2] * al; a += al; n++;
    }
    const o = (Y * W + X) * 4; out[o] = a ? Math.round(r / a) : 0; out[o + 1] = a ? Math.round(g / a) : 0; out[o + 2] = a ? Math.round(b / a) : 0; out[o + 3] = Math.round(a / n);
  }
  return { w: W, h: H, px: out };
}

const site = process.argv[2] || 'site';
const idx = path.join(site, 'index.html');
let html = fs.readFileSync(idx, 'utf8'); let n = 0;
for (const [src, dst] of ROZET) {
  try {
    const r = await fetch(KAYNAK + src, { headers: { 'User-Agent': 'Mozilla/5.0 (RE/MAX Toprak site derleme)' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const img = shrink(clearWhite(shrink(decodePNG(Buffer.from(await r.arrayBuffer())), HEDEF * 2)), HEDEF);
    fs.mkdirSync(path.join(site, 'img'), { recursive: true });
    fs.writeFileSync(path.join(site, 'img', dst), encodePNG(img));
    const from = 'https://remax.com.tr/' + src;
    if (html.includes(from)) { html = html.split(from).join('img/' + dst); n++; }
    console.log('rozet:', src, '->', dst, img.w + 'x' + img.h);
  } catch (e) { console.log('rozet atlandı:', src, e.message); }
}
fs.writeFileSync(idx, html);
console.log('rozet.mjs:', n, 'rozet yerelleştirildi');
export {};
