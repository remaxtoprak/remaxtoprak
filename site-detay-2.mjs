// Parti 2 — 25 Kasım 2026
const KK = (s, n) => Array.from({ length: n }, (_, i) => 'https://konutkentgayrimenkul.com/wp-content/uploads/projeler/' + s + '/' + s.replace('deniz-istanbul', 'deniz-i-stanbul') + '-' + (i + 1) + '.jpg');
const KKU = s => 'https://konutkentgayrimenkul.com/projeler/istanbul/beylikduzu/' + s + '/';

export const D2 = {
  'Marmara Kavaklıkent Sitesi': {
    tur: 'yonetim', kaynaklar: [['marmarakavaklikent.com (site yönetimi)', 'https://marmarakavaklikent.com/biz-kimiz.html']],
    bilgi: [['Yapı şekli', 'Kooperatifler üst birliği tarafından projelendirilip kooperatiflerce inşa edildi'], ['Adres (yönetim)', 'Sahil Mah. Mustafa Kemal Cad. Hasdenk Apt. 72/4'], ['Alan', '45.000 m²'], ['Büyüklük', '22 blok, 902 daire'], ['Kat mülkiyeti', 'Yönetim planı 10.07.2010’daki ilk genel kurulda tapuya işlendi'], ['Güvenlik', '7/24 güvenlik, apartmanlarda kamera sistemi, fiber altyapı'], ['Sosyal alanlar', 'Çok amaçlı sosyal tesis'], ['Site yönetimi', '0212 876 04 37-38 · info@marmarakavaklikent.com']],
    yazi: ['Marmara Kavaklıkent, Beylikdüzü sahiline bakan 45 bin metrekarelik alan üzerine kurulmuş, 22 blok ve 902 daireden oluşan büyük bir toplu yapı. Kooperatiflerin bir araya gelerek oluşturduğu üst birlik tarafından projelendirildi; altyapısı ortak yapıldı, binaları kooperatifler tamamladı.',
      'Site yönetimi 2010’da kurulan toplu yapı yönetimi tarafından yürütülüyor. Yönetimin açıklamalarına göre zemin etütleri ve beton numune raporları arşivde saklanıyor, binalarda ısı yalıtımı ve drenaj çalışmaları tamamlandı. Sitede 7/24 güvenlik, kamera sistemi ve çok amaçlı bir sosyal tesis bulunuyor.'],
    foto: ['https://marmarakavaklikent.com/assets/img/gallery/marmara-dergi-foto.jpg', 'https://marmarakavaklikent.com/assets/img/gallery/marmara-g2-kumyali-1080x675.jpg', 'https://marmarakavaklikent.com/assets/img/gallery/marmara-e1-hasdenk-900x675.jpg', 'https://marmarakavaklikent.com/assets/img/gallery/marmara-d2-karmen-1080x675.jpg', 'https://marmarakavaklikent.com/assets/img/gallery/marmara-f6-ugur-1080x675.jpg', 'https://marmarakavaklikent.com/assets/img/gallery/marmara-f4-sur-1080x675.jpg']
  },
  'Bizimkent': {
    tur: 'yonetim', kaynaklar: [['bizimkent187ada.com (site yönetimi)', 'https://www.bizimkent187ada.com/']],
    bilgi: [['Adres', 'Cumhuriyet Mah. Derviş Eroğlu Cad. No:26'], ['Alan', '30.806 m²'], ['Büyüklük', '8 blok, 28 blok kapısı, 626 daire (187 Ada)'], ['Güvenlik', '3 güvenlik noktası'], ['Site yönetimi', '0212 873 22 86 · 0534 204 73 66 · 187ada1@gmail.com (hafta içi 08:30–18:00)']],
    yazi: ['Bizimkent, Cumhuriyet Mahallesi’nde Derviş Eroğlu Caddesi üzerinde yer alan köklü sitelerden biri. Kaynakta bilgi verilen 187 Ada bölümü, yaklaşık 31 bin metrekarelik alanda 8 blok ve 28 blok kapısında toplam 626 daireden oluşuyor.',
      'Sitenin yönetimi kendi internet sitesi üzerinden sakinlerle iletişim kuruyor; girişlerde üç ayrı güvenlik noktası bulunuyor. Cumhuriyet Mahallesi’nin merkezi konumu sayesinde metrobüse, okullara ve çarşıya yakın.'],
    foto: ['https://static.wixstatic.com/media/362722_56fd88229ef54013aa366c5dfb4ed908~mv2.jpeg', 'https://static.wixstatic.com/media/362722_3bdefe7a94de4771a7f9c81e62fbdc6c~mv2.jpeg']
  },
  'Beyaz Vadi': {
    tur: 'yapimci', kaynaklar: [['beyazinsaat-tr.com (yapımcı)', 'https://www.beyazinsaat-tr.com/proje/kasri-beyaz-vadi']],
    bilgi: [['Yapımcı', 'Beyaz İnşaat (proje adı: Kasr-ı Beyaz Vadi)'], ['Konum', 'Beylikdüzü Yaşam Vadisi 2. etap çevresi'], ['Tamamlanma', '2019'], ['Büyüklük', '4 katlı 2 blok; 49 daire ve 11 ticari birim'], ['Sosyal alanlar', 'Açık yüzme havuzu, fitness, sauna, basketbol sahası, çocuk oyun parkı, kapalı otopark'], ['Not', 'Bilgiler yapımcının “Kasr-ı Beyaz Vadi” proje sayfasından alınmıştır.']],
    yazi: ['Beyaz Vadi, Beyaz İnşaat’ın Yaşam Vadisi’nin 2. etabı çevresinde 2019’da tamamladığı “Kasr-ı Beyaz Vadi” projesi. Firma projeyi 4 katlı butik bir site olarak tanımlıyor: iki blokta 49 daire ve 11 ticari birim bulunuyor.',
      'Küçük ölçeğine rağmen açık havuz, fitness, sauna, basketbol sahası ve kapalı otopark gibi donatılara sahip. Yaşam Vadisi parkına komşu olması, yürüyüş ve spor için büyük bir yeşil alanı kapının önüne getiriyor.'],
    foto: Array.from({ length: 8 }, (_, i) => 'https://beyazinsaat-tr.com/assets/projects/kasri-beyaz-vadi-galeri-0' + (i + 1) + '.jpg.webp')
  },
  'Sultan Fatih Sitesi': {
    tur: 'portal', kaynaklar: [['emlakplatform.com.tr', 'https://www.emlakplatform.com.tr/tr/projects/sultan-fatih-konaklari']],
    bilgi: [['Proje adı', 'Sultan Fatih Konakları'], ['Yapımcı', 'Çınar Mimar'], ['Konum', 'Gürpınar'], ['Arsa alanı', '3.750 m²'], ['Büyüklük', '5 katlı 4 blok, 72 daire'], ['Daire tipleri', '2+1 (95–117 m²), 3+1 (145 m²), 4+2 dubleks (220 m²), 5+2 dubleks (300 m²)'], ['Sosyal alanlar', 'Spor salonu ve fitness, sauna, Türk hamamı, bahçeler ve oyun alanları, otopark, 7/24 güvenlik ve kamera sistemi']],
    yazi: ['Sultan Fatih Konakları, Çınar Mimar’ın Gürpınar’da 3.750 metrekarelik arsa üzerinde yaptığı, 5 katlı 4 bloktan oluşan 72 daireli bir site.',
      '95 metrekarelik 2+1’lerden 300 metrekarelik dublekslere uzanan daire seçenekleri bulunuyor. Fitness salonu, sauna, Türk hamamı ve bahçeler site içinde; 7/24 güvenlik ve kamera sistemiyle korunuyor.'],
    foto: ['ff240340bef551e36339568fc91242ac', 'a7ac4e1770665424478fac2e2189dbd4', 'f490a5dcb00738cd798c34cb40645104', 'b6fba00818622ef0b47bd8d12cb00d0d', 'a20d9ba032b4c2d81cd14caa25e3f38d', '9567349fecff9f8eadd86289bb48ac6e', '6314d0c595f99048a6807c24d96f008a', 'fcf38e9f6eb6103fc28f433d91a2ea6c'].map(h => 'https://www.emlakplatform.com.tr/proj_imgs/52_' + h + '_23.webp')
  },
  'Deniztepe Evleri': {
    tur: 'portal', kaynaklar: [['yeniprojeler.com', 'https://www.yeniprojeler.com/istanbul-avrupa-yakasi/beylikduzu/yeni-konut-projeleri/deniztepe-evleri']],
    bilgi: [['Yapımcı', 'Dekar Yapı'], ['Adres', 'Dereağzı Mah. Ziya Gökalp Cad.'], ['Konut sayısı', '120 konut'], ['Daire tipleri', '3+1, 3+3 ve 4+2'], ['Durum', 'Tamamlandı']],
    yazi: ['Deniztepe Evleri, Dekar Yapı’nın Dereağzı Mahallesi’nde Ziya Gökalp Caddesi üzerinde yaptığı 120 konutluk bir site. Adını, denize doğru eğimli arazideki konumundan alıyor.',
      'Projede küçük daire tipi bulunmuyor; 3+1 ve daha büyük aile daireleriyle geniş metrekare arayanlara hitap ediyor. Gürpınar sahiline ve Beylikdüzü’nün batı kesimindeki okullara yakın.'],
    foto: ['130953407690699119-1760929771-1145', '130953407794479489-1760929772-2950', '130953407892139997-1760929772-5636', '130953407991389301-1760929772-9877', '130953408091749122-1760929773-3390'].map(s => 'https://www.yeniprojeler.com/storage/project-images/' + s + '.jpg')
  },
  'Erguvan Konutları': {
    tur: 'portal', kaynaklar: [['gayrimenkulhaber.com', 'https://www.gayrimenkulhaber.com/konut-projeleri/erguvan-konutlari/']],
    bilgi: [['Adres', 'Marmara Mah. Aydın Menderes Cad. ile 234. Sok. kesişimi'], ['Konut sayısı', '240 konut'], ['Daire tipleri', '1+1, 2+1, 3+1 ve 4+1 (87–184 m²)'], ['Olanaklar', 'Açık ve kapalı otopark, çocuk oyun parkı, site güvenliği, jeneratör, yangın alarm sistemi, çift asansör, doğalgaz kombi'], ['Ulaşım', 'E-5, metrobüs ve alışveriş merkezlerine yaklaşık 2,7 km']],
    yazi: ['Erguvan Konutları, Marmara Mahallesi’nde Aydın Menderes Caddesi üzerinde yer alan 240 konutluk bir site. 1+1’den 4+1’e kadar, 87 ile 184 metrekare arasında değişen dört farklı daire tipi bulunuyor.',
      'Açık ve kapalı otopark, çocuk oyun parkı, jeneratör ve site güvenliği ortak olanaklar arasında. E-5 ve metrobüs hattına yaklaşık 3 kilometre mesafede, sahile ise daha yakın.'],
    foto: ['https://www.gayrimenkulhaber.com/wp-content/uploads/2016/06/erguvan-konutları-beylikdüzü.jpg']
  },
  'Beycity Residence': {
    tur: 'portal', kaynaklar: [['propertyistanbul.com', 'https://www.propertyistanbul.com/properties/bey-city-residence/']],
    bilgi: [['Yapımcı', 'Beyaz İnşaat'], ['Arsa alanı', '10.127 m²'], ['Büyüklük', '2 blok, 126 daire ve ticari alanlar (yaklaşık 4.310 m² market alanı)'], ['Daire tipleri', '1+1 (60–90 m²), 2+1 (120 m²), 3+1 (140 m²)'], ['Sosyal alanlar', 'Açık yüzme havuzu, park ve bahçe, resepsiyon, açık otopark ve kapalı garaj, 24 saat güvenlik ve kamera'], ['Ulaşım', 'Otobüs ve minibüs durakları 2 dk yürüme; metrobüs ve E-5 yaklaşık 5 dk']],
    yazi: ['Bey City Residence, Beyaz İnşaat’ın yaklaşık 10 bin metrekarelik arsa üzerinde yaptığı, iki bloktan oluşan 126 daireli bir rezidans. Projenin alt katlarında büyük bir market alanı da bulunuyor.',
      'Daireler 1+1’den 3+1’e kadar; açık havuz, resepsiyon ve 24 saat güvenlik rezidansın öne çıkan özellikleri. Otobüs duraklarına yürüme mesafesinde, metrobüs ve E-5’e araçla birkaç dakikada ulaşılıyor.'],
    foto: []
  },
  'Elit Park Evleri': {
    tur: 'yonetim', kaynaklar: [['elitparkevleri.com (site yönetimi)', 'https://elitparkevleri.com/']],
    bilgi: [['Adres', 'Adnan Kahveci Mahallesi'], ['Yapı', 'Çok bloklu site'], ['Site yönetimi', '0535 205 35 49 · muhasebe@elitparkevleri.com']],
    yazi: ['Elit Park Evleri, Adnan Kahveci Mahallesi’nde birden fazla bloktan oluşan bir site. Site yönetimi, duyurular ve sakinlerle iletişim için kendi internet sitesini aktif olarak kullanıyor.',
      'Yönetimin sitesinde yapımcı, daire sayısı ve sosyal alan bilgisi yayımlanmıyor; güncel bilgi için site yönetimine ya da bölgeyi tanıyan danışmanlarımıza başvurabilirsiniz.'],
    foto: []
  },
  'Midpoint': {
    tur: 'yapimci', kaynaklar: [['imamogluinsaat.com.tr (yapımcı)', 'http://imamogluinsaat.com.tr/midpoint.aspx']],
    bilgi: [['Yapımcı', 'İmamoğlu İnşaat'], ['Adres', 'Adnan Kahveci Mah. Yavuz Sultan Selim Bulvarı, Çalışlar Cad. (Midpoint Plaza), Beykent'], ['Arsa alanı', '1.605 m²'], ['İnşaat alanı', '5.828 m²'], ['Büyüklük', '48 konut ve 15 dükkân; konut, ofis ve dükkân bir arada'], ['Ulaşım', 'E-5’e yaklaşık 4 dk, TEM’e yaklaşık 20 dk']],
    yazi: ['Midpoint, İmamoğlu İnşaat’ın Beykent’te Yavuz Sultan Selim Bulvarı üzerinde yaptığı karma kullanımlı bir yapı: 48 konutun yanında 15 dükkân ve ofisler bulunuyor. Firmanın kendi genel merkezi de bu binada.',
      'Bina, alışveriş merkezlerinin, Beykent Üniversitesi’nin ve TÜYAP’ın çevrelediği bulvarın ortasında yer alıyor. E-5’e birkaç dakikada ulaşılması, hem oturum hem de ofis kullanımı için konumu cazip kılıyor.'],
    foto: []
  },
  'İmamoğlu 1 Sitesi': {
    tur: 'yapimci', kaynaklar: [['imamogluinsaat.com.tr (yapımcı)', 'http://imamogluinsaat.com.tr/imamoglu12.aspx']],
    bilgi: [['Yapımcı', 'İmamoğlu İnşaat (İmamoğlu Konutları 1-2)'], ['Konum', 'Cumhuriyet Mahallesi, Çandarlı Sokak çevresi'], ['Arsa alanı', '6.000 m²'], ['İnşaat alanı', '41.136 m²'], ['Büyüklük', '220 konut ve 30 dükkân (1. ve 2. etap birlikte)'], ['Not', 'Yapımcı, iki etabın bilgisini birlikte vermektedir.']],
    yazi: ['İmamoğlu Sitesi, İmamoğlu İnşaat’ın ilk projelerinden biri olan İmamoğlu Konutları’nın birinci etabı. Firmanın verdiği bilgilere göre iki etap birlikte 6 bin metrekarelik arsa üzerinde 220 konut ve 30 dükkândan oluşuyor.',
      'Cumhuriyet Mahallesi’nin yerleşik dokusu içinde, dükkânların yer aldığı canlı bir sokak üzerinde bulunuyor; metrobüs, okullar ve çarşı yürüme mesafesinde.'],
    foto: []
  },
  'Ada 90 Sitesi': {
    tur: 'yapimci', kaynaklar: [['batuhaninsaat.com.tr (yapımcı)', 'https://www.batuhaninsaat.com.tr/ada-90-camlik-sitesi.html'], ['ada90camliksiteyonetimi.com (site yönetimi)', 'https://www.ada90camliksiteyonetimi.com/']],
    bilgi: [['Tam adı', 'Ada 90 Çamlık Sitesi'], ['Yapımcı', 'Batuhan İnşaat'], ['Konum', 'Barış Mahallesi']],
    yazi: ['Ada 90 Çamlık Sitesi, Barış Mahallesi’nde yer alan ve Batuhan İnşaat’ın tamamlanan projeleri arasında gösterdiği bir site. Sitenin yönetimi, sakinlerle iletişim için ayrı bir internet sitesi kullanıyor.',
      'Yapımcının proje sayfasında blok, daire sayısı ve sosyal alan bilgisi henüz yayımlanmamış; ayrıntılar için site yönetimine ya da danışmanlarımıza başvurabilirsiniz.'],
    foto: ['https://www.batuhaninsaat.com.tr/yuklenen/urunler/1785417063/b-1785417063-17854171235101.jpg']
  },
  'Özay Tepe Sitesi': {
    tur: 'resmi', kaynaklar: [['beylikduzu.istanbul (Beylikdüzü Belediyesi)', 'https://www.beylikduzu.istanbul/haber/2860/beylikduzunde-riskli-yapilarin-donusumu-devam-ediyor']],
    bilgi: [['Konum', 'Kavaklı Mahallesi, 304 Ada 1 Parsel'], ['Büyüklük', '6 bina, 120 bağımsız bölüm'], ['Durum', 'İBB’nin hızlı tarama yöntemiyle riskli bulundu; yıkım ve yeniden yapım süreci Haziran 2026’da başladı'], ['Not', 'Bilgiler Beylikdüzü Belediyesi’nin 10 Haziran 2026 tarihli haberinden alınmıştır.']],
    yazi: ['Özay Tepe Sitesi, Kavaklı Mahallesi’nde 6 binadan ve 120 bağımsız bölümden oluşan bir site. Beylikdüzü Belediyesi’nin Haziran 2026 tarihli duyurusuna göre binalar, İBB’nin deprem riski taramasında riskli bulundu ve kentsel dönüşüm kapsamında yıkımlarına başlandı.',
      'Bu nedenle sitede şu anda yeniden yapım süreci yaşanıyor. Hak sahipliği, yeni proje ve satış durumu hakkında güncel bilgi almak için danışmanlarımızla iletişime geçebilirsiniz.'],
    foto: ['img-72e52313.JPG', 'img-0afc3dcc.JPG', 'img-45e6fef5.JPG'].map(f => 'https://www.beylikduzu.istanbul/Content/blog/gallery/' + f)
  }
};

// Önceki partideki iki siteyi zenginleştir
export const EK2 = {
  'Palm Marin Sitesi': { kaynak: ['konutkentgayrimenkul.com', KKU('palm-marin')], bilgi: [['Büyüklük', '330 daire'], ['Daire tipleri', '2+1, 3+1 ve 4+1 (103–224 m²)']], foto: KK('palm-marin', 14) },
  'Sedef Konakları': { kaynak: ['konutkentgayrimenkul.com', KKU('deniz-istanbul-sedef-konaklari')], bilgi: [['Büyüklük', '44 konut (daire ve villa)'], ['Daire tipleri', '3+1, 4+1 ve 6+1 (193–347 m²)']], foto: KK('deniz-istanbul-sedef-konaklari', 7) }
};
