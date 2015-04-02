$(document).ready( function () {

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


//Footnotes

    $.bigfoot();

});