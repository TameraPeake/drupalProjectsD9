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

      //this triggers the slideshow at a certain height of the window screen

      function moveSlideshowOntoPage() {
        var hasFired = false;
        if (document.documentElement.scrollTop >= 700 && !hasFired || window.pageYOffset >= 700 && !hasFired || document.body.scrollTop >= 700 && !hasFired) {
          hasFired = true;
          let homeMiniSlider = document.querySelectorAll(".event-slider");
          homeMiniSlider[0].classList.add("moveMiniSlider");
        } else {
          console.log("2");
          let homeMiniSlider = document.querySelectorAll(".event-slider");
          homeMiniSlider[0].classList.remove("moveMiniSlider");
        }
      }
      window.addEventListener('scroll', moveSlideshowOntoPage);
    }
  };
})(Drupal, once);
(function (Drupal, once, $) {
  Drupal.behaviors.footprintsHome = {
    attach: function (context, settings) {
      window.onload = function () {
        let footSteps = 0;
        // var interval = setInterval(grabFootprint, 1000);

        var interval = setInterval(function () {
          // function grabFootprint() {

          const footprint = new Image(); //this just access the canvas's api
          footprint.src = "/themes/custom/simplesmart/assets/images/2023/animalPrint.png";
          const ctx = document.getElementById("myCanvas").getContext("2d", {
            willReadFrequently: true
          });
          footprint.addEventListener(
          //adding the event listenter so that the function doesn't start before the image finishes loading
          "load", () => {
            ctx.save();
            ctx.drawImage(footprint, 400, 400, 80, 80); //drawImagefunction(img, where on y axis, where on x axis, width, height)
            var imageData = ctx.getImageData(400, 400, 80, 80);
            if (footSteps % 2 == 0 && footSteps < 5) {
              let newStep = 300 - footSteps * 70;
              ctx.putImageData(imageData, 300, newStep);
              console.log("first step:" + newStep);
            }
            if (footSteps % 2 !== 0 && footSteps < 5) {
              let newStep2 = 350 - footSteps * 90;
              ctx.putImageData(imageData, 400, newStep2);
              console.log("second step:" + newStep2);
            }
            if (footSteps == 5) {
              clearInterval(interval);
            }
            footSteps += 1;
          }, false);
        }, 1000);
      };
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