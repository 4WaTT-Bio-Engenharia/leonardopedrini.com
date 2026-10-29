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

  var hero = document.querySelector(".hero-banner");

  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dotsContainer = hero.querySelector(".hero-dots");
    var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-dot"));
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var currentSlide = 0;
    var rotationTimer = null;

    function showSlide(index) {
      currentSlide = index;
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === index;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach(function (dot, dotIndex) {
        dot.setAttribute("aria-pressed", dotIndex === index ? "true" : "false");
      });
    }

    function stopRotation() {
      if (rotationTimer) window.clearInterval(rotationTimer);
      rotationTimer = null;
    }

    function startRotation() {
      stopRotation();
      if (reducedMotion.matches || document.hidden) return;
      rotationTimer = window.setInterval(function () {
        showSlide((currentSlide + 1) % slides.length);
      }, 7000);
    }

    if (slides.length > 1 && dotsContainer && dots.length === slides.length) {
      hero.classList.add("is-enhanced");
      dotsContainer.hidden = false;

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          showSlide(Number(dot.getAttribute("data-slide")));
        });
      });

      hero.addEventListener("mouseenter", stopRotation);
      hero.addEventListener("mouseleave", startRotation);
      hero.addEventListener("focusin", stopRotation);
      hero.addEventListener("focusout", function (event) {
        if (!hero.contains(event.relatedTarget)) startRotation();
      });
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stopRotation();
        else startRotation();
      });

      if (typeof reducedMotion.addEventListener === "function") {
        reducedMotion.addEventListener("change", startRotation);
      } else if (typeof reducedMotion.addListener === "function") {
        reducedMotion.addListener(startRotation);
      }

      showSlide(0);
      startRotation();
    }
  }
})();
