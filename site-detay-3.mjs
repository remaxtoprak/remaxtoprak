// Parti 3 — ilanlardan derlenen bilgiler (25 Kasım 2026). Görseller ilgili ilanlardan, ilan sahiplerine aittir.
const EJ = 'https://imaj.emlakjet.com/resize/1200/0/listing/';
const EJU = s => 'https://www.emlakjet.com/ilan/' + s;
const HEU = s => 'https://www.hepsiemlak.com' + s;
// emlakjet görselleri yalnızca kendi sitesinde açılıyor (başka sitelerden bağlantıya izin vermiyor); bu yüzden görsel listesi şimdilik boş.
const ej = a => (EJ && a && []);
const NOT = 'Bilgiler Kasım 2026’da yayında olan satılık ve kiralık ilanlardan derlenmiştir; ilanlar arasında küçük farklar olabilir.';

export const D3 = {
  'Aktel Residence': {
    tur: 'ilan', kaynaklar: [['emlakjet.com ilanları (22 ilan)', EJU('aktel-satis-ofisinden-31-full-yapili-lux-masrafsiz-satilik-20126449')], ['emlakjet.com', EJU('aktel-residenceda-21-bos-yatirimlik-19861812')]],
    bilgi: [['Büyüklük', '13 katlı 6 blok, 532 daire (satış ofisinin ilan açıklamasına göre)'], ['Arsa alanı', 'Yaklaşık 42.000 m²'], ['Daire tipleri', '1+1, 2+1, 3+1, 4+1 ve 5+1 dubleks; 84–390 m² brüt'], ['Bina yaşı', '11–15'], ['Isınma', 'Merkezi sistem (pay ölçer)'], ['Otopark', 'Açık ve kapalı otopark'], ['Sosyal alanlar', 'Yüzme havuzu, peyzajlı ortak alanlar, güvenlik sistemi'], ['Aidat (ilanlarda)', 'Yaklaşık 4.600–7.600 TL'], ['Not', NOT]],
    yazi: ['Aktel Residence, Beykent’te Adnan Kahveci Mahallesi’nde yer alan, 13 katlı 6 bloktan oluşan büyük bir site. Sitede satış ve kiralama ofisi bulunan bir emlak firmasının ilanlarına göre yaklaşık 42 bin metrekarelik alan üzerinde toplam 532 daire bulunuyor.',
      'Daire seçenekleri 84 metrekarelik 1+1’lerden 390 metrekareye varan dublekslere kadar geniş bir yelpazede. Yüzme havuzu, peyzajlı ortak alanlar, güvenlik ve açık-kapalı otopark sitenin öne çıkan olanakları; Perla Vista ve Paradise AVM’ler, Kolan ve Medicana hastaneleri yakın çevrede.'],
    foto: ej(['20126449/C7EDEBC7D6F870285937D0B3BB8E81C720126449.jpg', '20105463/4384E7B53A57E4B34D3A9928A0FA702720105463.jpg', '20092797/0E4E86E65B5E98079E1FE209F960015820092797.jpg', '20084766/3B54468ACAFB34C5E0FFCE73496F6AB920084766.jpg', '20084884/2F0B67ABD2EBC3F2EDAD35392E4A7E0B20084884.jpg', '20004638/02741A08D5F9CDAD2B2509B35A24557320004638.jpg', '20003451/3124AEB682FDF46040D39FC6154BEBE420003451.jpg', '20003450/368137D1EDB75F22D84E86E4A7D5233120003450.jpg'])
  },
  'Banksis Sitesi': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('beylikduzu-adnan-kahveci-banksis-sitesinde-175m2-satilik-daire-20046275')]],
    bilgi: [['Kat sayısı', '15 katlı bloklar'], ['Bina yaşı', '21–25'], ['Örnek daire', '3+1, 175 m² brüt'], ['Olanaklar', 'Güvenlik, çocuk oyun alanları, açık ve kapalı otopark, çift asansör'], ['Isınma', 'Kombi doğalgaz'], ['Ulaşım', 'Metrobüse yaklaşık 2 dakika yürüme'], ['Not', NOT]],
    yazi: ['Banksis Sitesi, Adnan Kahveci Mahallesi’nde metrobüse birkaç dakika yürüme mesafesinde bulunan, 15 katlı bloklardan oluşan oturmuş bir site. İlanlarda geniş metrekareli, çift balkonlu ve ebeveyn banyolu daireler öne çıkıyor.',
      'Sitede güvenlik, çocuk oyun alanları ve açık-kapalı otopark bulunuyor. Pazar İstanbul, Yaşam Vadisi, devlet hastanesi ve Perla Vista AVM yakın çevrede.'],
    foto: ej(['20046275/A1DBC6C1B452C6BC503A185B2A091E7E20046275.jpg', '20046275/160F0A9F73C862A753821A0C5023277520046275.jpg', '20046275/CA8D1518E5C6AF59DD793D52EF125B1F20046275.jpg', '20046275/CDA11C87B6A48A29AD6E45A8075A29DC20046275.jpg', '20046275/E3AA675D5AA62FA175B211C5A738BB9020046275.jpg', '20046275/7D40938B23A84FB5F9C40FB0261C247820046275.jpg'])
  },
  'Belinay Evleri': {
    tur: 'ilan', kaynaklar: [['emlakjet.com (Belinay Evleri 1)', EJU('beylikduzu-belinay-evleri-1-de-satilik-21-giris-kat-daire-19986827')], ['emlakjet.com (Belinay Evleri 2)', EJU('beylikduzu-belinay-evleri-2-bahce-peyzaj-cepheli-21-satilik-19835437')]],
    bilgi: [['Etaplar', 'Belinay Evleri 1 (4 blok) ve Belinay Evleri 2'], ['Kat sayısı', '5–6 katlı bloklar'], ['Bina yaşı', '11–15'], ['Daire tipleri', '2+1 ve 3+1; yaklaşık 65–145 m² brüt'], ['Olanaklar', 'Güvenlik, açık ve kapalı otopark, jeneratör, su deposu, kamelyalar, site görevlisi'], ['Çevre', 'Site girişinde sağlık ocağı, eczane ve Doğa Koleji; yanındaki belediye parkına çıkış'], ['Not', NOT]],
    yazi: ['Belinay Evleri, Adnan Kahveci Mahallesi’nde iki etaptan oluşan, 5–6 katlı bloklardan kurulu güvenlikli bir site. Birinci etap 4 bloktan oluşuyor; ilanlarda Amerikan mutfaklı 2+1’ler ile geniş 3+1’ler öne çıkıyor.',
      'Sitede güvenlik, kapalı otopark, jeneratör ve su deposu bulunuyor. Girişinde sağlık ocağı, eczane ve bir kolej yer alıyor; yanındaki belediye parkına doğrudan çıkılabiliyor.'],
    foto: ej(['19986827/B7CDC4C4630DF67DA0BE558CDD731D9419986827.jpg', '19835437/9DE7C4514455C24034A5162EC7EA8BED19835437.jpg', '19567195/468DC4CBA43DD0D1360F33D5DD7C9C1619567195.jpg', '19986827/362D0F231ED8C26B177B5493600A462119986827.jpg', '19835437/7008AAD5316B6613E93C38BAC6FF88FB19835437.jpg', '19567195/634E200393AAD22BDA6E83C6988EF07F19567195.jpg'])
  },
  'Ekşioğlu Akkent Şelale Evleri': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('selale-evleri-31-160m2-full-esyali-yatirimlik-daire-18100510')], ['emlakjet.com', EJU('selale-evlerinde-31-160m2-site-icinde-kiralik-daire-19971585')]],
    bilgi: [['Kat sayısı', '9–13 katlı bloklar'], ['Bina yaşı', '11–20'], ['Daire tipleri', '3+1, yaklaşık 160–170 m² brüt (ilanlarda)'], ['Sosyal alanlar', 'Yüzme havuzu, sosyal tesis, 7/24 güvenlik, kamera sistemi, otopark'], ['Isınma', 'Kombi doğalgaz'], ['Çevre', 'Kolan Hastanesi çevresi'], ['Not', NOT]],
    yazi: ['Şelale Evleri, Adnan Kahveci Mahallesi’nde Kolan Hastanesi çevresinde yer alan, yüzme havuzlu ve sosyal tesisli bir site. İlanlarda ağırlıklı olarak 160 metrekare civarında, iki banyolu ve çift balkonlu 3+1 daireler görülüyor.',
      'Sitede 7/24 güvenlik ve kamera sistemi bulunuyor. Merkezi konumu nedeniyle ilanlarda yatırım ve kira getirisi açısından da tercih edilen bir site olarak tanımlanıyor.'],
    foto: ej(['18512431/152F5939BD5315A1320BD65CDD13AA8D18512431.jpg', '18100510/D17089A5B523F2BADD731FFEF31E0A3118100510.jpg', '19971585/8444605EC844B1876AE788D2AA2793C119971585.jpg', '18512431/5C441FF28A16E3B45459BA467528061E18512431.jpg', '18100510/EF92716292DE80CDB9159A91400FC78C18100510.jpg', '19971585/A2371855856D2B7FDCF9FA250A43BF7B19971585.jpg'])
  },
  'Gizil Evleri': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('gizil-evleri-sahibinden-satilik-21-dubleks-site-icinde-19655895')]],
    bilgi: [['Kat sayısı', '4 katlı bloklar'], ['Bina yaşı', '6–10'], ['Örnek daire', '2+1 dubleks, 120 m² brüt / 100 m² net'], ['Olanaklar', 'Yüzme havuzu, kapalı otopark'], ['Isınma', 'Merkezi sistem (pay ölçer)'], ['Not', NOT]],
    yazi: ['Gizil Evleri, Adnan Kahveci Mahallesi’nde 4 katlı bloklardan oluşan, görece yeni ve havuzlu bir site. İlanlarda dubleks daireler ve kapalı otopark öne çıkıyor.',
      'Merkezi ısıtma sistemi ve az katlı yapısıyla sakin bir site yaşamı sunuyor; ilanlarda katılım bankası finansmanına uygun olduğu da belirtiliyor.'],
    foto: ej(['19655895/71F3B1C812583B6CBD5A41F352291FC519655895.jpg', '19655895/B0D4F6DCD757BDBD350459E94A9D0CA419655895.jpg', '19655895/1BD4A16AEB42B164ED4A0A5D1A2782F319655895.jpg', '19655895/63163D9769735CCBB161BD7066DD0C0819655895.jpg', '19655895/990F1E054EBB70B437E8E538F6D8400219655895.jpg'])
  },
  'Sera Konutları': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('adnan-kahveci-mh-sera-konutlari-31-iskanli-sinirsiz-kredi-18788358')], ['emlakjet.com', EJU('beylikduzu-beykent-sera-konutlari-kelepir-satilik-21-daire-19850341')]],
    bilgi: [['Kat sayısı', '15 katlı bloklar'], ['Bina yaşı', '11–25'], ['Daire tipleri', '2+1 ve 3+1; yaklaşık 85–165 m² brüt'], ['Olanaklar', 'Geniş açık otopark, çocuk oyun alanları, spor alanları'], ['Isınma', 'Merkezi sistem veya kombi (bloğa göre)'], ['Çevre', 'Metrobüs, semt pazarı, Beylikdüzü Devlet Hastanesi ve AVM’ler yakın'], ['Not', NOT]],
    yazi: ['Sera Konutları, Beykent’te Adnan Kahveci Mahallesi’nde yer alan, 15 katlı bloklardan oluşan oturmuş bir site. İlanlarda iskânlı ve krediye uygun 2+1 ve 3+1 daireler sık görülüyor.',
      'Sitede geniş bir açık otopark, çocuk oyun ve spor alanları bulunuyor. Metrobüse, semt pazarına, devlet hastanesine ve alışveriş merkezlerine yakın konumu en çok vurgulanan özelliği.'],
    foto: ej(['19850341/E2AC0E68945F804A78F2A1CEF6CD6EC819850341.jpg', '19790621/2257AA1F2CC37003AE1F44B305D9FAB119790621.jpg', '18788358/D1C347A563FE90ADDAC0CFE28EFC6FE418788358.jpg', '20099391/96BCEE8B620200F2705150AA35801AEB20099391.jpg', '19850341/AFE18FD69F90DFB199C1D02832FFABDF19850341.jpg', '18788358/7E5671B0BEE2C4706C9E2E633F9D8A8218788358.jpg'])
  },
  'Velittin Küçük Sitesi': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('beylikduzu-merkezde-site-ici-deniz-manzarali-masrafsiz-21-19920227')], ['emlakjet.com', EJU('beylikduzu-adnan-kahveci-velittin-kucuk-sitesinde-kiralik-21-19962987')]],
    bilgi: [['Adres', 'Adnan Kahveci Mah. Reşit Paşa Cad.'], ['Kat sayısı', '12–15 katlı bloklar'], ['Bina yaşı', '21–30'], ['Daire tipleri', 'Ağırlıklı 2+1, yaklaşık 110–115 m² brüt / 100 m² net'], ['Olanaklar', '7/24 interkomlu güvenlik, açık otopark; üst katlarda deniz manzarası'], ['Isınma', 'Kombi doğalgaz'], ['Not', NOT]],
    yazi: ['Velittin Küçük Sitesi, Adnan Kahveci Mahallesi’nde Reşit Paşa Caddesi üzerinde yer alan, bölgenin köklü ve oturmuş sitelerinden biri. 12–15 katlı bloklarda geniş tip 2+1 daireler bulunuyor; üst katlardan deniz manzarası görülüyor.',
      'Sitede 7/24 interkomlu güvenlik ve açık otopark var. Merkezi konumu sayesinde ulaşım, alışveriş ve okullara kolay erişim sağlıyor.'],
    foto: ej(['20027046/918662AEE719B00F4CBCF088E7B210E020027046.jpg', '19920227/21DB3AB1493306EB2A1B6E6F2E88AFD319920227.jpg', '19962987/D2B19284ADDC94DF6271BD4A282F673319962987.jpg', '20027046/66B7F48F5466B24C5530AA933515170920027046.jpg', '19920227/C73BFB55C52104BEB1ACC0D676DA5C0119920227.jpg', '19962987/3AF6166D8FD7B47DEEF916E8A354A7BF19962987.jpg'])
  },
  'Yeşilkent Siteleri (1, 2, 3)': {
    tur: 'ilan', kaynaklar: [['emlakjet.com (Yeşilkent 1)', EJU('beylikduzu-yesilkent-1-bakimli-temiz-daire-satilik-19602001')], ['emlakjet.com (Yeşilkent 2)', EJU('yesilken2-bulvar-cepheli-31-konut-ve-isyerine-uygun-yapili-20107686')], ['emlakjet.com (Yeşilkent 3)', EJU('beylikduzu-yesilkent-3te-peyzaja-bakan-ebeveyn-banyolu-31-20071198')]],
    bilgi: [['Konum', 'Yavuz Sultan Selim Bulvarı ve Osmanlı Caddesi çevresi'], ['Etaplar', 'Yeşilkent 1, 2 ve 3'], ['Kat sayısı', '14–15 katlı bloklar'], ['Bina yaşı', '16–30'], ['Daire tipleri', 'Ağırlıklı 3+1, yaklaşık 180–185 m² brüt'], ['Olanaklar', 'Kapalı otopark, jeneratör, ısı yalıtımı'], ['Not', NOT]],
    yazi: ['Yeşilkent Siteleri, Beykent’te Yavuz Sultan Selim Bulvarı çevresinde yer alan üç etaplı bir site grubu. 14–15 katlı bloklarda ağırlıklı olarak 180 metrekare civarında, ebeveyn banyolu geniş 3+1 daireler bulunuyor.',
      'Sitelerde kapalı otopark ve jeneratör mevcut. E-5 ve metrobüse yürüme mesafesinde; hastaneler, AVM’ler, okullar, pazar ve Yaşam Vadisi yakın çevrede. Bulvar cepheli dairelerin bir kısmı iş yeri olarak da kullanılabiliyor.'],
    foto: ej(['20107686/65D381765014A29B329837886172511420107686.jpg', '20071198/DC108A1B091510141FA896ED2AF975D920071198.jpg', '19602001/55981876F8FC0E3A967529939A87E9D119602001.jpg', '20107686/E3C695584361AECC96FC9451BCAB951820107686.jpg', '20071198/8687C7A472567B3EE29D0E1D9F7A95EE20071198.jpg', '19602001/4DD53A1ED03B7C47E29B901C77D1869919602001.jpg'])
  },
  'Büyükşehir Konutları (A, B, C kısımları)': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('harika-konumda-beylikduzu-buyuksehir-mh-b-tipi-31-kiralik-19892327')], ['hepsiemlak.com', HEU('/istanbul-beylikduzu-buyuksehir-satilik/daire/166824-40')], ['hepsiemlak.com', HEU('/istanbul-beylikduzu-buyuksehir-kiralik/daire/121283-529')]],
    bilgi: [['Kat sayısı', '13–14 katlı bloklar'], ['Bina yaşı', 'Yaklaşık 26–30'], ['Daire tipleri', '3+1 (B tipi net yaklaşık 90 m²; daha geniş tipler 120 m² net) ve 5+1 (yaklaşık 180 m² net)'], ['Olanaklar', 'Açık otopark, site yönetimi'], ['Isınma', 'Kombi doğalgaz'], ['Ulaşım', 'Metrobüse yakın'], ['Not', NOT]],
    yazi: ['Büyükşehir Konutları, Büyükşehir Mahallesi’nde A, B ve C kısımlarından oluşan, 13–14 katlı bloklardan kurulu köklü bir toplu konut alanı. İlanlarda farklı tiplerde 3+1 daireler ve geniş 5+1’ler yer alıyor.',
      'Metrobüse yakın konumu ve kombi ısınmalı daireleriyle özellikle aileler tarafından tercih ediliyor; sitede açık otopark bulunuyor.'],
    foto: ej(['19892327/F688107710C46250AE4C98732B35C4D919892327.jpg', '19892327/C24ADC603B46C24671FF3546FC2E994219892327.jpg', '19892327/61E7ED9DE4E416E22A40302AE766D79319892327.jpg', '19892327/C8D3D66D51745DBF5E38D43F94D9010419892327.jpg'])
  },
  'Yakamoz Evleri': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('deniz-istanbul-yakamoz-evleri-ust-kv-full-deniz-manzarali-yapili-20017435')], ['emlakjet.com', EJU('west-marina-eston-deniz-yakamozda-denize-nazir-31-dublex-villa-19843496')]],
    bilgi: [['Bilinen adı', 'Eston Deniz Yakamoz Villaları (Deniz İstanbul içinde)'], ['Konum', 'West İstanbul Marina yanı, Marmara Mahallesi'], ['Konut tipi', 'İkiz ve müstakil villalar; 3+1’den 6+2’ye, yaklaşık 200–360 m² brüt'], ['Bina yaşı', '11–20'], ['Sosyal alanlar', '4 açık yüzme havuzu, ortak peyzaj alanları, 7/24 güvenlik'], ['Otopark', 'Villalarda kapalı otopark'], ['Not', NOT]],
    yazi: ['Yakamoz Evleri, Deniz İstanbul projesi içinde West İstanbul Marina’nın hemen yanında yer alan bir villa sitesi. İlanlarda “Eston Deniz Yakamoz Villaları” adıyla da geçiyor ve Deniz İstanbul’un denize en yakın villaları arasında gösteriliyor.',
      'Sitede 3+1’den 6+2’ye kadar ikiz ve müstakil villalar bulunuyor; ön sıradaki villalar kesintisiz deniz manzarasına sahip. Dört açık yüzme havuzu, ortak peyzaj alanları ve 7/24 güvenlik site olanakları arasında.'],
    foto: ej(['20017435/1989101AF9878462C8335F6C686D2BB520017435.jpg', '19888278/DF86E2E1F36A045CD213FC6A95C512DE19888278.jpg', '19843496/9A1F431FD3E6E9FF182326C10F1F8D1E19843496.jpg', '19579715/0A11BC73AC5A3DA72C569D19950A23E419579715.jpg', '20016877/DF3218C9EEA8281DD1BF2CDB7F1AB28620016877.jpg', '20017435/525B6152F1D654A9AC142F847D239C3D20017435.jpg', '19888278/2CD44A7BA5579B3712E8EED90AFE068F19888278.jpg', '19843496/27A22D30C71C0C8A1A467E378AFD196719843496.jpg'])
  },
  'Cornerpark 2 Sitesi': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('beylikduzu-yakuplu-metrobuse-100m-21-site-ici-satilik-daire-19849719')]],
    bilgi: [['Kat sayısı', '5 katlı bloklar'], ['Bina yaşı', 'Yaklaşık 5'], ['Örnek daire', '2+1, 85 m² brüt / 65 m² net, Amerikan mutfak'], ['Olanaklar', '24 saat güvenlik, kapalı otopark, çift asansör'], ['Ulaşım', 'Metrobüs ve E-5’e yaklaşık 100 m'], ['Çevre', 'PTT, sağlık ocağı, semt pazarı, Kent Ormanı, okullar ve marketler yakın'], ['Not', NOT]],
    yazi: ['Corner Park 2, Yakuplu’da metrobüs ve E-5’e yaklaşık 100 metre mesafede bulunan, 5 katlı bloklardan oluşan yeni bir site. İlanlarda iskânlı, kapalı balkonlu ve Amerikan mutfaklı 2+1 daireler öne çıkıyor.',
      'Sitede 24 saat güvenlik, kapalı otopark ve çift asansör bulunuyor. PTT, sağlık ocağı, semt pazarı ve Kent Ormanı yürüme mesafesinde.'],
    foto: ej(['19849719/11397C13B0664DDBB6DF09088C4CD8CC19849719.jpg', '19849719/2B14139DBA2644F8CDA05A0669C85CA319849719.jpg', '19849719/91BCA1D95142B53EA9E13757D871406919849719.jpg', '19849719/29B1E383AF46CED8670E85F201B2699419849719.jpg', '19849719/153593F69A44896F518E78F35979463219849719.jpg'])
  },
  'Newport Rezidans': {
    tur: 'ilan', kaynaklar: [['emlakjet.com', EJU('alban-dan-new-port-sitesi-ozel-mimari-tasarim-235m-31-daire-19871179')], ['emlakjet.com', EJU('beylikduzu-kaymakamligi-karsisi-kiralik-11-on-cephe-daire-19793903')]],
    bilgi: [['Konum', 'Beylikdüzü Kaymakamlığı karşısı, toplu ulaşım güzergâhı üzerinde'], ['Kat sayısı', '9 katlı bloklar'], ['Bina yaşı', '11–15'], ['Daire tipleri', '1+1’den 3+1’e; yaklaşık 95–235 m² brüt'], ['Olanaklar', 'Güvenlik, kapalı otopark, çift asansör'], ['Kullanım', 'Ön cephedeki daireler ofis olarak da kiralanabiliyor'], ['Not', NOT]],
    yazi: ['Newport, Beylikdüzü Kaymakamlığı’nın karşısında, toplu ulaşım güzergâhı üzerinde yer alan 9 katlı bloklardan oluşan bir site. İlanlarda 1+1’lerden 235 metrekareye varan geniş 3+1’lere kadar farklı daireler görülüyor.',
      'Güvenlik, kapalı otopark ve çift asansör bulunan sitede, cadde cephesindeki daireler konutun yanı sıra ofis olarak da kullanılabiliyor.'],
    foto: ej(['19871179/FF8188B9515A5889018A248DE0934C7319871179.jpg', '19793903/534933AB40978F2228875947FC24E39919793903.jpg', '19871179/95F3B191F68B7664AA7AEE10F809F94419871179.jpg', '19793903/4E0FC0C1F9BE1F0015BBCE7DB8CAB86019793903.jpg', '19871179/87AA646496B7C664C28A6590AA89B8DC19871179.jpg', '19793903/6B2CFB55B10AA08ED2BC68500667BFC019793903.jpg'])
  },
  'Yakuplu Konakları': {
    tur: 'ilan', kaynaklar: [['hepsiemlak.com', HEU('/istanbul-beylikduzu-yakuplu-kiralik/villa/131185-1166')]],
    bilgi: [['Konut tipi', 'Villa (3 katlı)'], ['Örnek villa', '5+2, 360 m² brüt / 350 m² net'], ['Bina yaşı', 'Yaklaşık 26'], ['Otopark', 'Açık ve kapalı otopark'], ['Isınma', 'Kombi'], ['Not', NOT]],
    yazi: ['Yakuplu Konakları, Yakuplu Mahallesi’nde üç katlı villalardan oluşan köklü bir site. İlanlarda 350 metrekareyi aşan, 5+2 geniş villalar yer alıyor.',
      'Villalarda açık ve kapalı otopark bulunuyor; site, geniş metrekareli bahçeli ev arayan aileler için Yakuplu’daki seçeneklerden biri.'],
    foto: []
  }
};
