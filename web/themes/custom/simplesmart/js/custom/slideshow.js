(function (Drupal, once) {
    Drupal.behaviors.homeSlideShowHero = {
        attach: function (context, settings) { 
            let slideIndex = 0;
            function showHeroSlider() {
                let i;
                let totalImages = document.querySelectorAll(".actual-class-for-hero-img-home-slider");
                for(i = 0; i < totalImages.length; i++) {
                    totalImages[i].style.display = "none";
                }
                slideIndex++;
                if(slideIndex > totalImages.length) {
                    slideIndex = 1;
                }

                totalImages[slideIndex - 1].style.display = "block";
                setTimeout(showHeroSlider, 7000);
            }


            Window.onload = showHeroSlider();

        }
    }
})(Drupal, once);
  
