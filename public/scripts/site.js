/* Portfolio interactions: themes, navigation, disclosures and copy feedback. */
(() => {
  const d = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const params = new URLSearchParams(location.search);
  const motionOK = () => d.dataset.motion === 'full';
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage bị chặn: bỏ qua */ } }
  };

  /* ---------- Hiện dần khi cuộn (đặt đầu tiên để nội dung không bị ẩn nếu phần sau lỗi) ---------- */
  if (d.classList.contains('js-reveal')) {
    $$('[data-reveal-group]').forEach(g => [...g.children].forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.setProperty('--i', String(Math.min(i, 6)));
    }));
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
    $$('[data-reveal]').forEach(el => io.observe(el));
  }

  /* ---------- Theme ---------- */
  const themeButtons = $$('[data-theme-toggle]');
  const syncTheme = () => themeButtons.forEach(b => {
    const next = d.dataset.theme === 'dark' ? 'light' : 'dark';
    b.removeAttribute('aria-pressed');
    b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    const label = b.querySelector('[data-theme-label]');
    if (label) label.textContent = next === 'light' ? 'Light theme' : 'Dark theme';
  });
  const setTheme = t => { d.dataset.theme = t; store.set('portfolio-theme', t); syncTheme(); };
  const toggleTheme = () => {
    const next = d.dataset.theme === 'dark' ? 'light' : 'dark';
    if (motionOK() && document.startViewTransition) document.startViewTransition(() => setTheme(next));
    else setTheme(next);
  };
  themeButtons.forEach(b => b.addEventListener('click', toggleTheme));
  syncTheme();

  /* ---------- Header: viền khi đã cuộn ---------- */
  const header = $('[data-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll-spy cho nav + vạch chỉ báo trượt ---------- */
  const navLinks = $$('[data-nav]');
  const indicator = $('.nav-indicator');
  let activeId = null;
  const placeIndicator = () => {
    const a = navLinks.find(l => l.hasAttribute('aria-current'));
    if (!indicator) return;
    if (a && a.offsetParent) {
      indicator.style.setProperty('--x', `${a.offsetLeft}px`);
      indicator.style.setProperty('--w', `${a.offsetWidth}px`);
      indicator.classList.add('is-visible');
    } else indicator.classList.remove('is-visible');
  };
  const setActive = id => {
    activeId = id;
    navLinks.forEach(a => {
      if (id && a.hash === `#${id}`) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    placeIndicator();
  };
  const spyTargets = navLinks.map(a => (a.hash ? document.getElementById(a.hash.slice(1)) : null)).filter(Boolean);
  if (spyTargets.length) {
    const spy = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id === 'top' ? null : e.target.id);
    }), { rootMargin: '-42% 0px -56% 0px' });
    [document.getElementById('top'), ...spyTargets].filter(Boolean).forEach(s => spy.observe(s));
    addEventListener('resize', () => setActive(activeId));
    document.fonts?.ready.then(() => setActive(activeId));
  } else {
    placeIndicator();
    addEventListener('resize', placeIndicator);
    document.fonts?.ready.then(placeIndicator);
  }

  /* ---------- Menu mobile (<dialog>) ---------- */
  const menu = $('#mobile-menu');
  const menuOpen = $('[data-menu-open]');
  if (menu && menuOpen) {
    menuOpen.addEventListener('click', () => { menu.showModal(); menuOpen.setAttribute('aria-expanded', 'true'); });
    menu.addEventListener('close', () => menuOpen.setAttribute('aria-expanded', 'false'));
    $$('[data-menu-close], a', menu).forEach(el => el.addEventListener('click', () => menu.close()));
    matchMedia('(min-width: 960px)').addEventListener('change', e => { if (e.matches && menu.open) menu.close(); });
  }

  /* ---------- Copy + toast ---------- */
  const toastEl = $('.toast');
  let toastTimer;
  const toast = msg => {
    if (!toastEl) return;
    $('[data-toast-text]', toastEl).textContent = msg;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2200);
  };
  const copyText = async text => {
    try { await navigator.clipboard.writeText(text); return true; } catch {
      const ta = Object.assign(document.createElement('textarea'), { value: text });
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.append(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
      return ok;
    }
  };
  const copyWithFeedback = async (text, message, btn) => {
    const ok = await copyText(text);
    toast(ok ? message : 'Could not copy — select the text instead');
    if (btn && ok) {
      btn.dataset.state = 'copied';
      setTimeout(() => { delete btn.dataset.state; }, 2000);
    }
  };
  $$('[data-copy]').forEach(btn => btn.addEventListener('click', () => {
    const src = btn.dataset.copy.startsWith('#') ? $(btn.dataset.copy)?.textContent ?? '' : btn.dataset.copy;
    copyWithFeedback(src.trim(), btn.dataset.copyToast || 'Copied to clipboard', btn);
  }));

  /* ---------- Expand all (Experience) ---------- */
  $$('[data-expand-all]').forEach(btn => {
    const scope = $(btn.dataset.expandAll);
    if (!scope) return;
    const all = $$('details', scope);
    const label = $('[data-label]', btn);
    const sync = () => { if (label) label.textContent = all.every(x => x.open) ? 'Collapse all' : 'Expand all'; };
    btn.addEventListener('click', () => { const open = !all.every(x => x.open); all.forEach(x => { x.open = open; }); sync(); });
    all.forEach(x => x.addEventListener('toggle', sync));
    sync();
  });

})();
