// RE/MAX Toprak — her site için ayrı sayfa (#site-<ad>): görsel slider, bilgi tablosu, harita, ilanlar
// yama.mjs çağırır; yama-siteler.mjs ve yama-site-kart.mjs'den SONRA uygulanır (MH_SITES ve MH_KART'ı kullanır).
// Görseller: yalnızca resmi sitesi olan sitelerde, o resmi sitedeki görsellere bağlantı (dosya kopyalanmaz).
//   Kullanım izni site sahibinin sorumluluğundadır (24 Kasım 2026 kararı). Resmi görseli olmayan sitelerde
//   slider, RE/MAX Toprak portföyündeki o siteye ait ilanların fotoğraflarından oluşur.

const FOTO = {
  'Kameroğlu Metrohome ve Metrohome Suits': [
    'https://www.kameroglumetrohome.com/wp-content/uploads/2023/04/Web-Banner-1.jpg',
    'https://www.kameroglumetrohome.com/wp-content/uploads/2019/01/SUITES-001-4.jpg',
    'https://www.kameroglumetrohome.com/wp-content/uploads/2019/01/sosyal-tesisler-2.0.jpg',
    'https://www.kameroglumetrohome.com/wp-content/uploads/2018/12/otopark-b2.jpg',
    'https://www.kameroglumetrohome.com/wp-content/uploads/2020/05/site_harita.jpg'
  ],
  'Kırlangıç Evleri': [
    'https://kiptas.istanbul/assets/projects/completed-project/project-image/project-image_0_1750686308_fRsz1T.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-0_0_1750686309_Gdc4CO.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-1_0_1750686310_AfizdQ.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-2_0_1750686311_KJqZ8N.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-3_0_1750686312_OT5Xwr.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-4_0_1750686313_AY2S0r.webp',
    'https://kiptas.istanbul/assets/projects/completed-project/gallery-asset-5_0_1750686314_lKzKdJ.webp'
  ],
  'Alya Trio': [
    'https://boss4.com.tr/wp-content/uploads/2025/07/triokapak.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/trio1.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/trio2.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/trio3.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/trio4.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/alya_trio.jpg'
  ],
  'Alya Dolunay Sitesi': [
    'https://boss4.com.tr/wp-content/uploads/2025/07/alya_dolunay.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/alya_dolunay2.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/alya_dolunay3.jpg',
    'https://boss4.com.tr/wp-content/uploads/2025/07/alya_dolunay4.jpg'
  ],
  'Demir Romance': [1, 2, 3, 4, 5, 6, 8, 9, 10, 20].map(n => 'https://www.demirholding.com.tr/files/sektorler/insaat/konut/romance/demir_romance_' + String(n).padStart(2, '0') + '.jpeg'),
  'Demir Country': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => 'https://www.demirholding.com.tr/files/sektorler/insaat/konut/country/country_' + String(n).padStart(2, '0') + '.jpg'),
  'Ginza Lavinya Park': [
    'https://www.kelesogluholding.com/wp-content/uploads/2018/09/bg_ginza.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/galeri/1.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/galeri/2.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/galeri/3.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/ornek/1.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/ornek/2.jpg',
    'https://www.kelesogluholding.com/wp-content/themes/kelesoglu_dev/assets/projects/ginza/ornek/3.jpg'
  ],
  'Semerkand Line': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(n => 'https://www.semerkandyapi.com.tr/img/portfolio/s' + n + '.jpg')
};

function siteSayfa(f) {
  let js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (site-sayfa): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };

  const code = [
    '  var ST_FOTO = ' + JSON.stringify(FOTO) + ';',
    '  var ST_BY = {}, ST_SLUG = {};',
    '  function stSlug(t) {',
    '    return t.toLocaleLowerCase("tr-TR").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");',
    '  }',
    '  Object.keys(MH_SITES).forEach(function (mh) {',
    '    MH_SITES[mh].forEach(function (s, i) {',
    '      var sl = stSlug(s[0]); if (ST_BY[sl]) sl = sl + "-" + stSlug(mh);',
    '      ST_BY[sl] = { s: s, i: i, mh: mh }; ST_SLUG[mh + "|" + s[0]] = sl;',
    '    });',
    '  });',
    '  function stListings(s) {',
    '    if (!s[5] || typeof L === "undefined" || !L.filter) return [];',
    '    return L.filter(function (l) { return l.loc2 && l.loc2.town === "Beylikdüzü" && l.search && l.search.indexOf(s[5]) >= 0; });',
    '  }',
    '  function stSlider(slides, label) {',
    '    if (!slides.length) return "";',
    '    return "<div class=\\"st-slider\\" aria-roledescription=\\"carousel\\" aria-label=\\"" + esc(label) + "\\"><div class=\\"st-track\\">" + slides.join("") + "</div>" +',
    '      (slides.length > 1 ? "<button type=\\"button\\" class=\\"st-nav st-prev\\" aria-label=\\"Önceki görsel\\">‹</button><button type=\\"button\\" class=\\"st-nav st-next\\" aria-label=\\"Sonraki görsel\\">›</button><div class=\\"st-count\\">1 / " + slides.length + "</div>" : "") + "</div>";',
    '  }',
    '  function renderSite(slug) {',
    '    var e = ST_BY[slug]; if (!e) return;',
    '    var s = e.s, k = MH_KART[s[0]], m = MH_BY[MH_SLUG[e.mh]], ls = stListings(s);',
    '    $("mhCrumbs").innerHTML = "<a href=\\"#anasayfa\\">Ana sayfa</a> / <a href=\\"#beylikduzu\\">Beylikdüzü</a> / <a href=\\"#mahalle-" + MH_SLUG[e.mh] + "\\">" + e.mh + " Mahallesi</a> / " + esc(s[0]);',
    '    $("mhTitle").textContent = s[0];',
    '    var dev = k && k.bilgi[0] && k.bilgi[0][0] === "Yapımcı" ? k.bilgi[0][1] : "";',
    '    $("mhLead").textContent = e.mh + " Mahallesi, Beylikdüzü" + (dev ? " · " + dev : "");',
    '    var slides = [], credit = "";',
    '    if (k && ST_FOTO[s[0]]) {',
    '      slides = ST_FOTO[s[0]].map(function (u, i) { return "<figure class=\\"st-slide\\"><img class=\\"st-img\\" src=\\"" + esc(u) + "\\" alt=\\"" + esc(s[0]) + " görsel " + (i + 1) + "\\" loading=\\"" + (i ? "lazy" : "eager") + "\\" referrerpolicy=\\"no-referrer\\"></figure>"; });',
    '      credit = "<p class=\\"st-credit\\">Görseller: " + esc(k.kaynak) + " (resmi site)</p>";',
    '    } else if (ls.length) {',
    '      slides = ls.slice(0, 10).map(function (l) { return "<figure class=\\"st-slide\\">" + imgTag(listingImg(l), l.title) + "<figcaption><button type=\\"button\\" data-code=\\"" + esc(l.code) + "\\">" + esc(l.title) + " · " + priceLabel(l) + " →</button></figcaption></figure>"; });',
    '      credit = "<p class=\\"st-credit\\">Görseller: RE/MAX Toprak portföyündeki bu siteye ait ilanlar</p>";',
    '    }',
    '    var rows = (k ? k.bilgi.slice() : []);',
    '    rows.push(["Mahalle", "<a href=\\"#mahalle-" + MH_SLUG[e.mh] + "\\">" + e.mh + " Mahallesi</a>"]);',
    '    if (s[3]) rows.push(["En yakın metrobüs", esc(s[3]) + " · " + fmtDist(s[4]) + " (kuş uçuşu)"]);',
    '    if (m && m[7] && m[7].length) rows.push(["Mahalleden geçen otobüs hatları", m[7].join(", ")]);',
    '    rows.push(["Portföyümüzde", ls.length ? ls.length + " ilan" : "Şu anda ilan yok"]);',
    '    var table = "<table class=\\"st-table\\"><tbody>" + rows.map(function (r, i) { return "<tr><th scope=\\"row\\">" + esc(r[0]) + "</th><td>" + (k && i < k.bilgi.length ? esc(r[1]) : r[1]) + "</td></tr>"; }).join("") + "</tbody></table>";',
    '    var src = k ? "<p class=\\"mh-note\\">Bilgiler sitenin resmi sayfasından alınmıştır: <a href=\\"" + esc(k.url) + "\\" target=\\"_blank\\" rel=\\"noopener\\">" + esc(k.kaynak) + " ↗</a></p>"',
    '      : "<p class=\\"mh-note\\">Bu site için resmi bir tanıtım kaynağı bulunamadığından tanıtım bilgisi verilmemiştir. Site hakkında bilgi almak için bizi arayın.</p>";',
    '    var others = (MH_SITES[e.mh] || []).filter(function (x) { return x[0] !== s[0]; }).map(function (x) { return "<a href=\\"#site-" + ST_SLUG[e.mh + "|" + x[0]] + "\\">" + esc(x[0]) + "</a>"; }).join("");',
    '    var body = "<div class=\\"st-top" + (slides.length ? "" : " st-noslide") + "\\">" + (slides.length ? "<div>" + stSlider(slides, s[0] + " görselleri") + credit + "</div>" : "") +',
    '      "<div class=\\"mh-box\\"><h3>Site bilgileri</h3>" + table + src +',
    '      "<div class=\\"mh-actions\\">" + (ls.length ? "<a class=\\"btn btn-red\\" href=\\"#ilanlar\\" data-town=\\"Beylikdüzü\\" data-q=\\"" + esc(s[5]) + "\\">Bu sitedeki " + ls.length + " ilanı gör</a>" : "") +',
    '      "<a class=\\"btn btn-outline\\" href=\\"#degerleme\\">Bu sitedeki evinizi değerleyelim</a></div></div></div>" +',
    '      "<div class=\\"mh-box\\"><h3>Konum</h3>" + (s[1] ? "<div class=\\"mh-map st-map\\" id=\\"mhMap\\"></div><p class=\\"mh-note\\">Mavi nokta siteyi, kırmızı noktalar metrobüs duraklarını gösterir. Konum OpenStreetMap kaydından alınmıştır.</p>" : "<p>Bu sitenin harita konumu henüz kayıtlı değil.</p>") + "</div>" +',
    '      (ls.length ? "<div class=\\"mh-box\\"><h3>Bu sitedeki ilanlarımız</h3><div class=\\"listing-grid st-grid\\">" + ls.slice(0, 6).map(cardHTML).join("") + "</div></div>" : "") +',
    '      (others ? "<div class=\\"mh-box mh-others\\"><h3>" + e.mh + " Mahallesi’ndeki diğer siteler</h3><div class=\\"mh-chips mh-nb\\">" + others + "</div></div>" : "");',
    '    $("mhBody").innerHTML = body;',
    '    setMeta(s[0] + ", " + e.mh + " Mahallesi, Beylikdüzü: Site Bilgileri ve İlanlar | RE/MAX Toprak", s[0] + " (" + e.mh + " Mahallesi, Beylikdüzü): " + (dev ? dev + " projesi; " : "") + "konum, en yakın metrobüs, ulaşım ve RE/MAX Toprak portföyündeki satılık/kiralık ilanlar.");',
    '    if (s[1]) leaflet(function () {',
    '      if (!document.getElementById("mhMap")) return;',
    '      if (MH_MAP) { MH_MAP.remove(); MH_MAP = null; }',
    '      var map = MH_MAP = window.L.map("mhMap", { scrollWheelZoom: false }).setView([s[1], s[2]], 15);',
    '      window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap katkıda bulunanlar" }).addTo(map);',
    '      if (MH_POLY[e.mh]) window.L.polygon(MH_POLY[e.mh], { color: "#1A3668", weight: 1.5, fillOpacity: 0.05 }).addTo(map);',
    '      Object.keys(MH_ST).forEach(function (n) { window.L.circleMarker(MH_ST[n], { radius: 7, color: "#fff", weight: 2, fillColor: "#DC1C2E", fillOpacity: 1 }).addTo(map).bindTooltip("Metrobüs: " + n); });',
    '      window.L.circleMarker([s[1], s[2]], { radius: 9, color: "#fff", weight: 2, fillColor: "#1F69FF", fillOpacity: 1 }).addTo(map).bindTooltip(s[0], { permanent: true, direction: "top" });',
    '    });',
    '  }',
    '  function stIndex(t) {',
    '    var x = t.scrollLeft + t.children[0].offsetLeft, best = 0, d = 1e9;',
    '    [].forEach.call(t.children, function (c, i) { var dd = Math.abs(c.offsetLeft - x); if (dd < d) { d = dd; best = i; } });',
    '    return best;',
    '  }',
    '  document.addEventListener("click", function (e) {',
    '    var b = e.target.closest && e.target.closest(".st-nav"); if (!b) return;',
    '    var t = b.parentNode.querySelector(".st-track"), n = t.children.length;',
    '    var i = (stIndex(t) + (b.classList.contains("st-next") ? 1 : -1) + n) % n;',
    '    t.scrollLeft = t.children[i].offsetLeft - t.children[0].offsetLeft;',
    '  });',
    '  document.addEventListener("scroll", function (e) {',
    '    var t = e.target; if (!t.classList || !t.classList.contains("st-track")) return;',
    '    var c = t.parentNode.querySelector(".st-count"); if (c) c.textContent = (stIndex(t) + 1) + " / " + t.children.length;',
    '  }, true);',
    '  document.addEventListener("error", function (e) {',
    '    var t = e.target; if (!t || !t.classList || !t.classList.contains("st-img")) return;',
    '    var f = t.closest(".st-slide"), tr = f && f.parentNode; if (!f) return; f.remove();',
    '    var sl = tr.parentNode; if (!tr.children.length) { sl.remove(); return; }',
    '    var c = sl.querySelector(".st-count"); if (c) c.textContent = (stIndex(tr) + 1) + " / " + tr.children.length;',
    '    if (tr.children.length < 2) [].forEach.call(sl.querySelectorAll(".st-nav,.st-count"), function (x) { x.remove(); });',
    '  }, true);',
    ''
  ].join('\n');
  js = rep(js, '  function route() {', code + '\n  function route() {', 'route-fn');
  js = rep(js, "    else if (h.indexOf('mahalle-') === 0 && MH_BY[h.slice(8)])",
    "    else if (h.indexOf('site-') === 0 && ST_BY[h.slice(5)]) { view = 'mahalle'; slug = 'site:' + h.slice(5); }\n    else if (h.indexOf('mahalle-') === 0 && MH_BY[h.slice(8)])", 'route-site');
  js = rep(js, '  function renderMahalle(slug) {', '  function renderMahalle(slug) {\n    if (slug && slug.indexOf("site:") === 0) return renderSite(slug.slice(5));', 'renderMahalle-hook');
  // Mahalle sayfasındaki site kartı: ad ve "Site sayfası" butonu yeni sayfaya gider; açılır detay yerine sayfa
  js = rep(js, '"\\"><b>" + esc(s[0]) + "</b>" +', '"\\"><b><a class=\\"mh-site-name\\" href=\\"#site-" + ST_SLUG[m[1] + "|" + s[0]] + "\\">" + esc(s[0]) + "</a></b>" +', 'card-name');
  js = rep(js, '"<div class=\\"mh-site-links\\">" + (s[1] ?', '"<div class=\\"mh-site-links\\"><a class=\\"mh-site-go\\" href=\\"#site-" + ST_SLUG[m[1] + "|" + s[0]] + "\\">Site sayfası →</a>" + (s[1] ?', 'card-button');
  js = rep(js, '+ "</div>" + siteKart(s[0]) + "</div>";', '+ "</div></div>";', 'card-kart-off');

  css += '/* Site sayfaları */\n' +
    '.mh-site-name{color:inherit;text-decoration:none}.mh-site-name:hover{color:#DC1C2E}\n' +
    '.mh-site-links .mh-site-go{display:inline-block;padding:6px 12px;border-radius:999px;background:#DC1C2E;color:#fff!important}\n' +
    '.st-top{display:grid;grid-template-columns:1.25fr 1fr;gap:28px;align-items:start;margin-bottom:28px}.st-top.st-noslide{grid-template-columns:1fr}\n' +
    '.st-slider{position:relative;border-radius:16px;overflow:hidden;background:#0c1a33}\n' +
    '.st-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.st-track::-webkit-scrollbar{display:none}\n' +
    '.st-slide{flex:0 0 100%;scroll-snap-align:start;margin:0;position:relative;aspect-ratio:4/3}\n' +
    '.st-slide img{width:100%;height:100%;object-fit:cover;display:block}\n' +
    '.st-slide figcaption{position:absolute;left:0;right:0;bottom:0;padding:28px 14px 12px;background:linear-gradient(transparent,rgba(0,0,0,.7))}\n' +
    '.st-slide figcaption button{background:none;border:0;padding:0;color:#fff;font:inherit;font-weight:600;font-size:14px;text-align:left;cursor:pointer}\n' +
    '.st-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.9);color:#1A3668;font-size:28px;line-height:1;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2)}\n' +
    '.st-prev{left:12px}.st-next{right:12px}\n' +
    '.st-count{position:absolute;top:12px;right:12px;padding:4px 10px;border-radius:999px;background:rgba(0,0,0,.55);color:#fff;font-size:13px;font-weight:600}\n' +
    '.st-credit{margin:8px 0 0;font-size:12px;color:#667085}\n' +
    '.st-table{width:100%;border-collapse:collapse;font-size:15px}\n' +
    '.st-table th,.st-table td{padding:10px 12px;border-bottom:1px solid var(--line,#e3e6ee);text-align:left;vertical-align:top}\n' +
    '.st-table th{width:38%;font-weight:700;color:#1d2939;background:#f7f8fb}.st-table td{color:#344054}\n' +
    '.st-table a{color:#DC1C2E;font-weight:600}\n' +
    '.st-map{height:380px}\n' +
    '.st-grid{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}\n' +
    '@media (max-width:900px){.st-top{grid-template-columns:1fr}.st-map{height:300px}}\n';

  f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { siteSayfa, FOTO };
