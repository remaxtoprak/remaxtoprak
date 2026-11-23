// RE/MAX Toprak — üst menüde "Beylikdüzü" sekmesi ve 10 mahalle sayfası (yama.mjs çağırır)
// Mahalle sınırları, duraklar ve hatlar: OpenStreetMap (ODbL), 24 Kasım 2026. Hat adları İETT ile karşılaştırıldı.
// Resmi mahalle haritaları: Beylikdüzü Belediyesi Harita Paylaşım Platformu (PDF bağlantısı; dosya kopyalanmaz).

const PDF = 'https://www.beylikduzu.istanbul/content/media/Uploads/haritalar/Harita/';

const LINES = {
  '76': 'Beylikdüzü – Bakırköy', '76BA': 'Büyükçekmece – Avcılar Metrobüs', '76G': 'Gürpınar – Avcılar Metrobüs',
  '76GM': 'Gürpınar – Beykent Metrobüs', '76TM': 'Tepekent – Haramidere', '142B': 'Büyükçekmece – KSS Hastanesi',
  '142T': 'TÜYAP Metrobüs – KSS Hastanesi', '144': 'Boğazköy/Bahçekent – Haramidere', '144B': 'Yeşilkent/Deliklikaya – Su Ürünleri Hali',
  '144H': 'Deliklikaya – Haramidere', '145': 'İhlas Marmara Evleri – Küçükçekmece Marmaray', '145M': 'Yeşilkent/Beykent – Taksim',
  '145T': 'Beylikdüzü – Taksim', '303A': 'Silivri – Avcılar Metrobüs', '400A': 'Beykent – Haramidere',
  '401': 'Çatalca – Avcılar Metrobüs', '401T': 'Arel Üniversitesi/Tepekent – Haramidere', '418': 'Hadımköy – Haramidere',
  '429A': 'Kıraç – Avcılar Metrobüs', '448': 'Güzelce – Haramidere', 'BM4': 'Kavaklı – Haramidere Metrobüs',
  'BM5': 'Sahil Mah./Kavaklı – Haramidere', 'BM6': 'Beylikdüzü – Haramidere', 'BM7': 'Haramidere – Yakuplu – Beylikdüzü',
  'BM8': 'Gürpınar – Adnan Kahveci – Cumhuriyet Mah. Metrobüs', 'ES1': 'Esenyurt Belediyesi – Beylikdüzü Devlet Hastanesi/Beykent',
  'ES3': 'Esenyurt Devlet Hastanesi – Haramidere', 'ES4': 'Esenyurt Kiptaş 4. Etap – Haramidere', 'HT29': 'Kıraç Yolu – Avcılar Metrobüs',
  'HT48': 'Arel Üniversitesi/Tepekent – Avcılar Metrobüs', 'HVL-2': 'İstanbul Havalimanı – Avcılar'
};

const STATIONS = {
  'Beylikdüzü Sondurak (TÜYAP)': [41.0221, 28.6245], 'Beykent': [41.0192, 28.6315], 'Cumhuriyet Mahallesi': [41.0154, 28.6414],
  'Beylikdüzü Belediye': [41.0126, 28.6488], 'Beylikdüzü': [41.0099, 28.6561], 'Güzelyurt': [41.0066, 28.6651],
  'Haramidere': [41.0059, 28.6732], 'Haramidere Sanayi': [41.0047, 28.6843]
};

// [slug, ad, PDF dosyası, giriş, hakkında, metrobüs [[durak, mesafe]], metrobüs notu, hatlar, örnek duraklar, öne çıkanlar {başlık: [..]}, komşular]
const MH = [
  ['adnan-kahveci', 'Adnan Kahveci', 'Adnan%20Kahveci%20Mahallesi_62x82.pdf',
    'Beylikdüzü’nün batısında, Büyükçekmece sınırındaki büyük konut mahallesi. Yaklaşık 111 bin nüfusuyla İstanbul’un en kalabalık mahallelerinden biri.',
    ['Yüksek katlı siteler ve yeni konut projeleri mahallenin karakterini belirler; çevrede Beykent olarak bilinen bölgenin büyük kısmı bu mahallededir. Mahallenin kuzey ucu E-5 (D-100) karayoluna, güneyi Dereağzı ve Gürpınar’a uzanır.',
     'Alışveriş merkezleri, özel hastaneler, okullar ve çok sayıda park mahallede yürüme mesafesindedir. Her çarşamba kurulan Beylikdüzü Çarşamba Pazarı da Adnan Kahveci’dedir.'],
    [['Beykent', 'mahalle sınırına yaklaşık 300 m'], ['Beylikdüzü Sondurak (TÜYAP)', 'yaklaşık 600 m'], ['Cumhuriyet Mahallesi', 'yaklaşık 700 m']],
    'Mahalle büyük olduğu için güney kesimlerden metrobüse genellikle otobüsle gidilir: BM8 Cumhuriyet Mahallesi durağına, 76GM ve 400A Beykent durağına bağlanır.',
    ['76G', '76GM', '144B', '145M', '400A', 'BM6', 'BM7', 'BM8', 'ES1'],
    ['Beykent Son Durak', 'Beylikdüzü Devlet Hastanesi', 'Yeşilkent', 'Atakent', 'Mavikent', 'Osmanlı Caddesi', 'Beylikdüzü Pazarı', 'Adnan Kahveci Mahallesi'],
    { 'Alışveriş': ['Perlavista AVM', 'Paradise AVM', 'Uyum Çarşı', 'Beylikdüzü Çarşamba Pazarı'], 'Sağlık': ['Beylikdüzü Devlet Hastanesi', 'Kolan Hospital Beylikdüzü'], 'Park ve yeşil alan': ['Beylikdüzü Yaşam Vadisi (bir bölümü)', 'Atatürk Parkı', 'Kemal Sunal Parkı', 'Mevlana Parkı', 'Çamlık Parkı'] },
    ['Cumhuriyet', 'Büyükşehir', 'Barış', 'Kavaklı', 'Dereağzı', 'Gürpınar']],
  ['baris', 'Barış', 'Bar%C4%B1%C5%9F%20Mahallesi_62x62.pdf',
    'İlçenin merkezinde, E-5 kenarındaki mahalle. Beylikdüzü metrobüs durağı mahallenin içinde; RE/MAX Toprak ofisi de burada.',
    ['Barış, ilçenin ticaret ve hizmet aksı üzerindedir. E-5 boyunca iş yerleri, alışveriş merkezleri ve sağlık kuruluşları sıralanır; iç kesimlerde siteler ve koruluklar yer alır.',
     'Metrobüse yürüme mesafesi ve E-5 üzerinden geçen çok sayıda otobüs hattı, mahalleyi ilçenin ulaşımı en kolay yerlerinden biri yapar.'],
    [['Beylikdüzü', 'mahalle sınırları içinde'], ['Beylikdüzü Belediye', 'yaklaşık 200 m'], ['Güzelyurt', 'yaklaşık 500 m']],
    'E-5 üzerinden Avcılar, Büyükçekmece, Silivri ve Taksim yönüne doğrudan hatlar vardır; 145T Taksim’e, HVL-2 İstanbul Havalimanı’na gider.',
    ['76', '76BA', '76G', '76TM', '144', '144H', '145T', '303A', '400A', '401', '401T', '418', '429A', '448', 'BM5', 'BM6', 'BM7', 'ES3', 'HT48', 'HVL-2'],
    ['Beylikdüzü', 'Megakent', 'Eğitim Vadisi', 'Atatürk Bulvarı', 'Barış Mahallesi', 'Gülbahçe', 'Enver Adakan'],
    { 'Alışveriş': ['Migros AVM', 'Beylik 2 AVM', 'Kule Çarşı', 'Sürmen Center'], 'Sağlık': ['Acıbadem Hastanesi', 'Nilgün Tezsezer Aile Sağlığı Merkezi'], 'Park ve yeşil alan': ['Beylikdüzü Belediye Çamlığı', 'Turgut Özal Koruluğu', 'Vali Recep Yazıcıoğlu Koruluğu', 'Barış Parkı', 'Enver Adakan Parkı'] },
    ['Büyükşehir', 'Adnan Kahveci', 'Kavaklı', 'Yakuplu']],
  ['buyuksehir', 'Büyükşehir', 'B%C3%BCy%C3%BCk%C5%9Fehir%20Mahallesi_42x42.pdf',
    'Beylikdüzü Belediye metrobüs durağının bulunduğu, ilçenin en merkezi ve yerleşik mahallelerinden biri.',
    ['Büyükşehir, planlı toplu konut bölgeleri (A, B ve C kısımları, Emlakbank konutları) ve geniş yeşil alanlarıyla bilinir. İlçenin büyük alışveriş ve yaşam merkezleri bu mahallede ya da hemen yanındadır.',
     'Metrobüs ve E-5 hatlarına yakınlığı nedeniyle İstanbul’un merkezine her gün gidip gelenlerin sık tercih ettiği mahallelerdendir.'],
    [['Beylikdüzü Belediye', 'mahalle sınırları içinde'], ['Cumhuriyet Mahallesi', 'yaklaşık 260 m'], ['Beylikdüzü', 'yaklaşık 500 m']],
    'Metrobüs hatlarından 34BZ Zincirlikuyu’ya, 34C Cevizlibağ’a, 34G Söğütlüçeşme’ye gider.',
    ['76', '76BA', '76G', '76TM', '144', '144H', '145T', '303A', '400A', '401', '401T', '418', '429A', '448', 'BM5', 'BM6', 'BM7', 'ES3', 'HT48'],
    ['Beylikdüzü Belediye Metrobüs', 'Cumhuriyet Meydanı', 'Adakent Bulvarı', 'Emlakbank Konutları', 'A Kısmı', 'B Kısmı', 'C Kısmı', 'Çamlık'],
    { 'Alışveriş': ['Beylicium AVM', 'Park Teras AVM', 'Ekinoks Beylikdüzü', 'White Corner AVM'], 'Spor ve kültür': ['Beylikdüzü Spor Kompleksi', 'Favori Sinemaları'], 'Park ve yeşil alan': ['Mehmet Akif Ersoy Koruluğu', 'Barış Manço Parkı', 'Sezen Aksu Parkı', 'Atrium Parkı'] },
    ['Cumhuriyet', 'Barış', 'Adnan Kahveci']],
  ['cumhuriyet', 'Cumhuriyet', 'Cumhuriyet%20Mahallesi_42X47.pdf',
    'İlçenin kuzeyinde, E-5 boyunca uzanan; Cumhuriyet Mahallesi metrobüs durağının bulunduğu, yeşil alanlarıyla öne çıkan mahalle.',
    ['Bizimkent ve çevresindeki siteler mahallenin konut dokusunu oluşturur. Adnan Kahveci ile arasındaki vadide yer alan Beylikdüzü Yaşam Vadisi, Japon Bahçesi ve Kuğulu Park mahallenin en sevilen yeşil alanlarıdır.',
     'TÜYAP Fuar ve Kongre Merkezi’ne en yakın mahallelerdendir; metrobüsün son durağı Beylikdüzü Sondurak (TÜYAP) kısa mesafededir.'],
    [['Cumhuriyet Mahallesi', 'mahalle sınırları içinde'], ['Beykent', 'yaklaşık 160 m'], ['Beylikdüzü Belediye', 'yaklaşık 370 m']],
    'BM8 Gürpınar ve Adnan Kahveci’den Cumhuriyet Mahallesi metrobüs durağına gelir; 142T TÜYAP Metrobüs’ten KSS Hastanesi’ne gider.',
    ['76', '76BA', '76G', '76TM', '142B', '142T', '144', '144H', '145M', '145T', '303A', '400A', '401', '401T', '418', '429A', '448', 'BM5', 'BM6', 'BM7', 'BM8', 'ES1', 'ES3', 'HT48'],
    ['Cumhuriyet Mahallesi', 'Bizimkent', 'Cumhuriyet Caddesi', 'Atatürk Bulvarı', 'Beylikdüzü Halk Eğitim Merkezi', 'Emlakbank Konutları'],
    { 'Park ve yeşil alan': ['Beylikdüzü Yaşam Vadisi', 'Japon Bahçesi', 'Kuğulu Park', 'Fatih Sultan Mehmet Koruluğu', 'Bizimkent Atatürk Koruluğu'], 'Alışveriş': ['Bizimkent Çarşısı', 'Pazar İstanbul'], 'Kurumlar': ['Beylikdüzü Halk Eğitim Merkezi', 'Birinci Göz Hastanesi'] },
    ['Büyükşehir', 'Adnan Kahveci']],
  ['dereagzi', 'Dereağzı', 'Derea%C4%9Fz%C4%B1%20Mahallesi_82x82.pdf',
    'İlçenin güneybatısında, denize uzanan ve son yıllarda nüfusu en hızlı artan mahallelerden biri.',
    ['Dereağzı, Gürpınar ile Kavaklı arasında kalır ve kıyıya kadar iner. Yeni konut projeleri bu bölgede yoğunlaşır; müstakil evler ile yeni sitelerin bir arada olduğu bir dokusu vardır.',
     'Su Ürünleri Hali ve Gürpınar sahili mahalleye yakındır. Metrobüse uzak olduğu için ulaşımda otobüs hatları önemlidir.'],
    [['Beylikdüzü Belediye', 'yaklaşık 3,3 km'], ['Beylikdüzü', 'yaklaşık 3,4 km']],
    'Metrobüse BM6 ile Beylikdüzü’ne, 76GM ile Beykent’e, 76G ile Avcılar Metrobüs’e bağlanılır.',
    ['76G', '76GM', '144B', 'BM6'],
    ['Dereağzı Mahallesi', 'Rumeli Caddesi', 'Denizyolu Caddesi', 'Su Ürünleri Hali', 'Yedikardeşler Camii', 'Baki Gündüz İlkokulu'],
    { 'Yakındaki yerler': ['Su Ürünleri Hali', 'Gürpınar Sahili', 'Hüsnü Ayık Engelliler Merkezi'], 'Park ve yeşil alan': ['Nazım Hikmet Yıldızhan Parkı'] },
    ['Gürpınar', 'Adnan Kahveci', 'Kavaklı', 'Sahil']],
  ['gurpinar', 'Gürpınar', 'G%C3%BCrp%C4%B1nar%20Mahallesi_52x82.pdf',
    'İlçenin batı ucunda, kıyıdaki eski yerleşim. Halk plajı ve sahil parkıyla Beylikdüzü’nün deniz kenarındaki yüzü.',
    ['Gürpınar, ilçeyi oluşturan eski köy yerleşimlerinden biridir. Merkez kesimde çarşı ve müstakil evler, çevresinde yeni siteler yer alır.',
     'Beylikdüzü Gürpınar Sahili Halk Plajı ve Gürpınar Sahil (Piri Reis) Parkı yaz aylarında ilçenin en kalabalık noktalarındandır; sahil boyunca yürüyüş alanları uzanır.'],
    [['Beylikdüzü Sondurak (TÜYAP)', 'yaklaşık 3,2 km'], ['Beykent', 'yaklaşık 3,3 km']],
    'Metrobüse BM8 ile Cumhuriyet Mahallesi’ne, 76GM ile Beykent’e, 76G ile Avcılar Metrobüs’e gidilir; 142B Büyükçekmece’ye bağlanır.',
    ['76G', '76GM', '142B', '144B', 'BM8'],
    ['Merkez Mahallesi', 'Cumhuriyet Parkı', 'Gürpınar Caddesi', 'Dalyan Caddesi', 'Hz. Hamza Camii', 'Hal Yolu', 'Siteler'],
    { 'Sahil': ['Beylikdüzü Gürpınar Sahili Halk Plajı', 'Gürpınar Sahil (Piri Reis) Parkı'], 'Spor': ['Gürpınar Stadyumu'], 'Park ve yeşil alan': ['Cumhuriyet Parkı', '75. Yıl Parkı', '80. Yıl Parkı', 'Atmaca Parkı'] },
    ['Adnan Kahveci', 'Dereağzı']],
  ['kavakli', 'Kavaklı', 'Kavakl%C4%B1%20Mahallesi_82x62.pdf',
    'İlçenin ortasından sahile doğru uzanan, son on yılda nüfusu katlanarak artan genç mahalle.',
    ['Kavaklı’da yeni yapılaşma ve site seçenekleri boldur. Kavaklı Meydanı çevresi mahallenin çarşısıdır; güneyde sahil yoluna ulaşılır.',
     'Beylikdüzü Yaşam Vadisi’nin güney kolu mahallenin içinden geçer. Metrobüse otobüsle 10–15 dakikada bağlanılır.'],
    [['Güzelyurt', 'yaklaşık 1,7 km'], ['Beylikdüzü', 'yaklaşık 1,8 km'], ['Haramidere', 'yaklaşık 2 km']],
    'BM4 Haramidere Metrobüs’e, BM5 ve BM6 Haramidere’ye, BM7 Yakuplu üzerinden Beylikdüzü’ne gider; 145 Küçükçekmece Marmaray’a bağlanır.',
    ['145', 'BM4', 'BM5', 'BM6', 'BM7'],
    ['Kavaklı Meydan', 'Batı Trakya Bulvarı', 'Turgut Özal Caddesi', 'Yaşam Vadisi 4', 'Yaşam Vadisi 5', 'İhlas Marmara Evleri', 'Sahil Yolu'],
    { 'Park ve yeşil alan': ['Beylikdüzü Yaşam Vadisi (güney kolu)'], 'Alışveriş': ['İfa Çarşı', 'Kavaklı Meydanı çevresi'], 'Eğitim ve sağlık': ['Şehit Ahmet Yıldız Anadolu Lisesi', 'Özel Abat Cerrahi Tıp Merkezi'] },
    ['Barış', 'Adnan Kahveci', 'Yakuplu', 'Marmara', 'Sahil', 'Dereağzı']],
  ['marmara', 'Marmara', 'Marmara%20Mahallesi_72x62.pdf',
    'İlçenin güneydoğusunda, denize kıyısı olan; West İstanbul Marina ve sahil yaşamıyla öne çıkan mahalle.',
    ['Marmara, Eston ve Kiptaş gibi büyük konut projeleri ile villalardan oluşan sakin bir yerleşimdir. Kıyı şeridinde West İstanbul Marina bulunur.',
     'Denize yakın yaşamak isteyenlerin baktığı mahallelerdendir. Metrobüse otobüsle bağlanılır; 145 Küçükçekmece Marmaray’a gider.'],
    [['Haramidere', 'yaklaşık 2,3 km'], ['Haramidere Sanayi', 'yaklaşık 2,4 km'], ['Güzelyurt', 'yaklaşık 2,4 km']],
    'BM4 ve BM6 Haramidere metrobüsüne, 145 Küçükçekmece Marmaray’a bağlanır.',
    ['145', 'BM4', 'BM6'],
    ['Çarşı', 'Hürriyet Bulvarı', 'Eston Reşitpaşa Evleri', 'Kiptaş Yakuplu', 'Villalar', 'Mavi Akdeniz Caddesi', 'Deniz İstanbul Camii'],
    { 'Sahil': ['West İstanbul Marina'], 'Konut projeleri': ['Eston Evleri', 'Kiptaş Yakuplu Konutları', 'Orkide Sitesi'], 'Eğitim ve sağlık': ['İhlas Koleji', 'Beylikdüzü Ağız ve Diş Sağlığı Merkezi'] },
    ['Yakuplu', 'Kavaklı', 'Sahil']],
  ['sahil', 'Sahil', 'Sahil%20Mahallesi_62x52.pdf',
    'Adından da anlaşılacağı gibi kıyıda; ilçenin en az nüfuslu ve en sakin mahallesi.',
    ['Sahil, Kavaklı ile deniz arasında kalan dar bir şerittir. Az katlı siteler ve deniz manzaralı konutlar mahallenin dokusunu oluşturur.',
     'Sahil yolu boyunca yürüyüş ve spor alanları bulunur. Öğretmen Fedai Altun Kapalı Spor Tesisi mahalleye yakındır.'],
    [['Güzelyurt', 'yaklaşık 3,2 km'], ['Beylikdüzü', 'yaklaşık 3,3 km']],
    'BM4 Haramidere Metrobüs’e, BM5 ve BM6 Haramidere’ye, 145 Küçükçekmece Marmaray’a gider.',
    ['145', 'BM4', 'BM5', 'BM6'],
    ['Sahil Yolu', 'Marmara Kavaklıkent Sitesi', 'Bilal-i Habeşi Camii', 'Mavi Akdeniz Caddesi', 'Fedai Altun Spor Salonu', 'Kocatepe Caddesi'],
    { 'Spor': ['Öğretmen Fedai Altun Kapalı Spor Tesisi'], 'Yaşam': ['Sahil yolu yürüyüş alanı', 'Marmara Kavaklıkent Sitesi'] },
    ['Kavaklı', 'Marmara', 'Dereağzı']],
  ['yakuplu', 'Yakuplu', 'Yakuplu%20Mahallesi_82X92.pdf',
    'İlçenin doğusunda, Haramidere’ye kadar uzanan eski yerleşim. Güzelyurt ve Haramidere Sanayi metrobüs durakları mahallenin içinde.',
    ['Yakuplu, Beylikdüzü’nü oluşturan eski yerleşimlerden biridir ve son yıllarda hızla büyümüştür. Uygun fiyatlı konut arayanların sık baktığı mahallelerdendir.',
     'Yakuplu Kent Ormanı, Fatih Sultan Mehmet Kültür ve Sanat Merkezi ve Beylikdüzü Kaymakamlığı mahallededir. Kuzeyde sanayi siteleri ve Beylikdüzü Organize Sanayi Bölgesi yer alır.'],
    [['Güzelyurt', 'mahalle sınırları içinde'], ['Haramidere Sanayi', 'mahalle sınırları içinde'], ['Beylikdüzü', 'yaklaşık 280 m']],
    'E-5 üzerinden Avcılar, Esenyurt, Kıraç ve Taksim yönüne çok sayıda hat geçer; 145 Küçükçekmece Marmaray’a gider.',
    ['76', '76BA', '76G', '76TM', '144', '144H', '145', '145T', '303A', '400A', '401', '401T', '418', '429A', '448', 'BM4', 'BM5', 'BM6', 'BM7', 'ES3', 'ES4', 'HT29', 'HT48'],
    ['Güzelyurt', 'Haramidere Sanayi Sitesi', 'Yakuplu Kavşak', 'Kaymakamlık', 'Yakuplu Kent Ormanı', 'Hürriyet Caddesi', 'Fatih Sultan Mehmet Caddesi'],
    { 'Kültür': ['Fatih Sultan Mehmet Kültür ve Sanat Merkezi (Rasim Öztekin Sahnesi)', 'Betül ve Rafet Yılmaz Kütüphanesi'], 'Park ve yeşil alan': ['Yakuplu Kent Ormanı', 'Sultan Süleyman Parkı', 'Milli Egemenlik Parkı'], 'İş ve sanayi': ['Haramidere Sanayi Sitesi', 'Beylikdüzü Organize Sanayi Bölgesi'] },
    ['Barış', 'Kavaklı', 'Marmara']]
];
const POLY = {"Gürpınar":[[40.997,28.5972],[40.9945,28.5973],[40.9932,28.5969],[40.9924,28.5972],[40.9904,28.5964],[40.9879,28.5961],[40.9811,28.5989],[40.9795,28.5982],[40.9758,28.5956],[40.9738,28.5949],[40.9723,28.5957],[40.9717,28.5968],[40.973,28.5994],[40.9778,28.6058],[40.9808,28.6074],[40.9825,28.6091],[40.9829,28.609],[40.9833,28.6097],[40.9834,28.6109],[40.985,28.6107],[40.9873,28.611],[40.9885,28.6121],[40.9888,28.6129],[40.9902,28.6131],[40.9908,28.6137],[40.9907,28.614],[40.9914,28.614],[40.992,28.611],[40.9947,28.6074],[40.9975,28.6048],[40.9973,28.6037],[40.9964,28.6026],[40.9971,28.602],[40.9978,28.6022],[40.998,28.6017],[40.9978,28.6007],[40.9971,28.5999],[40.997,28.5972]],"Yakuplu":[[40.985,28.666],[40.9851,28.6656],[40.9873,28.6648],[40.9895,28.665],[40.9894,28.6656],[40.9908,28.6657],[40.9926,28.6649],[40.9933,28.6652],[40.9938,28.6671],[40.9962,28.6668],[40.9987,28.668],[40.9981,28.6692],[41.0018,28.6686],[41.0035,28.6673],[41.004,28.6673],[41.0038,28.6662],[41.004,28.6653],[41.0064,28.6614],[41.0079,28.6599],[41.0078,28.6595],[41.0066,28.6593],[41.0088,28.6591],[41.0065,28.6657],[41.006,28.6692],[41.0057,28.6808],[41.0049,28.6839],[41.0038,28.6859],[41.0023,28.6877],[41.0011,28.6843],[40.999,28.6844],[40.9913,28.6876],[40.9904,28.6876],[40.9887,28.6893],[40.9884,28.6898],[40.9888,28.6902],[40.9858,28.6947],[40.9836,28.6968],[40.9816,28.698],[40.9792,28.7001],[40.9785,28.6998],[40.977,28.7001],[40.9762,28.6987],[40.9742,28.6989],[40.9742,28.6995],[40.973,28.6996],[40.9735,28.6995],[40.9733,28.6968],[40.9725,28.6953],[40.9709,28.6952],[40.9723,28.695],[40.9723,28.6927],[40.972,28.6909],[40.9717,28.6902],[40.9708,28.6894],[40.9702,28.687],[40.9686,28.6867],[40.9686,28.6857],[40.9699,28.6857],[40.9709,28.6864],[40.9717,28.6864],[40.9729,28.6857],[40.973,28.6851],[40.9763,28.6839],[40.9826,28.6828],[40.9829,28.6809],[40.9838,28.6795],[40.9838,28.6758],[40.9851,28.6716],[40.985,28.666]],"Marmara":[[40.9755,28.6589],[40.9744,28.6581],[40.9736,28.652],[40.9721,28.6522],[40.9713,28.6519],[40.9702,28.6506],[40.9686,28.6502],[40.9677,28.6508],[40.9669,28.6507],[40.9667,28.6525],[40.9628,28.6519],[40.9622,28.6549],[40.9608,28.6563],[40.9606,28.6575],[40.9607,28.6578],[40.9609,28.6577],[40.9611,28.6563],[40.9633,28.6542],[40.9635,28.6544],[40.9635,28.6556],[40.9629,28.6554],[40.9636,28.6571],[40.9637,28.658],[40.9636,28.6587],[40.9632,28.6589],[40.9627,28.6649],[40.9613,28.6646],[40.9612,28.6648],[40.9613,28.6639],[40.9611,28.6636],[40.9618,28.6576],[40.9609,28.6631],[40.9609,28.6665],[40.9608,28.6668],[40.9581,28.6667],[40.9579,28.6669],[40.9572,28.6714],[40.9572,28.6722],[40.9577,28.6723],[40.9578,28.6727],[40.9596,28.6692],[40.9632,28.6691],[40.9635,28.6706],[40.962,28.6706],[40.962,28.6709],[40.9638,28.6708],[40.964,28.6724],[40.9613,28.6726],[40.9614,28.6747],[40.9646,28.6744],[40.9648,28.6759],[40.9613,28.6762],[40.9613,28.6766],[40.9659,28.6761],[40.9659,28.6778],[40.9628,28.6781],[40.9628,28.6784],[40.9677,28.6779],[40.9679,28.6786],[40.9677,28.679],[40.9666,28.6791],[40.9666,28.6795],[40.9633,28.6799],[40.9633,28.6803],[40.9665,28.68],[40.9666,28.6815],[40.9629,28.6819],[40.963,28.6823],[40.9667,28.6819],[40.9668,28.6837],[40.9623,28.6842],[40.9624,28.6846],[40.9643,28.6846],[40.9645,28.6851],[40.9688,28.6848],[40.9688,28.6857],[40.9699,28.6857],[40.9709,28.6864],[40.9717,28.6864],[40.9729,28.6857],[40.973,28.6851],[40.9763,28.6839],[40.9826,28.6828],[40.9829,28.6809],[40.9838,28.6795],[40.9838,28.6758],[40.9851,28.6716],[40.985,28.666],[40.9831,28.6649],[40.9787,28.66],[40.9755,28.6589]],"Adnan Kahveci":[[40.9917,28.6127],[40.9916,28.6138],[40.9906,28.6151],[40.9896,28.6177],[40.9896,28.6195],[40.987,28.6262],[40.9854,28.632],[40.9875,28.6324],[40.9893,28.6321],[40.9899,28.6312],[40.991,28.6323],[40.9904,28.6358],[40.9907,28.6393],[40.99,28.6436],[40.997,28.642],[40.9982,28.6405],[41.0001,28.6391],[41.0011,28.6376],[41.0025,28.6367],[41.0035,28.6365],[41.0055,28.6356],[41.0055,28.635],[41.0073,28.6341],[41.0135,28.6336],[41.0164,28.6318],[41.0167,28.6264],[41.0148,28.626],[41.0098,28.6259],[41.0041,28.6202],[40.9994,28.6177],[40.9965,28.6149],[40.9929,28.6141],[40.9917,28.6127]],"Dereağzı":[[40.9908,28.6137],[40.9907,28.614],[40.9914,28.614],[40.9906,28.6151],[40.9896,28.6177],[40.9896,28.6195],[40.987,28.6262],[40.9854,28.632],[40.9846,28.6312],[40.9842,28.6316],[40.9824,28.6304],[40.9813,28.6291],[40.9796,28.6291],[40.9798,28.6303],[40.9791,28.6292],[40.9786,28.629],[40.9785,28.6299],[40.9766,28.6295],[40.9758,28.6289],[40.9735,28.6309],[40.9716,28.6313],[40.9705,28.6322],[40.9699,28.6316],[40.9691,28.6328],[40.9685,28.6319],[40.9671,28.6334],[40.9665,28.6324],[40.9656,28.6332],[40.965,28.6321],[40.9637,28.6335],[40.9627,28.6315],[40.9617,28.6303],[40.9613,28.6303],[40.9617,28.6255],[40.9607,28.6224],[40.9607,28.6208],[40.962,28.6169],[40.9618,28.6155],[40.9634,28.6115],[40.9639,28.6091],[40.9649,28.6079],[40.9653,28.6065],[40.9651,28.6049],[40.9642,28.6036],[40.9641,28.6019],[40.9648,28.6023],[40.9655,28.6007],[40.9651,28.6004],[40.9652,28.6002],[40.9656,28.6005],[40.9659,28.5997],[40.9655,28.5994],[40.966,28.5995],[40.9663,28.5988],[40.966,28.5983],[40.9664,28.5986],[40.9666,28.5982],[40.9655,28.5972],[40.964,28.6002],[40.9654,28.5971],[40.9644,28.5964],[40.9624,28.6004],[40.9625,28.6012],[40.9631,28.6015],[40.9632,28.602],[40.9624,28.6017],[40.9621,28.6012],[40.9621,28.6003],[40.9642,28.5959],[40.9678,28.5982],[40.9688,28.5973],[40.9697,28.5974],[40.9697,28.5978],[40.9686,28.5984],[40.9696,28.5977],[40.9687,28.5976],[40.9679,28.5986],[40.9688,28.5991],[40.9692,28.5987],[40.9713,28.5977],[40.9717,28.5968],[40.9741,28.6011],[40.9776,28.6057],[40.9809,28.6075],[40.9825,28.6091],[40.9829,28.609],[40.9833,28.6097],[40.9834,28.6109],[40.985,28.6107],[40.9873,28.611],[40.9885,28.6121],[40.9888,28.6129],[40.9902,28.6131],[40.9908,28.6137]],"Büyükşehir":[[40.9962,28.6421],[40.9975,28.643],[41.0027,28.6486],[41.0055,28.6501],[41.0078,28.6493],[41.009,28.6495],[41.0118,28.6511],[41.0144,28.6442],[41.0127,28.643],[41.0123,28.6444],[41.0091,28.6434],[41.0042,28.6436],[41.0011,28.642],[41.0025,28.6393],[41.004,28.6374],[41.0033,28.6364],[41.0014,28.6373],[41.0001,28.6391],[40.9982,28.6405],[40.997,28.642],[40.9962,28.6421]],"Cumhuriyet":[[41.0183,28.6339],[41.0144,28.6442],[41.0127,28.643],[41.0123,28.6444],[41.0091,28.6434],[41.0042,28.6436],[41.0011,28.642],[41.0025,28.6393],[41.004,28.6374],[41.0035,28.6365],[41.0055,28.6356],[41.0055,28.635],[41.0073,28.6341],[41.0135,28.6336],[41.0164,28.6318],[41.0186,28.6332],[41.0183,28.6339]],"Barış":[[40.9962,28.6421],[40.9975,28.643],[41.0027,28.6486],[41.0055,28.6501],[41.0074,28.6493],[41.009,28.6495],[41.0118,28.6511],[41.0088,28.6591],[41.0066,28.6594],[41.003,28.6593],[41.0013,28.6589],[40.9985,28.6568],[40.9965,28.6558],[40.995,28.6543],[40.9938,28.6538],[40.9937,28.6541],[40.9865,28.6498],[40.9852,28.6489],[40.9846,28.6477],[40.986,28.6472],[40.9875,28.6452],[40.99,28.6436],[40.9962,28.6421]],"Sahil":[[40.9671,28.6334],[40.9674,28.6336],[40.9667,28.6339],[40.9659,28.6349],[40.9657,28.6362],[40.9673,28.6389],[40.9674,28.6423],[40.9694,28.6442],[40.9719,28.6486],[40.9722,28.6483],[40.9739,28.6486],[40.9758,28.6472],[40.9802,28.648],[40.9801,28.6502],[40.9787,28.651],[40.9767,28.6532],[40.9755,28.6589],[40.9744,28.6581],[40.9736,28.652],[40.9721,28.6522],[40.9713,28.6519],[40.9702,28.6506],[40.9686,28.6502],[40.9677,28.6508],[40.9669,28.6507],[40.9667,28.6525],[40.9628,28.6519],[40.9628,28.6468],[40.9623,28.6428],[40.9624,28.6386],[40.9613,28.6303],[40.9617,28.6303],[40.9627,28.6315],[40.9637,28.6335],[40.965,28.6321],[40.9656,28.6332],[40.9665,28.6324],[40.9671,28.6334]],"Kavaklı":[[40.9854,28.632],[40.9846,28.6312],[40.9842,28.6316],[40.9824,28.6304],[40.9813,28.6291],[40.9796,28.6291],[40.9798,28.6303],[40.9791,28.6292],[40.9786,28.629],[40.9785,28.6299],[40.9766,28.6295],[40.9758,28.6289],[40.9735,28.6309],[40.9716,28.6313],[40.9705,28.6322],[40.9699,28.6316],[40.9691,28.6328],[40.9685,28.6319],[40.9671,28.6334],[40.9674,28.6336],[40.9667,28.6339],[40.9659,28.6349],[40.9657,28.6362],[40.9673,28.6389],[40.9674,28.6424],[40.9694,28.6443],[40.9719,28.6486],[40.9722,28.6483],[40.9739,28.6486],[40.9747,28.6482],[40.9758,28.6472],[40.9802,28.648],[40.9801,28.6502],[40.9787,28.651],[40.9767,28.6532],[40.9755,28.6589],[40.9787,28.66],[40.9831,28.6649],[40.985,28.666],[40.9851,28.6656],[40.9873,28.6648],[40.9895,28.665],[40.99,28.6563],[40.9907,28.656],[40.991,28.6551],[40.9928,28.6551],[40.9935,28.6554],[40.9937,28.6541],[40.9865,28.6498],[40.9852,28.6489],[40.9846,28.6477],[40.986,28.6472],[40.9875,28.6452],[40.99,28.6436],[40.9907,28.6393],[40.9904,28.6358],[40.9911,28.6324],[40.9899,28.6312],[40.9893,28.6321],[40.9875,28.6324],[40.9854,28.632]]};
function mahalleler(f) {
  let h = f['index.html'], js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (mahalle): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };
  const list = MH.map(m => [m[0], m[1]]);

  // 1) Menü: masaüstü açılır liste + mobil akordeon
  const drop = '<div class="nav-drop"><a href="#beylikduzu" class="nav-drop-btn" aria-haspopup="true">Beylikdüzü<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a>' +
    '<div class="nav-drop-menu" role="menu"><a href="#beylikduzu" role="menuitem" style="--i:0" class="nd-all">Tüm mahalleler</a>' +
    list.map((m, i) => '<a href="#mahalle-' + m[0] + '" role="menuitem" style="--i:' + (i + 1) + '">' + m[1] + '</a>').join('') + '</div></div>\n      ';
  h = rep(h, '<nav class="nav" aria-label="Ana menü">\n      ', '<nav class="nav" aria-label="Ana menü">\n      ' + drop, 'nav');
  const mdrop = '<button type="button" class="mnav-toggle" aria-expanded="false">Beylikdüzü mahalleleri<span aria-hidden="true">▾</span></button>' +
    '<div class="mnav-sub" hidden><a href="#beylikduzu">Tüm mahalleler</a>' + list.map(m => '<a href="#mahalle-' + m[0] + '">' + m[1] + '</a>').join('') + '</div>\n    ';
  h = rep(h, '<nav class="mobile-nav" id="mobileNav" aria-label="Mobil menü">\n    ', '<nav class="mobile-nav" id="mobileNav" aria-label="Mobil menü">\n    ' + mdrop, 'mobile-nav');

  // 2) Mahalle görünümü
  const view = '<!-- ======================= BEYLİKDÜZÜ MAHALLELERİ ======================= -->\n' +
    '<div class="view" id="view-mahalle">\n  <section class="page-hero">\n    <div class="wrap">\n      <div class="crumbs" id="mhCrumbs"></div>\n      <h2 id="mhTitle">Beylikdüzü mahalleleri</h2>\n      <p id="mhLead"></p>\n    </div>\n  </section>\n' +
    '  <section class="section" style="padding-top:40px">\n    <div class="wrap" id="mhBody"></div>\n  </section>\n</div>\n\n';
  h = rep(h, '<!-- ======================= REHBER', view + '<!-- ======================= REHBER', 'rehber-yorum');

  // 3) Ana sayfa mahalle kartları ilgili mahalle sayfasına gitsin
  js = rep(js, "return '<a class=\"hood\" href=\"#ilanlar\" data-town=\"Beylikdüzü\" data-q=\"' + esc(h + ' mah') + '\">",
    "return '<a class=\"hood\" href=\"#mahalle-' + MH_SLUG[h] + '\">", 'hood-link');

  // 4) app.js: veri, çizim ve yönlendirme
  const data = 'var MH = ' + JSON.stringify(MH) + ';\n  var MH_LINES = ' + JSON.stringify(LINES) + ';\n  var MH_ST = ' + JSON.stringify(STATIONS) + ';\n  var MH_POLY = ' + JSON.stringify(POLY) + ';\n  var MH_PDF = ' + JSON.stringify(PDF) + ';\n';
  const code = [
    '  var MH_BY = {}, MH_SLUG = {};',
    '  MH.forEach(function (m) { MH_BY[m[0]] = m; MH_SLUG[m[1]] = m[0]; });',
    '  function mhCount(name) {',
    '    var key = name.toLocaleLowerCase("tr-TR");',
    '    return (typeof L !== "undefined" && L.filter) ? L.filter(function (l) { return l.loc2 && l.loc2.town === "Beylikdüzü" && String(l.loc2.label).toLocaleLowerCase("tr-TR").indexOf(key) >= 0; }).length : 0;',
    '  }',
    '  var LEAF = null, MH_MAP = null;',
    '  function leaflet(cb) {',
    '    if (window.L && window.L.map) return cb();',
    '    if (LEAF) { LEAF.push(cb); return; }',
    '    LEAF = [cb];',
    '    var c = document.createElement("link"); c.rel = "stylesheet"; c.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(c);',
    '    var s = document.createElement("script"); s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";',
    '    s.onload = function () { var q = LEAF; LEAF = []; q.forEach(function (f) { f(); }); };',
    '    s.onerror = function () { var el = document.getElementById("mhMap"); if (el) el.innerHTML = "<div class=\\"mh-mapfail\\">Harita şu anda yüklenemedi.</div>"; };',
    '    document.head.appendChild(s);',
    '  }',
    '  function drawMap(sel) {',
    '    var el = document.getElementById("mhMap"); if (!el) return;',
    '    leaflet(function () {',
    '      if (!document.getElementById("mhMap")) return;',
    '      if (MH_MAP) { MH_MAP.remove(); MH_MAP = null; }',
    '      var map = MH_MAP = window.L.map("mhMap", { scrollWheelZoom: false });',
    '      window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap katkıda bulunanlar" }).addTo(map);',
    '      var focus = null;',
    '      MH.forEach(function (m) {',
    '        var on = sel && m[0] === sel;',
    '        var p = window.L.polygon(MH_POLY[m[1]], { color: on ? "#DC1C2E" : "#1A3668", weight: on ? 3 : 1.5, fillColor: on ? "#DC1C2E" : "#1A3668", fillOpacity: on ? 0.18 : (sel ? 0.04 : 0.12) }).addTo(map);',
    '        p.bindTooltip(m[1], { sticky: true });',
    '        p.on("click", function () { location.hash = "mahalle-" + m[0]; });',
    '        if (on) focus = p;',
    '      });',
    '      Object.keys(MH_ST).forEach(function (n) {',
    '        window.L.circleMarker(MH_ST[n], { radius: 7, color: "#fff", weight: 2, fillColor: "#DC1C2E", fillOpacity: 1 }).addTo(map).bindTooltip("Metrobüs: " + n);',
    '      });',
    '      if (focus) map.fitBounds(focus.getBounds(), { padding: [20, 20] });',
    '      else map.fitBounds([[40.957, 28.594], [41.023, 28.701]]);',
    '    });',
    '  }',
    '  function renderMahalle(slug) {',
    '    var m = slug ? MH_BY[slug] : null;',
    '    var crumbs = "<a href=\\"#anasayfa\\">Ana sayfa</a> / " + (m ? "<a href=\\"#beylikduzu\\">Beylikdüzü</a> / " + m[1] + " Mahallesi" : "Beylikdüzü mahalleleri");',
    '    $("mhCrumbs").innerHTML = crumbs;',
    '    var body = "";',
    '    if (!m) {',
    '      $("mhTitle").textContent = "Beylikdüzü mahalleleri";',
    '      $("mhLead").textContent = "Beylikdüzü’nün 10 mahallesi: konum, metrobüs ve otobüs bağlantıları, öne çıkan yerler ve güncel ilanlarımız.";',
    '      body = "<div class=\\"mh-map\\" id=\\"mhMap\\"></div><p class=\\"mh-note\\">Haritada bir mahalleye tıklayarak sayfasını açabilirsiniz. Kırmızı noktalar metrobüs duraklarıdır.</p><div class=\\"mh-cards\\">" + MH.map(function (x) {',
    '        var n = mhCount(x[1]);',
    '        return "<a class=\\"mh-card\\" href=\\"#mahalle-" + x[0] + "\\"><b>" + x[1] + "</b><span>" + esc(x[3]) + "</span><i>" + (n ? n + " ilan · " : "") + "Mahalleyi incele →</i></a>";',
    '      }).join("") + "</div>";',
    '      $("mhBody").innerHTML = body;',
    '      setMeta("Beylikdüzü Mahalleleri: Ulaşım, Metrobüs ve Mahalle Rehberi | RE/MAX Toprak", "Beylikdüzü’nün 10 mahallesi için metrobüs durakları, otobüs hatları, öne çıkan yerler, resmi mahalle haritaları ve satılık/kiralık ilanlar.");',
    '      drawMap(null); return;',
    '    }',
    '    $("mhTitle").textContent = m[1] + " Mahallesi";',
    '    $("mhLead").textContent = m[3];',
    '    var n = mhCount(m[1]);',
    '    var metro = "<ul class=\\"mh-metro\\">" + m[5].map(function (s) { return "<li><b>" + s[0] + "</b><span>" + s[1] + "</span></li>"; }).join("") + "</ul><p>" + m[6] + "</p>";',
    '    var lines = "<div class=\\"mh-lines\\">" + m[7].map(function (r) { return "<div class=\\"mh-line\\"><b>" + r + "</b><span>" + (MH_LINES[r] || "") + "</span></div>"; }).join("") + "</div>";',
    '    var stops = "<div class=\\"mh-chips\\">" + m[8].map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div>";',
    '    var hi = Object.keys(m[9]).map(function (k) { return "<div class=\\"mh-hi\\"><h4>" + k + "</h4><ul>" + m[9][k].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>"; }).join("");',
    '    var nb = "<div class=\\"mh-chips mh-nb\\">" + m[10].map(function (x) { return "<a href=\\"#mahalle-" + MH_SLUG[x] + "\\">" + x + "</a>"; }).join("") + "</div>";',
    '    body = "<div class=\\"mh-grid\\"><div><div class=\\"mh-map\\" id=\\"mhMap\\"></div>" +',
    '      "<div class=\\"mh-actions\\"><a class=\\"btn btn-red\\" href=\\"#ilanlar\\" data-town=\\"Beylikdüzü\\" data-q=\\"" + m[1] + " mah\\">" + (n ? "Bu mahalledeki " + n + " ilanı gör" : "Bu mahalledeki ilanlar") + "</a>" +',
    '      "<a class=\\"btn btn-outline\\" href=\\"" + MH_PDF + m[2] + "\\" target=\\"_blank\\" rel=\\"noopener\\">Belediyenin resmi mahalle haritası (PDF) ↗</a></div>" +',
    '      "<p class=\\"mh-note\\">Resmi harita Beylikdüzü Belediyesi’nin Harita Paylaşım Platformu’nda açılır. Etkileşimli haritada mahalle sınırı kırmızı, metrobüs durakları kırmızı noktayla gösterilir.</p></div>" +',
    '      "<div><div class=\\"mh-box\\"><h3>Mahalle hakkında</h3>" + m[4].map(function (p) { return "<p>" + p + "</p>"; }).join("") + "<h4>Komşu mahalleler</h4>" + nb + "</div></div></div>" +',
    '      "<div class=\\"mh-row\\"><div class=\\"mh-box\\"><h3>Metrobüs</h3>" + metro + "</div><div class=\\"mh-box\\"><h3>Öne çıkan yerler</h3><div class=\\"mh-his\\">" + hi + "</div></div></div>" +',
    '      "<div class=\\"mh-box\\"><h3>Mahalleden geçen otobüs hatları</h3>" + lines + "<h4>Mahalledeki bazı duraklar</h4>" + stops +',
    '      "<p class=\\"mh-note\\">Hat ve durak bilgileri OpenStreetMap verilerinden derlenmiş, hat adları İETT ile karşılaştırılmıştır (Kasım 2026). Sefer saatleri ve güzergah değişiklikleri için <a href=\\"https://iett.istanbul\\" target=\\"_blank\\" rel=\\"noopener\\">İETT</a> veya Mobiett uygulamasını kontrol edin.</p></div>" +',
    '      "<div class=\\"mh-box mh-others\\"><h3>Diğer Beylikdüzü mahalleleri</h3><div class=\\"mh-chips mh-nb\\">" + MH.filter(function (x) { return x[0] !== m[0]; }).map(function (x) { return "<a href=\\"#mahalle-" + x[0] + "\\">" + x[1] + "</a>"; }).join("") + "</div></div>";',
    '    $("mhBody").innerHTML = body;',
    '    setMeta(m[1] + " Mahallesi, Beylikdüzü: Ulaşım, Metrobüs, Otobüs Hatları ve İlanlar | RE/MAX Toprak", m[3]);',
    '    drawMap(m[0]);',
    '  }',
    '  document.addEventListener("click", function (e) {',
    '    var b = e.target.closest && e.target.closest(".mnav-toggle"); if (!b) return;',
    '    e.preventDefault(); e.stopPropagation();',
    '    var open = b.getAttribute("aria-expanded") !== "true";',
    '    b.setAttribute("aria-expanded", open ? "true" : "false");',
    '    b.nextElementSibling.hidden = !open;',
    '  }, true);',
    ''
  ].join('\n');
  js = rep(js, "  function route() {", '  ' + data + code + '\n  function route() {', 'route-fn');
  js = rep(js, "    else if (h === 'degerleme') view = 'degerleme';",
    "    else if (h === 'degerleme') view = 'degerleme';\n    else if (h === 'beylikduzu') view = 'mahalle';\n    else if (h.indexOf('mahalle-') === 0 && MH_BY[h.slice(8)]) { view = 'mahalle'; slug = h.slice(8); }", 'route-views');
  js = rep(js, "'rehber', 'doc', 'degerleme'].forEach", "'rehber', 'doc', 'degerleme', 'mahalle'].forEach", 'route-list');
  js = rep(js, "    showCalc(view === 'hesaplama' ? slug : null);", "    showCalc(view === 'hesaplama' ? slug : null);\n    if (view === 'mahalle') renderMahalle(slug);", 'route-mh');

  css += '/* Beylikdüzü menüsü ve mahalle sayfaları */\n' +
    '.nav-drop{position:relative}\n' +
    '.nav .nav-drop-btn{display:inline-flex;align-items:center;gap:6px}\n' +
    '.nav-drop-btn svg{transition:transform .25s}.nav-drop:hover .nav-drop-btn svg,.nav-drop:focus-within .nav-drop-btn svg{transform:rotate(180deg)}\n' +
    '.nav-drop-menu{position:absolute;top:100%;left:0;margin-top:6px;min-width:240px;background:#fff;border:1px solid var(--line,#e3e6ee);border-radius:16px;box-shadow:0 22px 48px rgba(10,20,50,.16);padding:8px;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .22s ease,transform .22s ease,visibility .22s;z-index:80}\n' +
    '.nav-drop:after{content:"";position:absolute;left:0;right:0;top:100%;height:12px}\n' +
    '.nav-drop:hover .nav-drop-menu,.nav-drop:focus-within .nav-drop-menu{opacity:1;visibility:visible;transform:none}\n' +
    '.nav .nav-drop-menu a{display:block;padding:9px 14px;border-radius:10px;font-weight:600;font-size:15px;white-space:nowrap;opacity:0;transform:translateX(-10px);transition:opacity .28s ease,transform .28s ease,background .2s,color .2s;transition-delay:0s}\n' +
    '.nav-drop:hover .nav-drop-menu a,.nav-drop:focus-within .nav-drop-menu a{opacity:1;transform:none;transition-delay:calc(var(--i) * 45ms)}\n' +
    '.nav .nav-drop-menu a:hover{background:var(--cream,#f6f1ea);color:#DC1C2E}\n' +
    '.nav .nav-drop-menu a.nd-all{font-weight:800;border-bottom:1px solid var(--line,#e3e6ee);border-radius:10px 10px 0 0;margin-bottom:4px}\n' +
    '.mnav-toggle{display:none}\n' +
    '@media (max-width:1100px){.mobile-nav .mnav-toggle{display:flex;width:100%;justify-content:space-between;align-items:center;padding:16px 24px;font:inherit;font-weight:700;background:none;border:0;border-bottom:1px solid var(--line,#e3e6ee);color:var(--black,#000);cursor:pointer;text-align:left}' +
    '.mnav-toggle span{transition:transform .2s}.mnav-toggle[aria-expanded=true] span{transform:rotate(180deg)}' +
    '.mobile-nav .mnav-sub a{padding:12px 24px 12px 40px;font-weight:600;background:var(--cream,#f6f1ea)}}\n' +
    '.mh-map{height:440px;border-radius:18px;border:1px solid var(--line,#e3e6ee);overflow:hidden;background:#eef1f6;position:relative;z-index:0}\n' +
    '.mh-mapfail{display:flex;height:100%;align-items:center;justify-content:center;color:#667085}\n' +
    '.mh-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:28px;align-items:start;margin-bottom:22px}\n' +
    '.mh-row{display:grid;grid-template-columns:1fr 1fr;gap:22px}\n' +
    '.mh-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}\n' +
    '.mh-note{font-size:13px;color:#667085;margin-top:10px}\n' +
    '.mh-box{background:#fff;border:1px solid var(--line,#e3e6ee);border-radius:18px;padding:22px 24px;margin-bottom:22px}\n' +
    '.mh-box h3{font-size:21px;margin:0 0 12px}.mh-box h4{font-size:15px;margin:18px 0 8px;text-transform:uppercase;letter-spacing:.04em;color:#667085}\n' +
    '.mh-box p{margin:0 0 10px;line-height:1.65}\n' +
    '.mh-metro{list-style:none;padding:0;margin:0 0 12px}.mh-metro li{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--line,#e3e6ee)}.mh-metro li span{color:#667085;font-size:14px;text-align:right}\n' +
    '.mh-lines{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:8px}\n' +
    '.mh-line{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:10px;background:var(--cream,#f6f1ea);font-size:14px}\n' +
    '.mh-line b{flex:0 0 auto;min-width:52px;text-align:center;background:#1A3668;color:#fff;border-radius:8px;padding:4px 6px;font-size:13px}\n' +
    '.mh-chips span,.mh-chips a{display:inline-block;padding:6px 12px;border-radius:999px;background:var(--cream,#f6f1ea);margin:0 6px 6px 0;font-size:14px;text-decoration:none;color:inherit}\n' +
    '.mh-nb a{border:1px solid var(--line,#e3e6ee);background:#fff;font-weight:600}.mh-nb a:hover{border-color:#DC1C2E;color:#DC1C2E}\n' +
    '.mh-his{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px}.mh-hi h4{margin-top:4px}.mh-hi ul{margin:0;padding-left:18px}.mh-hi li{margin:3px 0}\n' +
    '.mh-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px;margin-top:22px}\n' +
    '.mh-card{display:flex;flex-direction:column;gap:8px;padding:18px 20px;border:1px solid var(--line,#e3e6ee);border-radius:16px;background:#fff;text-decoration:none;color:inherit;transition:border-color .2s,transform .2s}\n' +
    '.mh-card:hover{border-color:#DC1C2E;transform:translateY(-2px)}.mh-card b{font-size:19px}.mh-card span{font-size:14px;color:#475467;line-height:1.5}.mh-card i{font-style:normal;font-weight:700;font-size:14px;color:#DC1C2E;margin-top:auto}\n' +
    '@media (max-width:900px){.mh-grid,.mh-row,.mh-his{grid-template-columns:1fr}.mh-map{height:320px}}\n' +
    '@media (min-width:1101px) and (max-width:1300px){.nav a{padding:10px 8px;font-size:13.5px}}\n';

  f['index.html'] = h; f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { mahalleler };
