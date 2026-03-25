// 공유 네비게이션 — 각 문서에서 <script src="../nav.js"></script> 추가
// nav.js가 항상 루트에 위치한다는 전제로, script src 경로에서 루트를 역산
(function() {
  var scripts = document.getElementsByTagName("script");
  var src = scripts[scripts.length - 1].getAttribute("src") || "";
  var root = src.replace(/nav\.js$/, "") || "./";

  var nav = document.createElement("nav");
  nav.innerHTML = '<a href="' + root + 'index.html">Knowledge Base</a>';

  var s = nav.style;
  s.position = "fixed";
  s.top = "0";
  s.left = "0";
  s.width = "100%";
  s.padding = "0.5rem 1.2rem";
  s.fontSize = "0.82rem";
  s.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  s.background = "rgba(255,255,255,0.92)";
  s.backdropFilter = "blur(8px)";
  s.WebkitBackdropFilter = "blur(8px)";
  s.borderBottom = "1px solid #e5e5e5";
  s.zIndex = "9999";

  var a = nav.querySelector("a");
  a.style.color = "#555";
  a.style.textDecoration = "none";
  a.onmouseenter = function() { a.style.color = "#2563eb"; };
  a.onmouseleave = function() { a.style.color = "#555"; };

  document.body.prepend(nav);
  // 본문이 네비에 가리지 않도록 상단 여백 추가
  document.body.style.paddingTop = (nav.offsetHeight + 8) + "px";
})();
