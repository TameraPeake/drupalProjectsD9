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

        }
    }
})(Drupal, once);
  
