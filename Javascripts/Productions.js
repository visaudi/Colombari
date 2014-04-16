


$(function() {
    var sizeNumber = 10;

    $.backstretch("Images/CrawlingPath.JPG");

    $(window).scroll(function() {
        if (sizeNumber < 40) {
        sizeNumber += .2;
            $('.tagline').css("font-size", sizeNumber);
        } else {

        sizeNumber = sizeNumber * .4;
            $('.tagline').css("font-size", sizeNumber);
        }

    });
});
