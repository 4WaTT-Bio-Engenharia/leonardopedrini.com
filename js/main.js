/* Aprimoramento progressivo. Navegação e conteúdo funcionam sem este arquivo. */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var menu = document.querySelector(".nav-mobile");

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { menu.removeAttribute("open"); });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.hasAttribute("open")) {
        menu.removeAttribute("open");
        menu.querySelector("summary").focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (menu.hasAttribute("open") && !menu.contains(event.target)) {
        menu.removeAttribute("open");
      }
    });
  }
})();
