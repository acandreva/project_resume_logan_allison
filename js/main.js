$(document).ready( function () {

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