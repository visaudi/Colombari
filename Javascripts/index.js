$(function() {

    $('.title').fitText(5.3);


    $.backstretch(
        ["Images/AngelicProcession.JPG",
        "Images/PathAngel.JPG",
        "Images/TWIRIRIRCircle.JPG",
        "Images/MRMOLIA.jpg",
        "Images/Samaritano.JPG",
        "Images/Lamb.JPG",
        "Images/GiuliaWall.JPG",
        "Images/YesBlack.JPG",
        "Images/MOLIABand.JPG",
        "Images/TrazanaBlack.JPG",
        "Images/PrincessRose.JPG",
        "Images/Dietrice.JPG"],
        {duration: 4000, fade: 3500});

    $('.tagline').marquee({
        duration: 10000,
        gap: 2000,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});
