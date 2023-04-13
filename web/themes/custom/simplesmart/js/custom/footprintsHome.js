(function (Drupal, once, $) {
    Drupal.behaviors.footprintsHome = {
        attach: function (context, settings) { 

            window.onload = function() {
                grabFootprint();
            }
            
            function grabFootprint() {
                
                
                const footprint = new Image();  //this just access the canvas's api
                footprint.src = "/themes/custom/simplesmart/assets/images/2023/animalPrint.png";
                const ctx =document.getElementById("myCanvas").getContext("2d");
                footprint.addEventListener(  //adding the event listenter so that the function doesn't start before the image finishes loading
                    "load", 
                    () => {
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 2; j++) {
                                ctx.save(); //saves the current canvas
                                ctx.rotate(-0.4);
                                //translate controls where the footprints are placed in the canvas
                   //translate comes first and then the draw image (not sure why, but it won't work if otherway around)
                                if(j == 1) {
                                    ctx.translate(200 + j * 40, 30 + i * 30);
                                }
                                else {
                                    ctx.translate(100 + j * 10, 90 + i * 30);
                                }
                                ctx.drawImage(footprint, j * 100, i * 220, 80, 80); //drawImagefunction(img, where on y axis, where on x axis, width, height)
                                ctx.restore();
                            }
                        }
                    },
                    false
                );
                
            }

        }
    }
})(Drupal, once, jQuery);

