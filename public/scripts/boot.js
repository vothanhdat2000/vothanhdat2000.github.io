/* Apply theme and reduced-motion preferences before the first paint. */
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  var q = new URLSearchParams(location.search);
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  var theme = q.get('theme') || read('portfolio-theme');
  if (theme !== 'light' && theme !== 'dark') {
    theme = 'dark';
  }
  d.setAttribute('data-theme', theme);

  var m = q.get('motion');
  var reduce = m === 'reduce' || (m !== 'full' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  d.setAttribute('data-motion', reduce ? 'reduce' : 'full');


})();
