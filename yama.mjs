// RE/MAX Toprak — derleme sırasında site dosyalarına uygulanan düzenlemeler.
// Netlify: unzip sonrası `node yama.mjs site` ile çalışır. Bir parça bulunamazsa derleme durur,
// böylece canlı site bozulmaz (önceki sürüm yayında kalır).
//  1) İlan fotoğrafları: RE/MAX küçük boy (T 400x300) yerine M (1200x900)
//  2) Ana sayfa: değerleme formu kendi sayfasına (#degerleme), danışman önizlemesi kaldırıldı
//  3) Hesaplama: sadece araç kartları; her araç kendi sayfasında (#hesaplama-<arac>)
//  4) SSS: en çok sorulan 10 soru; tüm sorular Rehber'de (#beylikduzu-sorular)

const CALCS = {
  'kredi': ['Konut kredisi hesaplama', 'Kredi', 'Kredi tutarı, vade ve faize göre aylık taksitinizi ve toplam geri ödemeyi görün.'],
  'kira-artisi': ['Kira artışı hesaplama', 'Kira', 'Yasal üst sınıra göre yeni kiranızı ve artış tutarını hesaplayın.'],
  'kira-getirisi': ['Kira getirisi hesaplama', 'Yatırım', 'Mülkün yıllık net kira getirisini ve kendini kaç yılda amorti edeceğini öğrenin.'],
  'tapu-harci': ['Tapu harcı ve masrafı hesaplama', 'Tapu', 'Alıcı ve satıcının ödeyeceği tapu harcını ve toplam masrafı hesaplayın.']
};

const SSS10 = [
  "Beylikdüzü'nde ev almak mantıklı mı?",
  "Beylikdüzü'nde ev fiyatları ne kadar?",
  "Beylikdüzü'nde ev alırken tapu harcı ne kadar?",
  "Beylikdüzü'nde emlak komisyonu ne kadar?",
  "Beylikdüzü'nde konut kredisiyle ev alabilir miyim?",
  "Beylikdüzü'nde kira artışı en fazla ne kadar olabilir?",
  "Beylikdüzü'nde depozito en fazla ne kadar olabilir?",
  "Beylikdüzü'ndeki evimi satmak için ne yapmalıyım?",
  "Beylikdüzü'nde ev değerleme ücretli mi?",
  "Beylikdüzü'nde tapu devri için hangi belgeler gerekir?"
];

function yama(f) {
  let h = f['index.html'], js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama: bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };
  const norm = s => s.replace(/[’‘]/g, "'").replace(/<[^>]+>/g, '').trim();

  // 1) Fotoğraf boyutu
  js = rep(js, "CFG.photoBase + l.img :", "CFG.photoBase + l.img.replace('/T/', '/M/') :", 'foto');

  // 2) Değerleme kendi sayfasına, ekip önizlemesi gizli
  const TEAM = '<section class="section" aria-labelledby="teamTitle">';
  const dS = need(h, '<section class="section valuation" id="degerleme"', 'degerleme');
  const tS = need(h, TEAM, 'ekip');
  if (tS < dS) throw new Error('Yama: beklenmeyen sıra');
  const deg = h.slice(dS, tS).trimEnd();
  h = h.slice(0, dS) + h.slice(tS);
  h = rep(h, TEAM, TEAM.replace('>', ' hidden>'), 'ekip-gizle');
  h = rep(h, '<!-- ======================= REHBER',
    '<!-- ======================= DEĞERLEME ======================= -->\n<div class="view" id="view-degerleme">\n  ' + deg + '\n</div>\n\n<!-- ======================= REHBER', 'rehber-yorum');

  // kredi bölümü için yer işareti (hesaplama sayfasına taşınıp geri gelebilsin)
  const kS = need(h, '<section class="section" id="kredi"', 'kredi');
  const kE = h.indexOf('</section>', kS) + 10;
  h = h.slice(0, kE) + '\n  <span id="krediMark" hidden></span>' + h.slice(kE);

  // 3) Hesaplama
  const hv = need(h, 'id="view-hesaplama"', 'view-hesaplama');
  const hvEnd = need(h, 'id="view-rehber"', 'view-rehber');
  let hp = h.slice(hv, hvEnd);
  hp = rep(hp, '<div class="crumbs">', '<div class="crumbs" id="hesCrumbs">', 'hes-crumbs');
  hp = rep(hp, '<h2>Beylikdüzü emlak hesaplama araçları</h2>', '<h2 id="hesTitle">Beylikdüzü emlak hesaplama araçları</h2>', 'hes-h2');
  hp = hp.replace(/<p>Kira artışınızı[\s\S]*?<\/p>/, '<p id="hesLead">Kullanmak istediğiniz hesaplama aracını seçin.</p>');
  need(hp, 'id="hesLead"', 'hes-lead');
  const cards = Object.keys(CALCS).map(k => {
    const c = CALCS[k];
    return '      <a class="post" href="#hesaplama-' + k + '"><span class="tag">' + c[1] + '</span><h3>' + c[0] + '</h3><p>' + c[2] + '</p><span class="more">Hesapla →</span></a>';
  }).join('\n');
  hp = rep(hp, '<section class="section" style="padding-top:56px">\n    <div class="wrap tool-grid">',
    '<section class="section" id="calcHub" style="padding-top:56px">\n    <div class="wrap post-grid">\n' + cards + '\n    </div>\n  </section>\n' +
    '  <div id="krediSlot"></div>\n' +
    '  <section class="section" id="calcHost" style="padding-top:56px" hidden>\n    <div class="wrap tool-grid">', 'hes-grid');
  const order = ['kira-artisi', 'kira-getirisi', 'tapu-harci'];
  let n = 0;
  hp = hp.replace(/<div class="tool">/g, () => '<div class="tool" data-calc="' + (order[n++] || 'x') + '" hidden>');
  if (n !== 3) throw new Error('Yama: 3 araç bekleniyordu, ' + n + ' bulundu');
  h = h.slice(0, hv) + hp + h.slice(hvEnd);

  // 4) SSS: 10 soru; tüm sorular rehber yazısına
  const sv = need(h, 'id="view-sss"', 'view-sss');
  const fS = h.indexOf('<div class="wrap faq">', sv) + '<div class="wrap faq">'.length;
  const fE = h.indexOf('<p class="faq-note">', fS);
  if (fS < sv || fE < 0) throw new Error('Yama: SSS gövdesi bulunamadı');
  const groups = h.slice(fS, fE);
  const items = {};
  (groups.match(/<details class="faq-item">[\s\S]*?<\/details>/g) || []).forEach(d => {
    const m = /<h3>([\s\S]*?)<\/h3>/.exec(d); if (m) items[norm(m[1])] = d;
  });
  const picked = SSS10.map(q => { if (!items[norm(q)]) throw new Error('Yama: SSS sorusu yok -> ' + q); return items[norm(q)]; });
  const newSss = '\n      <div class="faq-group">\n        ' + picked.join('\n        ') + '\n      </div>\n' +
    '      <p class="faq-more">Beylikdüzü’nde yaşam, ulaşım ve mahalleler hakkında daha fazla soru için <a href="#beylikduzu-sorular">Beylikdüzü soru-cevap rehberine</a> göz atın.</p>\n      ';
  h = h.slice(0, fS) + newSss + h.slice(fE);

  const article = '\n      <article class="doc" id="doc-beylikduzu-sorular" hidden>\n' +
    '        <div class="crumbs"><a href="#anasayfa">Ana sayfa</a> / <a href="#rehber">Rehber</a></div>\n' +
    '        <h2>Beylikdüzü hakkında 37 soru ve cevap</h2>\n' +
    '        <div class="meta">Soru-cevap · RE/MAX Toprak</div>\n' +
    '        <div class="faq">' + groups + '</div>\n' +
    '      </article>\n';
  const docEnd = need(h, '\n\n    </div>\n  </section>\n</div>\n\n<!-- ======================= SSS', 'doc-son');
  h = h.slice(0, docEnd) + article + h.slice(docEnd);

  h = rep(h, '<a class="post" href="#sss"><span class="tag">Sıkça sorulanlar</span>', '<a class="post" href="#beylikduzu-sorular"><span class="tag">Soru-cevap</span>', 'rehber-kart');
  h = rep(h, '<span class="more">SSS’ye git →</span>', '<span class="more">Yazıyı oku →</span>', 'rehber-kart-2');

  // FAQPage yapısal verisi: sadece SSS sayfasındaki 10 soru
  const want = new Set(SSS10.map(norm));
  let ldDone = false;
  h = h.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (all, a, body, c) => {
    if (body.indexOf('FAQPage') < 0) return all;
    const data = JSON.parse(body);
    const walk = o => {
      if (Array.isArray(o)) return o.forEach(walk);
      if (o && typeof o === 'object') {
        if (o['@type'] === 'FAQPage' && Array.isArray(o.mainEntity)) {
          o.mainEntity = o.mainEntity.filter(q => want.has(norm(q.name || '')));
          if (o.mainEntity.length !== 10) throw new Error('Yama: FAQ verisinde ' + o.mainEntity.length + ' soru eşleşti');
          ldDone = true;
        }
        Object.values(o).forEach(walk);
      }
    };
    walk(data);
    return a + JSON.stringify(data) + c;
  });
  if (!ldDone) throw new Error('Yama: FAQPage verisi bulunamadı');

  // app.js: yönlendirme
  js = rep(js, "HOME_ANCHORS = ['degerleme', 'kredi', 'iletisim'];", "HOME_ANCHORS = ['kredi', 'iletisim'];", 'anchors');
  js = rep(js, "    else if (h === 'hakkimizda' || h === 'hesaplama' || h === 'rehber') view = h;",
    "    else if (h === 'degerleme') view = 'degerleme';\n" +
    "    else if (h.indexOf('hesaplama-') === 0 && CALCS[h.slice(10)]) { view = 'hesaplama'; slug = h.slice(10); }\n" +
    "    else if (h === 'hakkimizda' || h === 'hesaplama' || h === 'rehber') view = h;", 'route-views');
  js = rep(js, "['home', 'ilanlar', 'danismanlar', 'danisman', 'sss', 'hakkimizda', 'hesaplama', 'rehber', 'doc'].forEach",
    "['home', 'ilanlar', 'danismanlar', 'danisman', 'sss', 'hakkimizda', 'hesaplama', 'rehber', 'doc', 'degerleme'].forEach", 'route-list');
  js = rep(js, "    if (view === 'hakkimizda') renderAbout();", "    if (view === 'hakkimizda') renderAbout();\n    showCalc(view === 'hesaplama' ? slug : null);", 'route-calc');
  js = rep(js, "    hakkimizda: [", "    degerleme: [\"Beylikdüzü Ücretsiz Ev Değerleme | RE/MAX Toprak\", \"Beylikdüzü'ndeki evinizin, dükkanınızın ya da arsanızın değerini ücretsiz öğrenin; RE/MAX Toprak danışmanı sizi arasın.\"],\n    hakkimizda: [", 'meta');
  js = rep(js, "    kvkk: [", "    'beylikduzu-sorular': [\"Beylikdüzü Hakkında 37 Soru ve Cevap | RE/MAX Toprak\", \"Beylikdüzü'nde yaşam, ulaşım, mahalleler, ev almak, kiralamak ve satmak hakkında 37 soru ve cevap.\"],\n    kvkk: [", 'docs');
  js = rep(js, "  function route() {",
    "  var CALCS = " + JSON.stringify(CALCS) + ";\n" +
    "  function showCalc(slug) {\n" +
    "    var hub = $('calcHub'), host = $('calcHost'), k = $('kredi'), mark = $('krediMark');\n" +
    "    if (!hub || !host) return;\n" +
    "    var c = slug ? CALCS[slug] : null;\n" +
    "    hub.hidden = !!c; host.hidden = !c;\n" +
    "    [].forEach.call(document.querySelectorAll('[data-calc]'), function (t) { t.hidden = !c || t.dataset.calc !== slug; });\n" +
    "    if (c && slug === 'kredi') $('krediSlot').appendChild(k);\n" +
    "    else if (k && mark && k.nextElementSibling !== mark) mark.parentNode.insertBefore(k, mark);\n" +
    "    $('hesTitle').textContent = c ? c[0] : 'Beylikdüzü emlak hesaplama araçları';\n" +
    "    $('hesLead').textContent = c ? c[2] : 'Kullanmak istediğiniz hesaplama aracını seçin.';\n" +
    "    $('hesCrumbs').innerHTML = '<a href=\"#anasayfa\">Ana sayfa</a> / ' + (c ? '<a href=\"#hesaplama\">Hesaplama araçları</a> / ' + c[0] : 'Hesaplama araçları');\n" +
    "    if (c) setMeta(c[0] + ' | RE/MAX Toprak', c[2]);\n" +
    "  }\n\n  function route() {", 'route-fn');

  css += '\n/* yama.mjs */\n[hidden]{display:none!important}\n' +
    '#calcHost .tool-grid{grid-template-columns:minmax(0,620px);justify-content:center}\n' +
    '#calcHub .post h3{font-size:22px}\n' +
    '.faq-more{margin:4px 0 22px;font-size:16px}.faq-more a{color:#DC1C2E;font-weight:600}\n' +
    '.doc .faq{max-width:none;margin-top:24px}\n';

  f['index.html'] = h; f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

if (typeof process !== 'undefined' && process.argv && process.argv[2]) {
  const fs = await import('node:fs');
  const dir = process.argv[2];
  const names = ['index.html', 'js/app.js', 'css/site.css'];
  const f = {};
  for (const n of names) f[n] = fs.readFileSync(dir + '/' + n, 'utf8');
  yama(f);
  for (const n of names) fs.writeFileSync(dir + '/' + n, f[n]);
  console.log('yama.mjs uygulandı');
}
