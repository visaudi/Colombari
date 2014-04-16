
$(function() {

    $.backstretch("Images/Pointing.JPG");

    $('.Generating').animate({
        bottom: 100,
        left: -80
    }, 2000, function() {

        $('.Spectacle').animate({
            bottom: 100,
            left: -60
        }, 1000, function() {

            $('.Wherever').animate({
                bottom: 100,
                left: -40
            }, 1000, function() {


                $('.We').animate({
                    bottom: 100,
                    left: -20 
                }, 1000, function() {


                    $('.Go').animate({
                        bottom: 100,
                        left: 0
                    }, 1000, function() {

                        $('.tagline').fadeTo(1000, .8);
                    });
                });



            });
        });
    });
}); 
