
$(function() {

    $.backstretch("Images/DarkDPK.JPG");

    $('.shake').hover(function() {
        $( this )
            .fadeToggle(3000);
    });

    $('.rattle').hover(function() {
        $( this )
            .slideToggle(3000);
    });
});
