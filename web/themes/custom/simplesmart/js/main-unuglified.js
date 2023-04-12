(function (Drupal, once) {
  Drupal.behaviors.commonSlider = {
    attach: function (context, settings) {
      let slideIndex = 0;
      function showCommonSlider() {
        let i;
        let totalImages = document.querySelectorAll(".event-slider-individual-events");
        for (i = 0; i < totalImages.length; i++) {
          totalImages[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > totalImages.length) {
          slideIndex = 1;
        }
        totalImages[slideIndex - 1].style.display = "block";
        setTimeout(showCommonSlider, 6000);
      }
      Window.onload = showCommonSlider();
    }
  };
})(Drupal, once);
(function (Drupal, once, $) {
  Drupal.behaviors.headerFunctionality = {
    attach: function (context, settings) {
      window.onscroll = function () {
        moveHeader();
      };
      var header = document.getElementById("primary-header");
      var heroBannerHome = document.querySelectorAll(".homepage-slide-img");
      var sticky = header.offsetTop;
      function moveHeader() {
        if (window.pageYOffset > sticky) {
          header.classList.add("stickyHomeSlider");
          heroBannerHome[0].classList.add("regionHeroHomePadding");
          document.getElementById("block-searchbutton").style.display = "none";
        } else {
          document.getElementById("block-searchbutton").style.display = "block";
          header.classList.remove("stickyHomeSlider");
          heroBannerHome[0].classList.remove("regionHeroHomePadding");
        }
      }

      //search button at top
      document.getElementById("block-searchbutton").onclick = function () {
        showHideSearch();
      };
      function showHideSearch() {
        $(".region-top-search").toggle();
      }
    }
  };
})(Drupal, once, jQuery);
(function (Drupal, once) {
  Drupal.behaviors.homeSlideShowHero = {
    attach: function (context, settings) {
      let slideIndex = 0;
      function showHeroSlider() {
        let i;
        let totalImages = document.querySelectorAll(".actual-class-for-hero-img-home-slider");
        for (i = 0; i < totalImages.length; i++) {
          totalImages[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > totalImages.length) {
          slideIndex = 1;
        }
        totalImages[slideIndex - 1].style.display = "block";
        setTimeout(showHeroSlider, 8000);
      }
      Window.onload = showHeroSlider();
    }
  };
})(Drupal, once);