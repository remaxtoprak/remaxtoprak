// RE/MAX Toprak – alt bilgi (footer): RE/MAX Türkiye sitesinin alt bilgisindeki bağlantılar
// (mobil uygulama, hizmetler, hukuksal metinler, iletişim, ödüller, sosyal medya) RE/MAX Toprak'a
// uyarlanmış, sitenin kendi tasarımıyla. Ödül rozetleri derlemede rozet.mjs ile şeffaf PNG'ye çevrilir. Kaynak: https://remax.com.tr/tr (24 Kasım 2026).

const EXT = 'target="_blank" rel="noopener"';
const I = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  stars: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 6.5v.01M12 17.5v.01M6.5 12h.01M17.5 12h.01M8.1 8.1h.01M15.9 15.9h.01M15.9 8.1h.01M8.1 15.9h.01"/></svg>',
  office: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"/></svg>',
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
  ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20"/></svg>',
  yt: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/></svg>',
  tt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6"/></svg>',
  li: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>'
};
const ul = (items) => '<ul>' + items.map(([t, h, ext]) => '<li><a href="' + h + '"' + (ext ? ' ' + EXT : '') + '>' + t + '</a></li>').join('') + '</ul>';

const FOOTER = `<footer>
  <div class="wrap">
    <div class="ft-app">
      <div class="ft-app-text">
        <span class="eyebrow">RE/MAX Toprak ilanları cebinizde</span>
        <h3>Hemen indirin, RE/MAX Toprak portföyünü kaçırmayın.</h3>
        <p>RE/MAX Toprak'ın tüm ilanları ücretsiz <b>RE/MAX</b> mobil uygulamasında: ilanları arayın, favorilerinizi kaydedin, danışmanımıza tek dokunuşla ulaşın.</p>
        <div class="ft-app-btns">
          <a class="ft-badge" href="https://apps.apple.com/us/app/re-max-t%C3%BCrkiye/id6748014899" ${EXT}><img src="https://remax.com.tr/app_store.svg" alt="App Store'dan indirin" width="170" height="51" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<b class=ft-badge-txt>'+this.alt+'</b>'"><span>iPhone ve iPad</span></a>
          <a class="ft-badge" href="https://play.google.com/store/apps/details?id=com.remaxturkiye.app&amp;hl=tr" ${EXT}><img src="https://remax.com.tr/google_play.svg" alt="Google Play'den alın" width="170" height="51" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<b class=ft-badge-txt>'+this.alt+'</b>'"><span>Android</span></a>
        </div>
      </div>
      <img class="ft-phone" src="https://remax.com.tr/_next/image?url=%2Fmock-1.png&amp;w=640&amp;q=75" alt="RE/MAX mobil uygulaması ekranı" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">
    </div>
    <div class="foot-top ft-cols">
      <div>
        <a class="foot-logo" href="/" aria-label="RE/MAX Toprak ana sayfa"><img src="img/logo-cream.svg" alt="RE/MAX Toprak Beylikdüzü emlak ofisi logosu"></a>
        <div class="office">
          <strong>RE/MAX Toprak</strong><br>
          Barış Mah., Ali Çebi Cad., Beytown Apt. No:44/1<br>
          Beylikdüzü / İstanbul<br>
          Tel: <a href="tel:+902128792828">+90 212 879 28 28</a><br>
          E-posta: <a href="mailto:info@remaxtoprak.com">info@remaxtoprak.com</a>
        </div>
        <div class="social">
          <a href="https://www.instagram.com/remaxtoprak/" ${EXT} aria-label="RE/MAX Toprak Instagram">${I.ig}</a>
          <a href="https://www.youtube.com/@remaxtoprak" ${EXT} aria-label="RE/MAX Toprak YouTube">${I.yt}</a>
          <a href="https://www.tiktok.com/@remaxtoprak" ${EXT} aria-label="RE/MAX Toprak TikTok">${I.tt}</a>
          <a href="https://www.linkedin.com/company/remaxtoprak/" ${EXT} aria-label="RE/MAX Toprak LinkedIn">${I.li}</a>
        </div>
      </div>
      <div>
        <h4>Beylikdüzü gayrimenkul</h4>
        <ul>
          <li><a href="/ilanlar" data-op="1">Satılık ilanlar</a></li>
          <li><a href="/ilanlar" data-op="2">Kiralık ilanlar</a></li>
          <li><a href="/ilanlar" data-main="1">Konut</a></li>
          <li><a href="/ilanlar" data-main="2">Ticari</a></li>
          <li><a href="/ilanlar" data-main="3">Arsa / Arazi</a></li>
          <li><a href="/beylikduzu">Mahalleler</a></li>
        </ul>
      </div>
      <div>
        <h4>RE/MAX Toprak</h4>
        ${ul([['Hakkımızda', '/hakkimizda'], ['Ofisimiz', '/ofisimiz'], ['Danışmanlarımız', '/danismanlar'], ['Gayrimenkul danışmanı olun', '/danisman-ol'], ['RE/MAX Türkiye\'deki sayfamız', 'https://remax.com.tr/tr/ofis/detay/toprak', 1], ['Danışman girişi (MyRE/MAX)', 'https://myremax.remax.com.tr/tr-TR/Login', 1]])}
      </div>
      <div>
        <h4>Hizmetlerimiz</h4>
        ${ul([['Size ev bulalım', '/iletisim'], ['Mülkünüzü satalım, kiralayalım', '/degerleme'], ['Ücretsiz değerleme', '/degerleme'], ['Kredi hesaplama', '/hesaplama-kredi'], ['Hesaplama araçları', '/hesaplama'], ['Beylikdüzü rehberi', '/rehber'], ['Sıkça sorulan sorular', '/sss']])}
      </div>
      <div>
        <h4>Hukuksal metinler</h4>
        ${ul([['KVKK Aydınlatma Metni', '/kvkk'], ['Gizlilik Politikası', '/gizlilik'], ['Kullanım Koşulları', '/kullanim-kosullari'], ['İletişim', '/iletisim']])}
      </div>
    </div>
    <div class="ft-cards">
      <a class="ft-card" href="tel:+902128792828">${I.phone}<span><small>RE/MAX Toprak</small><b>+90 212 879 28 28</b><em>info@remaxtoprak.com</em></span></a>
      <a class="ft-card" href="https://www.google.com/maps/search/?api=1&amp;query=RE/MAX%20Toprak%2C%20Bar%C4%B1%C5%9F%20Mahallesi%2C%20Ali%20%C3%87ebi%20Caddesi%20No%3A44/1%2C%20Beylikd%C3%BCz%C3%BC%2C%20%C4%B0stanbul" ${EXT}>${I.office}<span><small>Ofisimize gelin</small><b>Yol tarifi al</b><em>Barış Mah., Beylikdüzü</em></span></a>
      <a class="ft-card" href="/ilanlar">${I.globe}<span><small>RE/MAX Toprak</small><b>Tüm ilanlarımız</b></span></a>
      <a class="ft-card" href="/danisman-ol">${I.stars}<span><small>Kariyer</small><b>Danışmanımız olun</b></span></a>
    </div>
    <div class="ft-awards">
      <h4>RE/MAX Toprak, ödüllü RE/MAX Türkiye ağının bir parçasıdır</h4>
      <div class="ft-award-row">
        ${[['gptw_logo.png', 'Great Place to Work Certified 2025 Türkiye'], ['isverenler_logo.png', 'En İyi İşverenler – Innovation by All, Türkiye 2024'], ['GPTW-eniyi-isverenler-kadin-logo.jpg', 'En İyi İşverenler – Women, Türkiye 2024'], ['peryon--badge-post.png', 'PERYON İnsana Değer Ödülleri – Bağlılık ve Kültürel Dönüşüm KOBİ Ödülü'], ['peryon-odul-2.png', 'PERYON İnsana Değer Ödülleri – Dijital Dönüşüme Liderlik KOBİ Ödülü']].map(([f, t]) => '<figure><img src="https://remax.com.tr/' + f + '" alt="' + t + '" title="' + t + '" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></figure>').join('')}
      </div>
    </div>
    <p class="ft-tm">RE/MAX, RE/MAX balonu ve tasarımı, RE/MAX Collection ve RE/MAX Commercial, RE/MAX International'ın tescilli ticari markalarıdır. Türkiye ve KKTC'deki marka hakları RE/MAX Türkiye'ye aittir; izinsiz kullanılamaz.</p>
    <div class="foot-bottom">
      <div>
        <div class="indep">Her ofis bağımsız olarak sahiplenilmiş ve yönetilmektedir.</div>
        <div style="margin-top:6px">© <span id="yr"></span> RE/MAX Toprak. Tüm hakları saklıdır.</div>
      </div>
      <div class="ft-follow">
        <span>RE/MAX Toprak'ı takip edin</span>
        <a href="https://www.instagram.com/remaxtoprak/" ${EXT} aria-label="RE/MAX Toprak Instagram">${I.ig}</a>
        <a href="https://www.youtube.com/@remaxtoprak" ${EXT} aria-label="RE/MAX Toprak YouTube">${I.yt}</a>
        <a href="https://www.tiktok.com/@remaxtoprak" ${EXT} aria-label="RE/MAX Toprak TikTok">${I.tt}</a>
        <a href="https://www.linkedin.com/company/remaxtoprak/" ${EXT} aria-label="RE/MAX Toprak LinkedIn">${I.li}</a>
      </div>
    </div>
  </div>
</footer>`;

const CSS = `
/* yama-footer.mjs: alt bilgi */
.ft-app{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;padding:28px 32px;margin:0 0 56px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}
.ft-app .eyebrow{color:#9db9ea}
.ft-app h3{color:#fff;font-size:24px;line-height:1.25;margin:6px 0 0;max-width:520px}
.ft-app{position:relative;overflow:hidden;align-items:flex-end;padding-bottom:0}
.ft-app-text{padding-bottom:28px;max-width:600px}
.ft-app p{color:#cfd8f3;font-size:15px;line-height:1.6;margin:10px 0 0}
.ft-app p b{color:#fff}
.ft-app-btns{display:flex;gap:14px;flex-wrap:wrap;margin-top:18px}
.ft-badge{display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none}
.ft-badge img{height:48px;width:auto;display:block;transition:transform .15s}
.ft-badge:hover img{transform:translateY(-2px)}
.ft-badge-txt{display:block;padding:12px 18px;border-radius:10px;background:#fff;color:var(--dark-blue);font-size:15px}
.ft-badge span{font-size:11px;color:#9db9ea;font-weight:600;letter-spacing:.04em}
.ft-phone{width:230px;height:auto;align-self:flex-end;margin-right:24px;display:block}
.ft-awards{margin-top:44px;padding-top:32px;border-top:1px solid rgba(255,255,255,.12)}
.ft-awards h4{color:#fff;font-size:14px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 18px}
.ft-award-row{display:flex;flex-wrap:wrap;gap:16px;align-items:center}
.ft-award-row figure{margin:0;width:118px;height:118px;display:grid;place-items:center}
.ft-award-row img{max-width:100%;max-height:100%;object-fit:contain}
.ft-store{display:flex;align-items:center;gap:10px;padding:10px 18px;border-radius:12px;background:#fff;color:var(--dark-blue)!important;text-decoration:none;font-weight:800;font-size:16px;line-height:1.1;transition:transform .15s}
.ft-store:hover{transform:translateY(-2px)}
.ft-store small{display:block;font-size:11px;font-weight:600;color:var(--muted)}
.ft-store svg,.ft-card svg,.ft-follow svg,.social svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.ft-store svg{color:var(--red)}
.ft-cols{grid-template-columns:1.4fr 1fr 1fr 1.1fr 1fr;gap:32px}
.social a{color:#fff}
.office a{color:#fff;text-decoration:none}
.ft-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:48px}
.ft-card{display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:16px;border:1px solid rgba(255,255,255,.16);color:#fff;text-decoration:none;transition:background .2s,border-color .2s}
.ft-card:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4)}
.ft-card svg{width:34px;height:34px;padding:7px;border-radius:50%;background:var(--red);color:#fff;stroke-width:1.8}
.ft-card:nth-child(2) svg,.ft-card:nth-child(4) svg{background:var(--blue)}
.ft-card small{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9db9ea;font-weight:700}
.ft-card b{display:block;font-size:15px}
.ft-card em{display:block;font-style:normal;font-size:13px;color:#cfd8f3}
.ft-tm{margin:36px 0 0;font-size:12px;line-height:1.6;color:#8f9cc0;max-width:900px}
.ft-follow{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ft-follow span{font-size:12px;color:#9db9ea;margin-right:4px}
.ft-follow a{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;color:#fff;border:1px solid rgba(255,255,255,.2)}
.ft-follow a:hover{border-color:#fff}
.ft-follow svg{width:18px;height:18px}
@media (max-width:1100px){.ft-cols{grid-template-columns:1fr 1fr 1fr}.ft-cards{grid-template-columns:1fr 1fr}}
.ft-phone{}
@media (max-width:900px){.ft-phone{display:none}.ft-app{padding-bottom:0}}
@media (max-width:640px){.ft-award-row figure{width:calc(33.3% - 11px);height:auto;aspect-ratio:1}.ft-cols{grid-template-columns:1fr 1fr}.ft-cols>div:first-child{grid-column:1/-1}.ft-cards{grid-template-columns:1fr}.ft-app{padding:22px}.ft-app h3{font-size:20px}}
`;

function footer(f) {
  let h = f['index.html'];
  const a = h.indexOf('<footer>'), b = h.indexOf('</footer>');
  if (a < 0 || b < 0 || b < a) throw new Error('Yama (footer): <footer> bulunamadı');
  if (h.indexOf('id="yr"') < 0) throw new Error('Yama (footer): yıl alanı bulunamadı');
  f['index.html'] = h.slice(0, a) + FOOTER + h.slice(b + '</footer>'.length);
  f['css/site.css'] += CSS;
  return f;
}

export { footer };
