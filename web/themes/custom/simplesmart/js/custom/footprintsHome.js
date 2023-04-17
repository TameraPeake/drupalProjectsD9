(function (Drupal, once, $) {
    Drupal.behaviors.footprintsHome = {
        attach: function (context, settings) { 

            window.onload = function() {
                let footSteps = 0;
                // var interval = setInterval(grabFootprint, 1000);
            
                var interval = setInterval(function(){

                     // function grabFootprint() {
                        
                    const footprint = new Image();  //this just access the canvas's api
                    footprint.src = "/themes/custom/simplesmart/assets/images/2023/animalPrint.png";
                    const ctx =document.getElementById("myCanvas").getContext("2d", { willReadFrequently: true });
                    footprint.addEventListener(  //adding the event listenter so that the function doesn't start before the image finishes loading
                        "load", 
                        () => {
                            ctx.save();
                            ctx.drawImage(footprint, 400, 400, 80, 80); //drawImagefunction(img, where on y axis, where on x axis, width, height)
                            var imageData = ctx.getImageData(400, 400, 80, 80);
                            
                            if(footSteps % 2 == 0 && footSteps < 5) {
                                let newStep = 300 - footSteps * 70;
                                ctx.putImageData(imageData, 300, newStep);
                                console.log("first step:" + newStep);
                            }

                            if(footSteps % 2 !== 0 && footSteps < 5) {
                                let newStep2 = 350 - footSteps * 90;
                                ctx.putImageData(imageData, 400, newStep2);
                                console.log("second step:" + newStep2);
                                
                            }
                            
                            if(footSteps == 5) {
                                clearInterval(interval);
                            }

                            footSteps += 1;
                        },

                        false
                    );
                    
                }, 1000);

            }

        }
    }
})(Drupal, once, jQuery);

