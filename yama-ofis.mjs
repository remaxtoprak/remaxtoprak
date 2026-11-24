// RE/MAX Toprak — gece mavisi ofis banner'ı, "Gayrimenkul Danışmanı Olmak İstiyorum" butonu + başvuru sayfası,
// "Ofisimiz" sekmesi. yama.mjs çağırır; yama-site-sayfa.mjs'den SONRA (slider sınıfları st-* oradan gelir).
// Görseller depo kökündeki .webp/.jpg dosyaları (ofis-gece.webp vb.); netlify.toml derlemede site/img/ içine kopyalar.

// Ofis içi fotoğraflar gelince buraya eklenir: ['img/ofis-ic-1.webp', ...]
const OFIS_IC = [];

function ofis(f) {
  let html = f['index.html'], js = f['js/app.js'], css = f['css/site.css'];
  const need = (s, a, label) => { const i = s.indexOf(a); if (i < 0) throw new Error('Yama (ofis): bulunamadı -> ' + label); return i; };
  const rep = (s, a, b, label) => { need(s, a, label); return s.replace(a, () => b); };

  // 1) Ana sayfa: danışman ol butonu (hero, aramanın üstünde)
  html = rep(html, '      <div class="search" role="search">',
    '      <div class="hero-join"><a class="btn btn-red" href="#danisman-ol">Gayrimenkul Danışmanı Olmak İstiyorum</a></div>\n      <div class="search" role="search">', 'hero-join');

  // 2) Menü: Ofisimiz sekmesi (masaüstü, mobil, alt bilgi)
  html = rep(html, '      <a href="#hakkimizda">Hakkımızda</a>\n      <a href="#rehber">',
    '      <a href="#hakkimizda">Hakkımızda</a>\n      <a href="#ofisimiz">Ofisimiz</a>\n      <a href="#rehber">', 'nav-desktop');
  html = rep(html, '    <a href="#hakkimizda">Hakkımızda</a>\n    <a href="#rehber">',
    '    <a href="#hakkimizda">Hakkımızda</a>\n    <a href="#ofisimiz">Ofisimiz</a>\n    <a href="#danisman-ol">Danışman Olun</a>\n    <a href="#rehber">', 'nav-mobile');
  html = rep(html, '<li><a href="#hakkimizda">Hakkımızda</a></li>',
    '<li><a href="#hakkimizda">Hakkımızda</a></li><li><a href="#ofisimiz">Ofisimiz</a></li><li><a href="#danisman-ol">Gayrimenkul danışmanı olun</a></li>', 'footer-links');

  // 3) Sayfalar
  const slides = ['img/ofis-gece.webp'].concat(OFIS_IC);
  const alts = ['RE/MAX Toprak ofisi, Barış Mahallesi'].concat(OFIS_IC.map((_, i) => 'RE/MAX Toprak ofis içi ' + (i + 1)));
  const slider = '<div class="st-slider of-slider" aria-roledescription="carousel" aria-label="RE/MAX Toprak ofis görselleri"><div class="st-track">' +
    slides.map((s, i) => '<figure class="st-slide"><img src="' + s + '" alt="' + alts[i] + '" loading="lazy"></figure>').join('') + '</div>' +
    (slides.length > 1 ? '<button type="button" class="st-nav st-prev" aria-label="Önceki görsel">‹</button><button type="button" class="st-nav st-next" aria-label="Sonraki görsel">›</button><div class="st-count">1 / ' + slides.length + '</div>' : '') + '</div>';
  const icGrid = OFIS_IC.length ? '<h3>Ofisimizin içinden</h3><div class="of-grid">' + OFIS_IC.map((s, i) => '<img src="' + s + '" alt="RE/MAX Toprak ofis içi ' + (i + 1) + '" loading="lazy">').join('') + '</div>' : '';
  const maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('RE/MAX Toprak, Barış Mahallesi, Ali Çebi Caddesi No:44/1, Beylikdüzü, İstanbul');

  const pages = `
      <article class="doc of-doc" id="doc-ofisimiz" hidden>
        <div class="crumbs"><a href="#anasayfa">Ana sayfa</a> / Ofisimiz</div>
        <h2>RE/MAX Toprak ofisi</h2>
        <div class="meta">Barış Mahallesi, Beylikdüzü</div>
        ${slider}
        ${icGrid}
        <div class="of-info">
          <div><h3>Adres</h3><p>Barış Mah., Ali Çebi Cad., Beytown Apt. No:44/1<br>Beylikdüzü / İstanbul</p><a class="btn btn-outline" href="${maps}" target="_blank" rel="noopener">Yol tarifi al ↗</a></div>
          <div><h3>İletişim</h3><p><a href="tel:+902128792828">+90 212 879 28 28</a><br><a href="mailto:info@remaxtoprak.com">info@remaxtoprak.com</a></p><a class="btn btn-red" href="#iletisim">Bize yazın</a></div>
          <div><h3>Ulaşım</h3><p>Beylikdüzü metrobüs durağı ofisimizle aynı mahallede, Barış Mahallesi’ndedir. <a href="#mahalle-baris">Barış Mahallesi’ni inceleyin</a>.</p></div>
        </div>
        <div class="cta"><a class="btn btn-red" href="#danisman-ol">Ekibimize katılın</a><a class="btn btn-outline" href="#danismanlar">Danışmanlarımızla tanışın</a></div>
      </article>

      <article class="doc" id="doc-danisman-ol" hidden>
        <div class="crumbs"><a href="#anasayfa">Ana sayfa</a> / Gayrimenkul danışmanı olun</div>
        <h2>Gayrimenkul danışmanı olmak istiyorum</h2>
        <div class="meta">RE/MAX Toprak · Beylikdüzü</div>
        <p>Beylikdüzü’nü tanıyorsanız, insanlarla çalışmayı seviyorsanız ve gayrimenkulde kendi işinizi kurmak istiyorsanız RE/MAX Toprak ekibine katılmak için başvurun. Formu doldurun, ofisimiz sizi arayıp süreci anlatsın.</p>
        <h3>Gayrimenkul danışmanı ne yapar?</h3>
        <ul>
          <li>Satılık ve kiralık mülkleri portföyüne alır, doğru fiyatı belirlemek için piyasayı inceler.</li>
          <li>Alıcı ve kiracılara uygun mülkleri bulur, gösterir ve görüşmeleri yönetir.</li>
          <li>Tapu, kira sözleşmesi ve belge süreçlerinde müşterisine eşlik eder.</li>
        </ul>
        <h3>Yasal şart: MYK belgesi</h3>
        <p>Taşınmaz Ticareti Hakkında Yönetmelik’e göre bir emlak işletmesinde danışman olarak çalışanların Mesleki Yeterlilik Kurumu’nun <b>Emlak Danışmanı (Seviye 4)</b> ya da <b>Sorumlu Emlak Danışmanı (Seviye 5)</b> belgesine sahip olması gerekir. Belgeniz henüz yoksa da başvurabilirsiniz; sürecin nasıl ilerlediğini görüşmede anlatırız.</p>
        <form class="form-card of-form" id="joinForm" name="danisman-basvuru" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="danisman-basvuru">
          <p hidden><label>Bu alanı boş bırakın <input name="bot-field"></label></p>
          <h3>Başvuru formu</h3>
          <p class="small">Bilgileriniz yalnızca başvurunuzu değerlendirmek için kullanılır.</p>
          <div class="form-grid">
            <div class="input"><label for="jName">Ad Soyad</label><input id="jName" name="ad-soyad" required autocomplete="name"></div>
            <div class="input"><label for="jPhone">Telefon</label><input id="jPhone" name="telefon" type="tel" required autocomplete="tel" placeholder="05xx xxx xx xx"></div>
            <div class="input"><label for="jMail">E-posta</label><input id="jMail" name="e-posta" type="email" autocomplete="email"></div>
            <div class="input"><label for="jArea">Oturduğunuz semt</label><input id="jArea" name="semt" placeholder="Örn. Beylikdüzü, Barış"></div>
            <div class="input"><label for="jMyk">MYK belgeniz var mı?</label><select id="jMyk" name="myk-belgesi"><option>Yok</option><option>Seviye 4 var</option><option>Seviye 5 var</option><option>Sınav sürecindeyim</option></select></div>
            <div class="input"><label for="jExp">Emlak deneyiminiz</label><select id="jExp" name="deneyim"><option>Yok, yeni başlayacağım</option><option>1 yıldan az</option><option>1–3 yıl</option><option>3 yıldan fazla</option></select></div>
            <div class="input full"><label for="jMsg">Kendinizden kısaca bahsedin</label><textarea id="jMsg" name="mesaj" rows="4"></textarea></div>
          </div>
          <label class="consent"><input type="checkbox" name="kvkk-onay" value="evet" required> <span><a href="#kvkk">KVKK Aydınlatma Metni</a>’ni okudum ve anladım.</span></label>
          <button class="btn btn-red" type="submit">Başvurumu Gönder</button>
          <div class="form-msg" id="joinMsg" role="status"></div>
        </form>
        <p class="small">Formla ilgili sorun yaşarsanız bizi arayın: <a href="tel:+902128792828">+90 212 879 28 28</a> · <a href="mailto:info@remaxtoprak.com?subject=Gayrimenkul%20dan%C4%B1%C5%9Fman%C4%B1%20ba%C5%9Fvurusu">info@remaxtoprak.com</a></p>
      </article>

`;
  html = rep(html, '      <article class="doc" id="doc-beylikduzu-haritalari" hidden>', pages + '      <article class="doc" id="doc-beylikduzu-haritalari" hidden>', 'doc-pages');

  // 4) app.js: sayfa başlıkları ve form gönderimi
  js = rep(js, '  var DOCS = {', '  var DOCS = {\n' +
    "    'ofisimiz': ['RE/MAX Toprak Ofisi: Adres ve Görseller | Beylikdüzü', 'RE/MAX Toprak Beylikdüzü ofisi: Barış Mahallesi Ali Çebi Caddesi No:44/1. Ofis görselleri, adres, yol tarifi ve iletişim bilgileri.'],\n" +
    "    'danisman-ol': ['Gayrimenkul Danışmanı Olmak İstiyorum | RE/MAX Toprak Beylikdüzü', 'RE/MAX Toprak Beylikdüzü ofisinde gayrimenkul danışmanı olmak için başvurun. MYK belgesi şartı ve başvuru formu.'],", 'docs');
  const code = [
    '  document.addEventListener("submit", function (e) {',
    '    var fm = e.target; if (!fm || fm.id !== "joinForm") return;',
    '    e.preventDefault();',
    '    var msg = document.getElementById("joinMsg"), btn = fm.querySelector("button[type=submit]");',
    '    btn.disabled = true;',
    '    var body = new URLSearchParams(new FormData(fm)).toString();',
    '    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })',
    '      .then(function (r) { if (!r.ok) throw new Error(r.status); msg.textContent = "Teşekkürler! Başvurunuz alındı, ofisimiz en kısa sürede sizi arayacak."; msg.className = "form-msg show"; fm.reset(); })',
    '      .catch(function () { msg.innerHTML = "Başvuru şu anda gönderilemedi. Lütfen bizi arayın: <a href=\\"tel:+902128792828\\">+90 212 879 28 28</a>"; msg.className = "form-msg show err"; })',
    '      .then(function () { btn.disabled = false; });',
    '  });',
    ''
  ].join('\n');
  js = rep(js, '  function route() {', code + '\n  function route() {', 'route-fn');

  // 5) Görünüm: gece mavisi banner, buton, sayfalar
  css += '/* Ofis: gece banner, danışman ol, Ofisimiz */\n' +
    '.hero{background:#0a1838 url("../img/ofis-gece.webp") center 42%/cover no-repeat}\n' +
    '.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,16,42,.88) 0%,rgba(6,16,42,.62) 42%,rgba(6,16,42,.12) 75%,rgba(6,16,42,0) 100%),linear-gradient(0deg,rgba(6,16,42,.35),rgba(6,16,42,0) 35%)}\n' +
    '.hero .wrap{position:relative;z-index:1}\n' +
    '.hero h1{color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.35)}.hero h1 span{color:#8fb6ff}\n' +
    '.hero .lead{color:#dbe5ff}\n' +
    '.hero-join{margin-top:22px}.hero-join .btn{box-shadow:0 10px 30px rgba(220,28,46,.35)}\n' +
    '.of-slider{margin:24px 0 8px}.of-slider .st-slide{aspect-ratio:16/9}\n' +
    '.of-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-top:12px}.of-grid img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:12px}\n' +
    '.of-info{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:8px}.of-info h3{margin-top:24px}.of-info .btn{margin-top:12px}\n' +
    '.of-form{margin-top:28px}.of-form textarea{font:inherit;padding:12px 14px;border:1px solid var(--line,#e3e6ee);border-radius:12px;resize:vertical}\n' +
    '.form-msg.show{display:block}.form-msg.err{background:#fdecea;color:#b42318}.form-msg a{color:inherit}\n' +
    '@media (max-width:800px){.of-info{grid-template-columns:1fr}}\n';

  f['index.html'] = html; f['js/app.js'] = js; f['css/site.css'] = css;
  return f;
}

export { ofis, OFIS_IC };
