// RE/MAX Toprak — mahalle sayfalarına "Mahalledeki siteler" bölümü (yama.mjs çağırır, yama-mahalle.mjs'den sonra)
// Kaynak: OpenStreetMap adlı konut alanları/siteler (24 Kasım 2026) + RE/MAX Toprak ilan başlıklarında geçen siteler.
// Kayıt: [ad, enlem, boylam, en yakın metrobüs, mesafe (m), ilan araması için anahtar]

const SITES = {
  "Adnan Kahveci": [["Ahenk İstanbul",40.9883,28.6261,"Cumhuriyet Mahallesi",3300,"ahenk istanbul"],["Aktel Residence",41.0046,28.6216,"Beykent",1800,"aktel"],["Alya Trio",40.9988,28.632,"Cumhuriyet Mahallesi",2000,"alya trio"],["Asmalı Park Konakları",40.9932,28.632,"Beylikdüzü Belediye",2600,"asmalı park"],["Banksis Sitesi",41.0123,28.6302,"Beykent",800,"banksis"],["Belinay Evleri",40.9903,28.6261,"Cumhuriyet Mahallesi",3100,"belinay"],["Beyaz Konaklar 4",null,null,null,null,"beyaz konaklar"],["Beykent Locca Sitesi",40.9981,28.634,"Cumhuriyet Mahallesi",2000,"beykent locca"],["Dora Park Evleri (3, 4, 5, 6)",40.9981,28.6328,"Cumhuriyet Mahallesi",2100,"dora park"],["Ekşioğlu Akkent Şelale Evleri",40.9967,28.6209,"Beykent",2700,"ekşioğlu akkent"],["Elit Park Evleri",41.0029,28.6316,"Cumhuriyet Mahallesi",1600,"elit park"],["Evimiz Beylikdüzü",40.9996,28.6318,"Cumhuriyet Mahallesi",1900,"evimiz"],["Gizil Evleri",40.9935,28.6298,"Cumhuriyet Mahallesi",2600,"gizil"],["Harman Konutları",40.9962,28.6351,"Beylikdüzü Belediye",2200,"harman konut"],["Indelux",40.9954,28.6318,"Cumhuriyet Mahallesi",2400,""],["İrem Evleri",41.0073,28.6302,"Cumhuriyet Mahallesi",1300,""],["Kale Kent (1 ve 2)",41.0008,28.6342,"Cumhuriyet Mahallesi",1700,"kale kent"],["Kılıçkent Sitesi",40.9976,28.6224,"Beykent",2500,"kılıçkent"],["Konak Kent",40.9956,28.6349,"Beylikdüzü Belediye",2200,""],["Kubist Park Residence",41.0078,28.6246,"Beykent",1400,"kubist park"],["Mavikent Sitesi",41.0046,28.6227,"Beykent",1800,"mavikent"],["Midpoint",40.9942,28.626,"Cumhuriyet Mahallesi",2700,""],["Naturapark",40.9961,28.6317,"Cumhuriyet Mahallesi",2300,"naturapark"],["Nevsa Konakları",40.9993,28.6335,"Cumhuriyet Mahallesi",1900,"nevsa"],["Onurkent Sitesi",40.9965,28.6369,"Beylikdüzü Belediye",2000,"onurkent"],["Özgür Kale Evleri",null,null,null,null,"özgür kale"],["Papatya Vadi Konakları",40.9942,28.6319,"Cumhuriyet Mahallesi",2500,"papatya vadi"],["Park Gardenya Evleri",40.9954,28.6249,"Cumhuriyet Mahallesi",2600,"park gardenya"],["Parlamenterler Sitesi",41.0097,28.6275,"Beykent",1100,"parlamenterler"],["Platin Residence",41.0007,28.6272,"Cumhuriyet Mahallesi",2000,"platin"],["Prestij Konakları (2 ve 4)",40.9992,28.6355,"Beylikdüzü Belediye",1900,"prestij"],["Sera Konutları",41.0101,28.6302,"Beykent",1000,"sera konut"],["Siena House",40.9991,28.632,"Cumhuriyet Mahallesi",2000,"siena house"],["Tabanlı Sitesi",40.9979,28.6252,"Cumhuriyet Mahallesi",2400,"tabanlı"],["Velittin Küçük Sitesi",40.9958,28.6199,"Beykent",2800,"velittin küçük"],["Yeşilkent Siteleri (1, 2, 3)",41.0017,28.6238,"Beykent",2100,"yeşilkent"],["Yurt Konakları",40.9986,28.6267,"Cumhuriyet Mahallesi",2200,"yurt konak"]],
  "Barış": [["Ada 90 Sitesi",40.9991,28.654,"Beylikdüzü",1200,""],["Aslan Residence",41.0075,28.6544,"Beylikdüzü",300,"aslan"],["Av-Kon Sitesi",40.9945,28.647,"Beylikdüzü",1900,"av-kon"],["Beyaz Vadi",40.9986,28.6564,"Güzelyurt",1100,""],["Boğaziçi Sitesi",41.0073,28.6559,"Beylikdüzü",300,"boğaziçi"],["Çağdaş 91 Sitesi",41.0048,28.6588,"Güzelyurt",600,"çağdaş"],["Çelikkanatlar Megakent",null,null,null,null,"çelikkanatlar megakent"],["Daçka Sitesi",41.0082,28.6537,"Beylikdüzü",300,"daçka"],["Denizkent",40.9987,28.6459,"Beylikdüzü",1500,""],["Düden Villaları (1 ve 2)",41.0017,28.6555,"Beylikdüzü",900,"düden"],["Evrim 2 Sitesi",40.9996,28.6463,"Beylikdüzü",1400,"evrim"],["Ginza Lavinya Park",41.0097,28.6533,"Beylikdüzü",200,"ginza lavinya"],["Gökbey Sitesi",41.0032,28.6573,"Beylikdüzü",700,"gökbey"],["Gözde Sitesi",41.0049,28.6531,"Beylikdüzü",600,"gözde"],["Işık Sitesi",41.005,28.6527,"Beylikdüzü",600,""],["İstanbul Özenkent",41.0058,28.6562,"Beylikdüzü",500,"istanbul özenkent"],["Koçerler Sitesi",40.9982,28.645,"Beylikdüzü",1600,"koçerler"],["Konformist Residence",41.0061,28.655,"Beylikdüzü",400,"konformist"],["Koru Konut Villa",41.0016,28.655,"Beylikdüzü",900,"koru"],["Kutlu Sitesi",41.007,28.6557,"Beylikdüzü",300,"kutlu"],["Makyol Yaşam",41.0042,28.6545,"Beylikdüzü",600,"makyol yaşam"],["Müfettişler Sitesi",41.0068,28.6525,"Beylikdüzü",500,"müfettişler"],["Nezih Ekolkent",40.9991,28.647,"Beylikdüzü",1400,"nezih ekolkent"],["Okatan Sitesi",40.9957,28.6487,"Beylikdüzü",1700,"okatan"],["Orta Hisar Sitesi",41.005,28.6585,"Beylikdüzü",600,"orta hisar"],["Piramit Konutları",41.0046,28.657,"Beylikdüzü",600,"piramit"],["Prestij Konak",41.0056,28.6536,"Beylikdüzü",500,""],["Semerkand Line",41.0062,28.6511,"Beylikdüzü",600,"semerkand line"],["Serhad Sitesi",40.9961,28.6469,"Beylikdüzü",1700,"serhad"],["Sezgi Sitesi",41.0004,28.65,"Beylikdüzü",1200,"sezgi"],["Tüze Sitesi",41.0027,28.6584,"Güzelyurt",700,""],["West Side 2 Sitesi",41.0098,28.6514,"Beylikdüzü Belediye",400,"west side"],["Yakamoz Sitesi",40.9975,28.6457,"Beylikdüzü",1600,"yakamoz"],["Yeşili Sevenler Sitesi",40.9982,28.6465,"Beylikdüzü",1500,"yeşili sevenler"]],
  "Büyükşehir": [["Büyükşehir Konutları (A, B, C kısımları)",41.0075,28.6455,"Beylikdüzü Belediye",500,""],["Ekinoks Residence",41.0131,28.6443,"Cumhuriyet Mahallesi",400,"ekinoks"]],
  "Cumhuriyet": [["Alya Dolunay Sitesi",null,null,null,null,"alya dolunay"],["Beycity Residence",41.0118,28.6433,"Cumhuriyet Mahallesi",400,"beycity"],["Bizimkent",41.0106,28.6396,"Cumhuriyet Mahallesi",600,"bizimkent"],["Demir Romance",41.0137,28.6357,"Cumhuriyet Mahallesi",500,"demir romance"],["İmamoğlu 1 Sitesi",41.0032,28.6426,"Beylikdüzü Belediye",1200,"imamoğlu"],["Kameroğlu Metrohome ve Metrohome Suits",41.0134,28.6372,"Cumhuriyet Mahallesi",400,"kameroğlu metrohome"],["Saklıhan Konakları",41.0037,28.6414,"Beylikdüzü Belediye",1200,"saklıhan"],["Yılmaz Konutları",41.0154,28.6366,"Cumhuriyet Mahallesi",400,"yılmaz konut"]],
  "Dereağzı": [["Deniztepe Evleri",40.9672,28.6268,"Beylikdüzü",5300,"deniztepe"],["Derya Sitesi",40.964,28.6319,"Beylikdüzü",5500,"derya"],["Mercan Konakları",40.9851,28.6122,"Beykent",4100,"mercan konak"],["Mevlana Villa",40.9649,28.626,"Beylikdüzü",5600,""],["Şanlı Konak 3",40.9864,28.6122,"Beykent",4000,"şanlı konak"]],
  "Gürpınar": [["Beyazkent Sitesi",40.9858,28.6087,"Beykent",4200,"beyazkent"],["Kırlangıç Evleri",40.9886,28.6079,"Beykent",3900,"kırlangıç"],["Kolejliler Sitesi",40.9884,28.6059,"Beykent",4000,"kolejliler"],["Köktaş Konakları",40.9898,28.6097,"Beykent",3700,"köktaş"],["Sultan Fatih Sitesi",40.9873,28.6048,"Beykent",4200,"sultan fatih"],["Umut 88",40.9873,28.606,"Beykent",4100,""]],
  "Kavaklı": [["Çınar Evleri",40.9793,28.6566,"Güzelyurt",3100,"çınar"],["Demir Country",null,null,null,null,"demir country"],["İhlas Marmara Evleri 2. Etap",40.984,28.6554,"Güzelyurt",2600,"ihlas marmara"],["Kavaklı Konakları",40.9892,28.659,"Güzelyurt",2000,"kavaklı konakları"],["Marmara Konakları 2",40.9716,28.6318,"Beylikdüzü",4700,"marmara konakları"],["Özay Tepe Sitesi",40.9846,28.6652,"Güzelyurt",2400,"özay tepe"],["Palm Marin Sitesi",null,null,null,null,"palm marin"]],
  "Marmara": [["Erguvan Konutları",40.984,28.667,"Haramidere",2500,"erguvan konut"],["İhlas Marmara Evleri 1.Etap",40.9786,28.6781,"Haramidere Sanayi",2900,"ihlas marmara"],["Kalyon Villaları",40.9692,28.6541,"Güzelyurt",4300,"kalyon villa"],["Marina Evleri",40.9662,28.6619,"Güzelyurt",4500,""],["Mercan Konakları",40.9719,28.6549,"Güzelyurt",4000,"mercan konak"],["Sedef Konakları",40.9681,28.6608,"Güzelyurt",4300,"sedef konak"],["Yakamoz Evleri",40.9655,28.6563,"Güzelyurt",4600,"yakamoz"]],
  "Sahil": [["Marmara Kavaklıkent Sitesi",40.9756,28.6557,"Güzelyurt",3500,"marmara kavaklıkent"],["Palm Marin Sitesi",null,null,null,null,"palm marin"],["Panorama",40.9754,28.6534,"Güzelyurt",3600,""]],
  "Yakuplu": [["Asel Evleri",41.0002,28.67,"Haramidere",700,""],["Cornerpark 2 Sitesi",null,null,null,null,"cornerpark"],["Metropark Evleri",41.0022,28.6743,"Haramidere",400,"metropark"],["Newport Rezidans",40.9911,28.6691,"Haramidere",1700,"newport"],["Özgünkent Sitesi",41.0039,28.6748,"Haramidere",300,"özgünkent"],["Skyport Residence",41.0075,28.6608,"Güzelyurt",400,"skyport"],["Tor Beylikdüzü Sitesi",null,null,null,null,"tor beylikdüzü"],["Yakuplu Konakları",41.0026,28.6691,"Haramidere",500,"yakuplu konakları"],["Yakut Evler",40.9843,28.6784,"Haramidere Sanayi",2300,"yakut"]]
};

function siteler(f) {
  let js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (siteler): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };

  const code = [
    '  var MH_SITES = ' + JSON.stringify(SITES) + ';',
    '  var MH_SITE_MK = {};',
    '  function siteCount(q) {',
    '    if (!q || typeof L === "undefined" || !L.filter) return 0;',
    '    return L.filter(function (l) { return l.loc2 && l.loc2.town === "Beylikdüzü" && l.search && l.search.indexOf(q) >= 0; }).length;',
    '  }',
    '  function fmtDist(d) { return d < 1000 ? "yaklaşık " + d + " m" : "yaklaşık " + String(Math.round(d / 100) / 10).replace(".", ",") + " km"; }',
    '  function mhSites(m) {',
    '    var list = MH_SITES[m[1]] || []; var g = document.querySelector("#mhBody .mh-grid"); if (!g || !list.length) return;',
    '    var cards = list.map(function (s, i) {',
    '      var n = siteCount(s[5]);',
    '      return "<div class=\\"mh-site\\" data-name=\\"" + esc(s[0].toLocaleLowerCase("tr-TR")) + "\\"><b>" + esc(s[0]) + "</b>" +',
    '        (s[3] ? "<span>En yakın metrobüs: " + esc(s[3]) + " · " + fmtDist(s[4]) + "</span>" : "<span>Konum bilgisi portföyümüzden</span>") +',
    '        "<div class=\\"mh-site-links\\">" + (s[1] ? "<button type=\\"button\\" class=\\"mh-site-pin\\" data-i=\\"" + i + "\\">Haritada göster</button>" : "") +',
    '        (n ? "<a href=\\"#ilanlar\\" data-town=\\"Beylikdüzü\\" data-q=\\"" + esc(s[5]) + "\\">" + n + " ilanımız →</a>" : "") + "</div></div>";',
    '    }).join("");',
    '    var html = "<div class=\\"mh-box mh-sites\\" id=\\"mhSites\\"><div class=\\"mh-sites-head\\"><h3>" + m[1] + " Mahallesi’ndeki siteler <small>" + list.length + " site</small></h3>" +',
    '      (list.length > 8 ? "<input type=\\"search\\" class=\\"mh-site-search\\" placeholder=\\"Site adı ara\\" aria-label=\\"Site adı ara\\">" : "") + "</div>" +',
    '      "<div class=\\"mh-site-grid\\">" + cards + "</div><p class=\\"mh-site-empty\\" hidden>Bu adla bir site bulunamadı.</p>" +',
    '      "<p class=\\"mh-note\\">Liste OpenStreetMap kayıtları ve RE/MAX Toprak portföyündeki ilanlardan derlenmiştir; mahalledeki tüm siteleri kapsamayabilir. Haritada mavi noktalar siteleri gösterir. Listede olmayan bir site için bize yazın, ekleyelim.</p></div>";',
    '    g.insertAdjacentHTML("afterend", html);',
    '  }',
    '  function mhSiteMarkers(map, sel) {',
    '    MH_SITE_MK = {}; var m = MH_BY[sel]; if (!m) return;',
    '    (MH_SITES[m[1]] || []).forEach(function (s, i) {',
    '      if (!s[1]) return;',
    '      MH_SITE_MK[i] = window.L.circleMarker([s[1], s[2]], { radius: 5, color: "#fff", weight: 1.5, fillColor: "#1F69FF", fillOpacity: 1 }).addTo(map).bindTooltip(s[0]);',
    '    });',
    '  }',
    '  document.addEventListener("click", function (e) {',
    '    var b = e.target.closest && e.target.closest(".mh-site-pin"); if (!b || !MH_MAP) return;',
    '    var mk = MH_SITE_MK[b.dataset.i]; if (!mk) return;',
    '    var el = document.getElementById("mhMap"); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });',
    '    MH_MAP.setView(mk.getLatLng(), 16); mk.openTooltip();',
    '  });',
    '  document.addEventListener("input", function (e) {',
    '    if (!e.target.classList || !e.target.classList.contains("mh-site-search")) return;',
    '    var q = e.target.value.toLocaleLowerCase("tr-TR").trim(), shown = 0;',
    '    [].forEach.call(document.querySelectorAll("#mhSites .mh-site"), function (c) { var ok = !q || c.dataset.name.indexOf(q) >= 0; c.hidden = !ok; if (ok) shown++; });',
    '    var em = document.querySelector("#mhSites .mh-site-empty"); if (em) em.hidden = shown > 0;',
    '  });',
    ''
  ].join('\n');
  js = rep(js, '  function route() {', code + '\n  function route() {', 'route-fn');
  js = rep(js, '    drawMap(m[0]);', '    mhSites(m);\n    drawMap(m[0]);', 'render-hook');
  js = rep(js, '      if (focus) map.fitBounds(', '      if (sel) mhSiteMarkers(map, sel);\n      if (focus) map.fitBounds(', 'map-hook');
  js = rep(js, '"</span><i>" + (n ? n + " ilan · " : "")', '"</span><i>" + ((MH_SITES[x[1]] || []).length ? (MH_SITES[x[1]] || []).length + " site · " : "") + (n ? n + " ilan · " : "")', 'overview-count');

  css += '/* Mahalledeki siteler */\n' +
    '.mh-sites-head{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.mh-sites-head h3{margin:0}\n' +
    '.mh-sites-head small{font-size:14px;font-weight:600;color:#667085;margin-left:6px}\n' +
    '.mh-site-search{flex:0 1 280px;padding:10px 14px;border:1px solid var(--line,#e3e6ee);border-radius:12px;font:inherit;font-size:15px}\n' +
    '.mh-site-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}\n' +
    '.mh-site{display:flex;flex-direction:column;gap:4px;padding:14px 16px;border:1px solid var(--line,#e3e6ee);border-radius:14px;background:#fff}\n' +
    '.mh-site b{font-size:16px}.mh-site span{font-size:13px;color:#667085}\n' +
    '.mh-site-links{display:flex;flex-wrap:wrap;gap:14px;margin-top:6px;font-size:14px;font-weight:600}\n' +
    '.mh-site-links a{color:#DC1C2E;text-decoration:none}\n' +
    '.mh-site-pin{background:none;border:0;padding:0;font:inherit;font-weight:600;color:#1F69FF;cursor:pointer}\n' +
    '.mh-site-empty{color:#667085;margin-top:10px}\n';

  f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { siteler };
