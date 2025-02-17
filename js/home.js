$(document).ready(function () {
    $('#mode').click(function () {
        $('body').removeClass('black-background')
        $('body').addClass('white-background')
        $('#title').removeClass('white-background')
        $('#title').addClass('black-background')
        $('#flashcard').removeClass('white-background')
        $('#flashcard').addClass('black-background')
        $('#flashcard2').removeClass('white-background')
        $('#flashcard2').addClass('black-background')
        $('#flashcard3').removeClass('white-background')
        $('#flashcard3').addClass('black-background')
        $('#flashcard4').removeClass('white-background')
        $('#flashcard4').addClass('black-background')
        $('#flashcard5').removeClass('white-background')
        $('#flashcard5').addClass('black-background')
        $('#definition1').removeClass('white-background')
        $('#definition1').addClass('black-background')
        $('#definition2').removeClass('white-background')
        $('#definition2').addClass('black-background')
        $('#definition3').removeClass('white-background')
        $('#definition3').addClass('black-background')
        $('#definition4').removeClass('white-background')
        $('#definition4').addClass('black-background')
        $('#definition5').removeClass('white-background')
        $('#definition5').addClass('black-background')
        $('.def').addClass('text-color2')
        $('.icons').removeClass('white-background')
        $('.icons').addClass('black-background')
        $('a').addClass('text-color')
        $('a').removeClass('text-color2')
        $('p').addClass('text-color')
        $('p').removeClass('text-color2')
        // $('.pmode').addClass('text-color2')
        // $('.pmode').removeClass('text-color')
        $('.idl').removeClass('text-color')
        $('.idl').addClass('text-color2')
        $('.flashtext').addClass('text-color')
        $('.flashtext').removeClass('text-color2')
    })
    $('#mode2').click(function () {
        $('body').removeClass('white-background')
        $('body').addClass('black-background')
        $('#title').removeClass('black-background')
        $('#title').addClass('white-background')
        $('#flashcard').removeClass('black-background')
        $('#flashcard').addClass('white-background')
        $('#flashcard2').removeClass('black-background')
        $('#flashcard2').addClass('white-background')
        $('#flashcard3').removeClass('black-background')
        $('#flashcard3').addClass('white-background')
        $('#flashcard4').removeClass('black-background')
        $('#flashcard4').addClass('white-background')
        $('#flashcard5').removeClass('black-background')
        $('#flashcard5').addClass('white-background')
        $('#definition1').removeClass('black-background')
        $('#definition1').addClass('white-background')
        $('#definition2').removeClass('black-background')
        $('#definition2').addClass('white-background')
        $('#definition3').removeClass('black-background')
        $('#definition3').addClass('white-background')
        $('#definition4').removeClass('black-background')
        $('#definition4').addClass('white-background')
        $('#definition5').removeClass('black-background')
        $('#definition5').addClass('white-background')
        $('.icons').removeClass('white-background')
        $('.icons').addClass('black-background')
        $('a').addClass('text-color2')
        $('p').addClass('text-color2')
        // $('.pmode').addClass('text-color')
        // $('.pmode').removeClass('text-color2')
        $('.idl').removeClass('text-color2')
        $('.idl').addClass('text-color')
        $('.flashtext').addClass('text-color2')
        $('.flashtext').removeClass('text-color')

    })




    $('#fa-chevron-right1').click(function () {
        $('#cover').fadeOut()
        $('#flashcard2').fadeIn()
    });
    $('#fa-chevron-right2').click(function () {
        $('#flashcard2').fadeOut()
        $('#flashcard3').fadeIn()
    });
    $('#fa-chevron-right3').click(function () {
        $('#flashcard3').fadeOut()
        $('#flashcard4').fadeIn()
    });
    $('#fa-chevron-right4').click(function () {
        $('#flashcard4').fadeOut()
        $('#flashcard5').fadeIn()
    });
    $('#fa-chevron-right5').click(function () {
        $('#flashcard5').fadeOut()
        $('#cover').fadeIn()
    });



    $('#fa-chevron-left1').click(function () {
        $('#cover').fadeOut()
        $('#flashcard5').fadeIn()
    });
    $('#fa-chevron-left2').click(function () {
        $('#flashcard2').fadeOut()
        $('#cover').fadeIn()
    });
    $('#fa-chevron-left3').click(function () {
        $('#flashcard3').fadeOut()
        $('#flashcard2').fadeIn()
    });
    $('#fa-chevron-left4').click(function () {
        $('#flashcard4').fadeOut()
        $('#flashcard3').fadeIn()
    });
    $('#fa-chevron-left5').click(function () {
        $('#flashcard5').fadeOut()
        $('#flashcard4').fadeIn()
    });








    // $('#fa-chevron-down1').click(function () {
    //     $('#definition1').fadeIn()
    //     $('#flashcard').fadeOut()
    // });
    // $('#fa-chevron-down2').click(function () {
    //     $('#definition2').fadeIn()
    //     $('#flashcard2').fadeOut()
    // });
    // $('#fa-chevron-down3').click(function () {
    //     $('#definition3').fadeIn()
    //     $('#flashcard3').fadeOut()
    // });
    // $('#fa-chevron-down4').click(function () {
    //     $('#definition4').fadeIn()
    //     $('#flashcard4').fadeOut()
    // });
    // $('#fa-chevron-down5').click(function () {
    //     $('#definition5').fadeIn()
    //     $('#flashcard5').fadeOut()
    // });









    // $('#fa-chevron-up1').click(function () {
    //     $('#flashcard').fadeIn()
    //     $('#definition1').fadeOut()
    // });
    // $('#fa-chevron-up2').click(function () {
    //     $('#flashcard2').fadeIn()
    //     $('#definition2').fadeOut()
    // });
    // $('#fa-chevron-up3').click(function () {
    //     $('#flashcard3').fadeIn()
    //     $('#definition3').fadeOut()
    // });
    // $('#fa-chevron-up4').click(function () {
    //     $('#flashcard4').fadeIn()
    //     $('#definition4').fadeOut()
    // });
    // $('#fa-chevron-up5').click(function () {
    //     $('#flashcard5').fadeIn()
    //     $('#definition5').fadeOut()
    // });


});