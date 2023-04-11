(function (Drupal, once) {
    Drupal.behaviors.headerFunctionality = {
        attach: function (context, settings) { 
            window.onscroll = function() {
                moveHeader()
            }
            var header = document.getElementById("primary-header");
            var heroBannerHome = document.querySelectorAll(".homepage-slide-img");
            var sticky = header.offsetTop;

            function moveHeader() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("stickyHomeSlider");
                    heroBannerHome[0].classList.add("regionHeroHomePadding");
                } 
                else {
                    
                    header.classList.remove("stickyHomeSlider");
                    heroBannerHome[0].classList.remove("regionHeroHomePadding");
                }
            }
        }
    }
})(Drupal, once);