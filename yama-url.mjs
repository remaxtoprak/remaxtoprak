// RE/MAX Toprak – temiz adresler: "/#danismanlar" yerine "/danismanlar".
// Sayfa adları zaten küçük harf ve Türkçe karaktersiz (danismanlar, mahalle-baris, site-demir-romance, danisman-ali-veli, ilan-123...).
// Eski "#..." bağlantıları açılınca otomatik olarak yeni adrese çevrilir.
// Sunucu tarafında tüm adresler index.html'e yönlenmeli (netlify.toml / .htaccess).

function url(f) {
  let h = f['index.html'], js = f['js/app.js'];
  const need = (s, a, label) => { if (s.indexOf(a) < 0) throw new Error('Yama (url): bulunamadı -> ' + label); };
  const rep = (s, a, b, label) => { need(s, a, label); return s.split(a).join(b); };

  // --- index.html: bağlantılar ve <base>
  h = h.replace(/href="#anasayfa"/g, 'href="/"').replace(/href="#([a-z0-9-]+)"/g, 'href="/$1"');
  h = rep(h, '<head>', '<head>\n<base href="/">', 'head');

  // --- app.js: koddan üretilen bağlantılar
  js = js.replace(/href=\\"#anasayfa\\"/g, 'href=\\"/\\"').replace(/href=\\"#/g, 'href=\\"/');
  js = js.replace(/href="#anasayfa"/g, 'href="/"').replace(/href="#(?=[a-z'])/g, 'href="/');

  // adres değiştirme noktaları
  js = rep(js, "location.hash = 'danisman-' + ag.dataset.agent", "go('danisman-' + ag.dataset.agent)", 'agent');
  js = rep(js, "location.hash = 'danismanlar'", "go('danismanlar')", 'danismanlar');
  js = rep(js, "location.hash = 'ilanlar'", "go('ilanlar')", 'ilanlar');
  js = rep(js, 'location.hash = "mahalle-" + m[0]', 'go("mahalle-" + m[0])', 'mahalle');
  js = rep(js, "location.hash === '#ilanlar'", "curPath() === 'ilanlar'", 'ilanlar-kontrol');
  js = rep(js, "history.pushState(null, '', '#ilan-' + card.dataset.code)", "history.pushState(null, '', '/ilan-' + card.dataset.code.toLowerCase())", 'ilan-push');
  js = rep(js, "openDetail(h.slice(5)); return;", "openDetail(h.slice(5).toUpperCase()); return;", 'ilan-kod');
  js = rep(js, "history.replaceState(null, '', '#anasayfa')", "history.replaceState(null, '', '/')", 'ilan-kapat');
  js = rep(js, "var h = (location.hash || '').replace(/^#/, '');", "var h = curPath(); setCanon(h);", 'route-h');
  if (/location\.hash\s*=[^=]/.test(js)) throw new Error('Yama (url): değiştirilmemiş location.hash ataması kaldı');

  // yardımcılar: adresi oku/yaz, eski # adreslerini çevir, iç bağlantıları yakala
  js = rep(js, "  function route() {",
    "  function curPath() {\n" +
    "    var hs = location.hash || '';\n" +
    "    if (/^#[a-z0-9-]+$/.test(hs) && (location.pathname === '/' || location.pathname === '/index.html')) {\n" +
    "      var o = hs.slice(1); history.replaceState(null, '', o === 'anasayfa' ? '/' : '/' + o);\n" +
    "    }\n" +
    "    var p = decodeURIComponent(location.pathname).replace(/^\\/+|\\/+$/g, '').toLowerCase();\n" +
    "    if (p === 'index.html' || p === 'anasayfa') { p = ''; history.replaceState(null, '', '/'); }\n" +
    "    return p;\n" +
    "  }\n" +
    "  function go(p) { history.pushState(null, '', p && p !== 'anasayfa' ? '/' + p : '/'); route(); }\n" +
    "  function setCanon(p) {\n" +
    "    var u = 'https://www.remaxtoprak.com/' + (p || '');\n" +
    "    var c = document.querySelector('link[rel=\"canonical\"]'); if (c) c.setAttribute('href', u);\n" +
    "    var o = document.querySelector('meta[property=\"og:url\"]'); if (o) o.setAttribute('content', u);\n" +
    "  }\n\n  function route() {", 'route-fn');

  js = rep(js, "    window.addEventListener('hashchange', route);",
    "    window.addEventListener('popstate', route);\n" +
    "    document.addEventListener('click', function (e) {\n" +
    "      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;\n" +
    "      var a = e.target.closest('a[href]'); if (!a || a.target === '_blank' || a.hasAttribute('download')) return;\n" +
    "      var raw = a.getAttribute('href');\n" +
    "      if (raw.charAt(0) === '#' && /^#[a-z0-9-]+$/.test(raw)) { e.preventDefault(); closeMenu(); go(raw.slice(1)); return; }\n" +
    "      if (a.origin !== location.origin) return;\n" +
    "      var p = a.pathname.replace(/^\\/+|\\/+$/g, '');\n" +
    "      if (p.indexOf('/') >= 0 || /\\.[a-z0-9]+$/i.test(p) || p.indexOf('api') === 0) return;\n" +
    "      e.preventDefault(); closeMenu(); go(p);\n" +
    "    });", 'hashchange');

  f['index.html'] = h; f['js/app.js'] = js;
  return f;
}

export { url };
