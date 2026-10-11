/* Sprite icon dùng chung, chèn đồng bộ ở đầu <body>.
   Không dùng <use href="sprite.svg#id"> vì Chrome chặn tham chiếu ngoài khi mở bằng file://.
   Astro sẽ inline icon lúc build. i-* là icon giao diện; g-* là glyph giữ chỗ cho logo tool (không phải logo thật). */
(function () {
  var S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
  var F = 'viewBox="0 0 24 24" fill="currentColor"';
  var icons = {
    'i-arrow-right': [S, '<path d="M5 12h14M13 6l6 6-6 6"/>'],
    'i-arrow-left': [S, '<path d="M19 12H5M11 6l-6 6 6 6"/>'],
    'i-arrow-up-right': [S, '<path d="M7 17 17 7M8.5 7H17v8.5"/>'],
    'i-arrow-down': [S, '<path d="M12 5v14M6 13l6 6 6-6"/>'],
    'i-arrow-up': [S, '<path d="M12 19V5M6 11l6-6 6 6"/>'],
    'i-chevron-down': [S, '<path d="m6 9 6 6 6-6"/>'],
    'i-search': [S, '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>'],
    'i-sun': [S, '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'],
    'i-moon': [S, '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'],
    'i-menu': [S, '<path d="M4 8.5h16M4 15.5h16"/>'],
    'i-close': [S, '<path d="M6 6l12 12M18 6 6 18"/>'],
    'i-copy': [S, '<rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M15 5H7a2 2 0 0 0-2 2v8"/>'],
    'i-check': [S, '<path d="m5 12.5 4.5 4.5L19 7.5"/>'],
    'i-mail': [S, '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7.5 8 5.5 8-5.5"/>'],
    'i-user': [S, '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>'],
    'i-code': [S, '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'],
    'i-file': [S, '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'],
    'i-hash': [S, '<path d="M5 9h15M4 15h15M10 3 8 21M16 3l-2 18"/>'],
    'i-link': [S, '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>'],
    'i-play': [S, '<path d="M8 5.5v13l10-6.5z"/>'],
    'i-layers': [S, '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>'],
    'i-cloud': [S, '<path d="M7 18.5h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 9.6 4.5 4.5 0 0 0 7 18.5z"/>'],
    'i-auto': [S, '<path d="M4 12a8 8 0 0 1 13.66-5.66L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.66 5.66L4 15.5M4 20v-4.5h4.5"/>'],
    'i-rel': [S, '<path d="M3 12h4l2.5-6 5 12 2.5-6h4"/>'],
    'i-sec': [S, '<path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z"/><path d="m9 12 2 2 4-4"/>'],
    'g-circle': [F, '<circle cx="12" cy="12" r="7.5"/>'],
    'g-triangle': [F, '<path d="M12 4.5 20.5 19h-17z"/>'],
    'g-hex': [F, '<path d="m12 3.5 7.4 4.25v8.5L12 20.5l-7.4-4.25v-8.5z"/>'],
    'g-diamond': [F, '<path d="m12 3.5 8.5 8.5-8.5 8.5L3.5 12z"/>'],
    'g-ring': [F, '<path fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>'],
    'g-square': [F, '<rect x="5" y="5" width="14" height="14" rx="3.5"/>'],
    'g-pill': [F, '<rect x="3" y="8" width="18" height="8" rx="4"/>'],
    'g-plus': [F, '<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>'],
    'g-half': [F, '<path fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2.5v11a5.5 5.5 0 0 0 0-11z"/>'],
    'g-bars': [F, '<rect x="4" y="5" width="16" height="3.5" rx="1.5"/><rect x="4" y="10.25" width="11" height="3.5" rx="1.5"/><rect x="4" y="15.5" width="14" height="3.5" rx="1.5"/>'],
    'g-arc': [F, '<path d="M4 18a8 8 0 0 1 16 0h-4a4 4 0 0 0-8 0z"/>'],
    'g-chevrons': [F, '<path d="m4 6 6 6-6 6V6zm8 0 6 6-6 6V6z"/>']
  };
  var out = '';
  for (var id in icons) out += '<symbol id="' + id + '" ' + icons[id][0] + '>' + icons[id][1] + '</symbol>';
  document.body.insertAdjacentHTML('afterbegin',
    '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">' + out + '</svg>');
})();
