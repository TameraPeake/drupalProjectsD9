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
  Drupal.behaviors.footprintsHome = {
    attach: function (context, settings) {
      window.onload = function () {
        grabFootprint();
      };
      function grabFootprint() {
        const footprint = new Image(); //this just access the canvas's api
        footprint.src = "/themes/custom/simplesmart/assets/images/2023/animalPrint.png";
        const ctx = document.getElementById("myCanvas").getContext("2d");
        footprint.addEventListener(
        //adding the event listenter so that the function doesn't start before the image finishes loading
        "load", () => {
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 2; j++) {
              ctx.save(); //saves the current canvas
              ctx.rotate(-0.4);
              //translate controls where the footprints are placed in the canvas
              //translate comes first and then the draw image (not sure why, but it won't work if otherway around)
              if (j == 1) {
                ctx.translate(200 + j * 40, 30 + i * 30);
              } else {
                ctx.translate(100 + j * 10, 90 + i * 30);
              }
              ctx.drawImage(footprint, j * 100, i * 220, 80, 80); //drawImagefunction(img, where on y axis, where on x axis, width, height)
              ctx.restore();
            }
          }
        }, false);
      }
    }
  };
})(Drupal, once, jQuery);
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