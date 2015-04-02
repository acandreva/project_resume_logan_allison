$(document).ready( function () {

/*
    var container = $( '#skill_tags' );

    container.isotope({ filter: '.web' });
    container.isotope({ filter: '.design' });

/*
    $('#web_btn').click( function() {
        $('.design, .editing, .misc_skills, #design_btn, #editing_btn, #misc_btn').toggleClass('hide');
    })//show/hide web skills

    $('#design_btn').click( function() {
        $('.web, .editing, .misc_skills, #web_btn, #editing_btn, #misc_btn').toggleClass('hide');
    })//show/hide design skills

    $('#editing_btn').click( function() {
        $('.web, .design, .misc_skills, #design_btn, #web_btn, #misc_btn').toggleClass('hide');
    })//show/hide editing skills

    $('#misc_btn').click( function() {
        $('.web, .design, .editing, #design_btn, #editing_btn, #web_btn').toggleClass('hide');
    })//show/hide miscellaneous skills
*/

//Footnotes
/*
    var bigfoot = $.bigfoot(
        {
            activeOnUnhover: true,
            deleteOnUnhover: true,
            preventPageScroll: false,
            hoverDelay: 250
        }
    );

    $.bigfoot();*/

//MixitUp Filtering

    $(function(){
    
        // Instantiate MixItUp:
    
        $('#skills_tags').mixItUp();
    
    });

//Slow scroll

    $(function() {
        $('nav a, #topbutton a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
            }, 1000);

            event.preventDefault();
        });
    });


});