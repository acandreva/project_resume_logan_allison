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

//Twitter follow button
    window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

//Footnotes

    $.bigfoot();

});