// RE/MAX Toprak — site kartlarına "Detaylar" bölümü (yama.mjs çağırır, yama-siteler.mjs'den sonra)
// Kural: Yalnızca resmi web sitesi (sitenin kendi sitesi ya da yapımcı firmanın resmi proje sayfası) olan sitelere kart eklenir.
// Bilgiler yalnızca o resmi sayfadan alınmıştır (kontrol: 24 Kasım 2026). Haber ve ilan portalları kaynak olarak kullanılmadı.

const KART = {
  'Kameroğlu Metrohome ve Metrohome Suits': {
    url: 'https://www.kameroglumetrohome.com/', kaynak: 'kameroglumetrohome.com',
    bilgi: [
      ['Yapımcı', 'Kameroğlu İnşaat'],
      ['Konum', 'Kuzeyde E-5, güneyde Yaşam Vadisi parkı; metrobüs durağı önünde, TEM’e 3 dakika'],
      ['Daire tipleri', 'Metrohome Suites: 2+1, 3+1, 4+1 ve 3+2–7+2 dubleks · Metrohome Residence: 1+1, 2+1 ve 2+1, 3+2, 4+1 dubleks'],
      ['Sosyal alanlar', 'Açık ve kapalı yüzme havuzu, fitness, yoga ve pilates salonları, çocuk oyun ve aktivite alanları'],
      ['Diğer', '3 katlı kapalı otopark, 7/24 güvenlik; kafe, restoran ve mağazaların yer aldığı Metrohome Cadde']
    ]
  },
  'İhlas Marmara Evleri 1.Etap': {
    url: 'https://ihlas.com.tr/en/ihlas-construction-group', kaynak: 'ihlas.com.tr',
    bilgi: [
      ['Yapımcı', 'İhlas İnşaat Grubu'],
      ['Büyüklük', '2.856 konut, 100 ticari birim'],
      ['Durum', 'Tamamlanmış proje']
    ]
  },
  'İhlas Marmara Evleri 2. Etap': {
    url: 'https://ihlas.com.tr/en/ihlas-construction-group', kaynak: 'ihlas.com.tr',
    bilgi: [
      ['Yapımcı', 'İhlas İnşaat Grubu'],
      ['Büyüklük', '2.186 konut, 96 ticari birim'],
      ['Durum', 'Tamamlanmış proje']
    ]
  },
  'Kırlangıç Evleri': {
    url: 'https://kiptas.istanbul/projeler/tamamlanan-projeler/kiptas-beylikduzu-kirlangic-evler', kaynak: 'kiptas.istanbul',
    bilgi: [
      ['Yapımcı', 'KİPTAŞ (Beylikdüzü Belediyesi iş birliğiyle Gürpınar kentsel dönüşüm projesi)'],
      ['Büyüklük', '10 blok; 523 konut ve 15 ticari birim, toplam 538 bağımsız birim'],
      ['Özellikler', 'Havuz, fitness salonu, spor alanları, çocuk oyun alanları, sosyal tesis, dükkânlar, kapalı ve açık otopark, peyzaj alanları']
    ]
  },
  'Alya Trio': {
    url: 'https://boss4.com.tr/alya-trio', kaynak: 'boss4.com.tr',
    bilgi: [
      ['Yapımcı', 'BOSS4 İnşaat'],
      ['Proje tarihi', '2015'],
      ['Büyüklük', '3 blok; 26 konut, 5 ticari alan · 2.167 m²'],
      ['Sosyal alanlar', 'Kapalı yüzme havuzu, spor salonu, sauna, Türk hamamı, otopark, çocuk oyun ve yürüyüş alanları']
    ]
  },
  'Alya Dolunay Sitesi': {
    url: 'https://boss4.com.tr/alya-dolunay', kaynak: 'boss4.com.tr',
    bilgi: [
      ['Yapımcı', 'BOSS4 İnşaat'],
      ['Proje tarihi', '2021'],
      ['Büyüklük', '2 blok; 108 konut, 12 ticari alan · 5.057 m²'],
      ['Sosyal alanlar', 'Kapalı yüzme havuzu, spor salonu, sauna, Türk hamamı, otopark, çocuk oyun ve yürüyüş alanları']
    ]
  },
  'Demir Romance': {
    url: 'https://www.demirholding.com.tr/tr/grup-sirketleri/demir-insaat/konut/demir-romance', kaynak: 'demirholding.com.tr',
    bilgi: [
      ['Yapımcı', 'Demir İnşaat (Demir Holding)'],
      ['Tarih', 'Yapımına Ocak 2013’te başlandı, Ağustos 2015’te yaşam başladı'],
      ['Daire tipleri', '1+1’den 4,5+1’e daireler ve 28 villa; tüm dairelerde akıllı ev sistemi'],
      ['Sosyal alanlar', 'Romance Club: açık ve kapalı havuz, tenis kortu, basketbol sahası, hamam, sauna ve buhar odalı SPA, fitness'],
      ['Çocuklar için', 'Çocuk havuzu, çocuk parkı, oyun alanları, kreş'],
      ['Diğer', 'Romance Çarşı ticari alanları, toplantı odaları ve lounge alanları']
    ]
  },
  'Demir Country': {
    url: 'https://www.demirholding.com.tr/tr/grup-sirketleri/demir-insaat/konut/demir-country', kaynak: 'demirholding.com.tr',
    bilgi: [
      ['Yapımcı', 'Demir İnşaat (Demir Holding)'],
      ['Yapı', 'Farklı mimarideki 3 ve 6 bloklu iki blok grubu; aralarında açık AVM’nin ana aksı Nevizade Caddesi, Galata ve Pera konseptli sokaklar'],
      ['Daire tipleri', '1+1, 2+1, 3+1 (kat planlarında yaklaşık 60–85 m²); tüm odalarda balkon'],
      ['Sosyal alanlar', '1.000 m² kapalı spor ve sağlık merkezi, açık AVM’de mağaza ve restoranlar']
    ]
  },
  'Ginza Lavinya Park': {
    url: 'https://www.kelesogluholding.com/projeler/ginza-lavinya-park/', kaynak: 'kelesogluholding.com',
    bilgi: [
      ['Yapımcı', 'Keleşoğlu Holding'],
      ['Mimar', 'A Tasarım – Ali Osman Öztürk'],
      ['Daire tipleri', '1+1, 2+1, 3+1, 4+1; önde 158 ofisli ofis bloğu'],
      ['Sosyal alanlar', 'Kapalı yüzme havuzu, SPA, sauna, hamam, restoran/kafe, oyun parkı'],
      ['Adres', 'Barış Mah. Mehmetçik Cd. No:30, Beylikdüzü']
    ]
  },
  'Semerkand Line': {
    url: 'https://www.semerkandyapi.com.tr/tum_projeler.html', kaynak: 'semerkandyapi.com.tr',
    bilgi: [
      ['Yapımcı', 'Semerkand Yapı'],
      ['Büyüklük', '555 daire ve 95 mağaza; 23 dönüm alanın %85’i rekreasyon alanı'],
      ['Daire tipleri', '1+1, 2+1, 3+1, 4+1 ve dubleks'],
      ['Sosyal alanlar', 'Açık ve kapalı yüzme havuzu, fitness center, çok amaçlı aktivite salonu, çocuk kulübü, satranç kulübü'],
      ['Otopark', '850 araçlık kapalı otopark']
    ]
  }
};

function siteKart(f) {
  let js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (site-kart): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };

  const code = [
    '  var MH_KART = ' + JSON.stringify(KART) + ';',
    '  function siteKart(name) {',
    '    var k = MH_KART[name]; if (!k) return "";',
    '    return "<details class=\\"mh-kart\\"><summary>Detaylar</summary><dl>" +',
    '      k.bilgi.map(function (b) { return "<dt>" + esc(b[0]) + "</dt><dd>" + esc(b[1]) + "</dd>"; }).join("") +',
    '      "</dl><a class=\\"mh-kart-src\\" href=\\"" + esc(k.url) + "\\" target=\\"_blank\\" rel=\\"noopener\\">Resmi site: " + esc(k.kaynak) + " ↗</a></details>";',
    '  }',
    ''
  ].join('\n');
  js = rep(js, '  function mhSites(m) {', code + '  function mhSites(m) {', 'mhSites-fn');
  js = rep(js, '" ilanımız →</a>" : "") + "</div></div>";', '" ilanımız →</a>" : "") + "</div>" + siteKart(s[0]) + "</div>";', 'card-end');

  css += '/* Site detay kartları */\n' +
    '.mh-kart{margin-top:8px;border-top:1px solid var(--line,#e3e6ee);padding-top:8px}\n' +
    '.mh-kart summary{cursor:pointer;font-size:14px;font-weight:700;color:#003DA5}\n' +
    '.mh-kart dl{margin:8px 0 6px;font-size:13px;line-height:1.45}\n' +
    '.mh-kart dt{font-weight:700;color:#1d2939;margin-top:6px}\n' +
    '.mh-kart dd{margin:0;color:#475467}\n' +
    '.mh-kart-src{font-size:13px;font-weight:600;color:#DC1C2E;text-decoration:none}\n';

  f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { siteKart, KART };
// RE/MAX Toprak — site kartlarına "Detaylar" bölümü (yama.mjs çağırır, yama-siteler.mjs'den sonra)
// Kural: Yalnızca resmi web sitesi (sitenin kendi sitesi ya da yapımcı firmanın resmi proje sayfası) olan sitelere kart eklenir.
// Bilgiler yalnızca o resmi sayfadan alınmıştır (kontrol: 24 Kasım 2026). Haber ve ilan portalları kaynak olarak kullanılmadı.

const KART = {
  'Kameroğlu Metrohome ve Metrohome Suits': {
    url: 'https://www.kameroglumetrohome.com/', kaynak: 'kameroglumetrohome.com',
    bilgi: [
      ['Yapımcı', 'Kameroğlu İnşaat'],
      ['Konum', 'Kuzeyde E-5, güneyde Yaşam Vadisi parkı; metrobüs durağı önünde, TEM’e 3 dakika'],
      ['Daire tipleri', 'Metrohome Suites: 2+1, 3+1, 4+1 ve 3+2–7+2 dubleks · Metrohome Residence: 1+1, 2+1 ve 2+1, 3+2, 4+1 dubleks'],
      ['Sosyal alanlar', 'Açık ve kapalı yüzme havuzu, fitness, yoga ve pilates salonları, çocuk oyun ve aktivite alanları'],
      ['Diğer', '3 katlı kapalı otopark, 7/24 güvenlik; kafe, restoran ve mağazaların yer aldığı Metrohome Cadde']
    ]
  },
  'İhlas Marmara Evleri 1.Etap': {
    url: 'https://ihlas.com.tr/en/ihlas-construction-group', kaynak: 'ihlas.com.tr',
    bilgi: [
      ['Yapımcı', 'İhlas İnşaat Grubu'],
      ['Büyüklük', '2.856 konut, 100 ticari birim'],
      ['Durum', 'Tamamlanmış proje']
    ]
  },
  'İhlas Marmara Evleri 2. Etap': {
    url: 'https://ihlas.com.tr/en/ihlas-construction-group', kaynak: 'ihlas.com.tr',
    bilgi: [
      ['Yapımcı', 'İhlas İnşaat Grubu'],
      ['Büyüklük', '2.186 konut, 96 ticari birim'],
      ['Durum', 'Tamamlanmış proje']
    ]
  },
  'Kırlangıç Evleri': {
    url: 'https://kiptas.istanbul/projeler/tamamlanan-projeler/kiptas-beylikduzu-kirlangic-evler', kaynak: 'kiptas.istanbul',
    bilgi: [
      ['Yapımcı', 'KİPTAŞ (Beylikdüzü Belediyesi iş birliğiyle Gürpınar kentsel dönüşüm projesi)'],
      ['Büyüklük', '10 blok; 523 konut ve 15 ticari birim, toplam 538 bağımsız birim'],
      ['Özellikler', 'Havuz, fitness salonu, spor alanları, çocuk oyun alanları, sosyal tesis, dükkânlar, kapalı ve açık otopark, peyzaj alanları']
    ]
  },
  'Alya Trio': {
    url: 'https://boss4.com.tr/alya-trio', kaynak: 'boss4.com.tr',
    bilgi: [
      ['Yapımcı', 'BOSS4 İnşaat'],
      ['Proje tarihi', '2015'],
      ['Büyüklük', '3 blok; 26 konut, 5 ticari alan · 2.167 m²'],
      ['Sosyal alanlar', 'Kapalı yüzme havuzu, spor salonu, sauna, Türk hamamı, otopark, çocuk oyun ve yürüyüş alanları']
    ]
  },
  'Alya Dolunay Sitesi': {
    url: 'https://boss4.com.tr/alya-dolunay', kaynak: 'boss4.com.tr',
    bilgi: [
      ['Yapımcı', 'BOSS4 İnşaat'],
      ['Proje tarihi', '2021'],
      ['Büyüklük', '2 blok; 108 konut, 12 ticari alan · 5.057 m²'],
      ['Sosyal alanlar', 'Kapalı yüzme havuzu, spor salonu, sauna, Türk hamamı, otopark, çocuk oyun ve yürüyüş alanları']
    ]
  },
  'Semerkand Line': {
    url: 'https://www.semerkandyapi.com.tr/tum_projeler.html', kaynak: 'semerkandyapi.com.tr',
    bilgi: [
      ['Yapımcı', 'Semerkand Yapı'],
      ['Büyüklük', '555 daire ve 95 mağaza; 23 dönüm alanın %85’i rekreasyon alanı'],
      ['Daire tipleri', '1+1, 2+1, 3+1, 4+1 ve dubleks'],
      ['Sosyal alanlar', 'Açık ve kapalı yüzme havuzu, fitness center, çok amaçlı aktivite salonu, çocuk kulübü, satranç kulübü'],
      ['Otopark', '850 araçlık kapalı otopark']
    ]
  }
};

function siteKart(f) {
  let js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (site-kart): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };

  const code = [
    '  var MH_KART = ' + JSON.stringify(KART) + ';',
    '  function siteKart(name) {',
    '    var k = MH_KART[name]; if (!k) return "";',
    '    return "<details class=\\"mh-kart\\"><summary>Detaylar</summary><dl>" +',
    '      k.bilgi.map(function (b) { return "<dt>" + esc(b[0]) + "</dt><dd>" + esc(b[1]) + "</dd>"; }).join("") +',
    '      "</dl><a class=\\"mh-kart-src\\" href=\\"" + esc(k.url) + "\\" target=\\"_blank\\" rel=\\"noopener\\">Resmi site: " + esc(k.kaynak) + " ↗</a></details>";',
    '  }',
    ''
  ].join('\n');
  js = rep(js, '  function mhSites(m) {', code + '  function mhSites(m) {', 'mhSites-fn');
  js = rep(js, '" ilanımız →</a>" : "") + "</div></div>";', '" ilanımız →</a>" : "") + "</div>" + siteKart(s[0]) + "</div>";', 'card-end');

  css += '/* Site detay kartları */\n' +
    '.mh-kart{margin-top:8px;border-top:1px solid var(--line,#e3e6ee);padding-top:8px}\n' +
    '.mh-kart summary{cursor:pointer;font-size:14px;font-weight:700;color:#003DA5}\n' +
    '.mh-kart dl{margin:8px 0 6px;font-size:13px;line-height:1.45}\n' +
    '.mh-kart dt{font-weight:700;color:#1d2939;margin-top:6px}\n' +
    '.mh-kart dd{margin:0;color:#475467}\n' +
    '.mh-kart-src{font-size:13px;font-weight:600;color:#DC1C2E;text-decoration:none}\n';

  f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { siteKart, KART };
