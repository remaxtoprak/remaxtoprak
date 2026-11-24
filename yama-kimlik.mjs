// RE/MAX Toprak – RE/MAX Türkiye Kurumsal Kimlik (2018) renkleri.
// Kaynak: "REMAX Türkiye Kurumsal Kimlik" kılavuzu, Renk paleti:
//   RE/MAX Primer Kırmızı  WEB #DC1C2E (Pantone 1795 C)
//   RE/MAX Birincil Mavi   WEB #003DA5 (Pantone 293 C)
// Kılavuzda yalnızca kırmızı, mavi, beyaz ve siyah/gri var; 2025 yeni markanın krem ve parlak tonları
// bu iki rengin açık/koyu tonlarıyla değiştirilir. Yazı tipi: kılavuz Gotham veya Arial önerir;
// Gotham'ın web lisansı olmadığı için ona çok yakın Montserrat korunur (yedek Arial).
// Logolar (img/logo-dark.svg, img/logo-cream.svg) ve site simgesi depo kökünde, kılavuzdaki
// vektör RE/MAX logo tipi ve balon logosundan üretildi.

const RENK = [
  ['#FF1200', '#DC1C2E'],   // kırmızı
  ['#0043FF', '#003DA5'],   // mavi
  ['#d90f00', '#B8172A'],   // kırmızı (üzerine gelince)
  ['#0035cc', '#00307F'],   // mavi (üzerine gelince)
  ['#1F69FF', '#2F64C2'],   // açık mavi vurgular
  ['#F7F5EE', '#F3F5F9'],   // krem → açık gri-mavi zemin
  ['#f6f1ea', '#F3F5F9'],
  ['#e4e1d6', '#E1E5EE'],   // çizgi
  ['#cfccc0', '#CDD3DF'],
  ['#AA1120', '#A3162A'],   // koyu kırmızı
  ['#0C2749', '#002A6E'],   // koyu mavi
  ['#660000', '#7A0E1C'],
  ['#000E35', '#001A4D'],   // en koyu mavi (üst şerit, alt bilgi)
  ['#A3D4F2', '#BFD2EE'],   // açık mavi
  ['#0a1838', '#001A4D'],   // ofis görseli zemini
  ['#8fb6ff', '#9DB9EA']
];

function kimlik(f) {
  const need = (s, a, label) => { if (s.indexOf(a) < 0) throw new Error('Yama (kimlik): bulunamadı -> ' + label); };
  let css = f['css/site.css'];
  need(css, '--red:#FF1200; --blue:#0043FF;', 'root-renk');
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const k of ['css/site.css', 'js/app.js', 'index.html']) {
    let s = f[k];
    for (const [a, b] of RENK) s = s.replace(new RegExp(esc(a) + '(?![0-9a-fA-F])', 'gi'), b);
    f[k] = s;
  }
  css = f['css/site.css'];
  // yeni logo oranları: üstte yığılmış (RE/MAX + altında TOPRAK), altta tek satır beyaz
  css += '\n/* yama-kimlik.mjs: RE/MAX Türkiye kurumsal kimlik */\n' +
    '.logo img{height:52px}\n' +
    '@media (max-width:1100px){.logo img{height:42px}}\n' +
    '.foot-logo img{height:30px;width:auto;max-width:100%}\n' +
    '.topbar{border-bottom:3px solid var(--red)}\n' +
    'footer{border-top:6px solid var(--blue)}\n';
  f['css/site.css'] = css;
  return f;
}

export { kimlik };
