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

  var serviceCarousel = document.querySelector("[data-service-carousel]");

  if (serviceCarousel) {
    var serviceTrack = serviceCarousel.querySelector("[data-service-track]");
    var serviceCards = Array.prototype.slice.call(serviceCarousel.querySelectorAll("[data-service-card]"));
    var serviceControls = serviceCarousel.querySelector("[data-service-controls]");
    var servicePrevious = serviceCarousel.querySelector("[data-service-prev]");
    var serviceNext = serviceCarousel.querySelector("[data-service-next]");
    var serviceStatus = serviceCarousel.querySelector("[data-service-status]");
    var activeServiceCard = 0;
    var servicePointerStart = null;

    function serviceCardPosition(index) {
      var difference = (index - activeServiceCard + serviceCards.length) % serviceCards.length;
      if (difference === 0) return "0";
      if (difference === 1) return "1";
      if (difference === serviceCards.length - 1) return "-1";
      return difference < serviceCards.length / 2 ? "far-next" : "far-prev";
    }

    function updateServiceCarousel() {
      serviceCards.forEach(function (card, index) {
        var active = index === activeServiceCard;
        card.setAttribute("data-position", serviceCardPosition(index));
        card.setAttribute("aria-hidden", active ? "false" : "true");
        card.querySelectorAll("a, button").forEach(function (control) {
          if (active) control.removeAttribute("tabindex");
          else control.setAttribute("tabindex", "-1");
        });
      });
      serviceStatus.textContent = (activeServiceCard + 1) + " de " + serviceCards.length + ": " + serviceCards[activeServiceCard].getAttribute("data-title");
    }

    function moveServiceCarousel(step) {
      activeServiceCard = (activeServiceCard + step + serviceCards.length) % serviceCards.length;
      updateServiceCarousel();
    }

    if (serviceTrack && serviceCards.length > 1 && serviceControls && servicePrevious && serviceNext && serviceStatus) {
      serviceCarousel.classList.add("is-enhanced");
      serviceCarousel.setAttribute("role", "region");
      serviceCarousel.setAttribute("aria-roledescription", "carrossel");
      serviceCarousel.setAttribute("aria-label", "Áreas de atuação");
      serviceTrack.tabIndex = 0;
      serviceControls.hidden = false;

      servicePrevious.addEventListener("click", function () { moveServiceCarousel(-1); });
      serviceNext.addEventListener("click", function () { moveServiceCarousel(1); });
      serviceTrack.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveServiceCarousel(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          moveServiceCarousel(1);
        }
      });
      serviceTrack.addEventListener("pointerdown", function (event) {
        if (!event.isPrimary) return;
        servicePointerStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
        serviceTrack.setPointerCapture(event.pointerId);
      });
      serviceTrack.addEventListener("pointerup", function (event) {
        if (!servicePointerStart || servicePointerStart.id !== event.pointerId) return;
        var distanceX = event.clientX - servicePointerStart.x;
        var distanceY = event.clientY - servicePointerStart.y;
        if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > Math.abs(distanceY)) {
          moveServiceCarousel(distanceX < 0 ? 1 : -1);
        }
        servicePointerStart = null;
      });
      serviceTrack.addEventListener("pointercancel", function () { servicePointerStart = null; });

      updateServiceCarousel();
    }
  }
})();
