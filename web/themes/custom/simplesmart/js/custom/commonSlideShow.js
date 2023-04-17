(function (Drupal, once) {
    Drupal.behaviors.commonSlider = {
        attach: function (context, settings) { 
            let slideIndex = 0;
            function showCommonSlider() {
                let i;
                let totalImages = document.querySelectorAll(".event-slider-individual-events");
                for(i = 0; i < totalImages.length; i++) {
                    totalImages[i].style.display = "none";
                }
                slideIndex++;
                if(slideIndex > totalImages.length) {
                    slideIndex = 1;
                }

                totalImages[slideIndex - 1].style.display = "block";
                setTimeout(showCommonSlider, 6000);
            }


            Window.onload = showCommonSlider();


            //this triggers the slideshow at a certain height of the window screen

            function moveSlideshowOntoPage() {
                var hasFired = false;

                if (document.documentElement.scrollTop >= 700 && !hasFired || window.pageYOffset >= 700 && !hasFired || document.body.scrollTop >= 700 && !hasFired ) {
                    hasFired = true;  
                                     
                    let homeMiniSlider = document.querySelectorAll(".event-slider");
                    homeMiniSlider[0].classList.add("moveMiniSlider");
                }
                else {
                    console.log("2");
                    let homeMiniSlider = document.querySelectorAll(".event-slider");
                    homeMiniSlider[0].classList.remove("moveMiniSlider");
                }
            }


            window.addEventListener('scroll', moveSlideshowOntoPage);
        }
    }
})(Drupal, once);
  
