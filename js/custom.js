$(document).ready(function(){
    $('#header_section').sticky({
        topSpacing:0
    });

    

    /*
    $('#header_section').sticky({topSpacing:0});
    */
    /*
    var owl = $('.owl-carousel');
    */

    $('.owlCarouselOne').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    })

    $('.owlCarouselTwo').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('.owlCarouselImg').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('.slickOne').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1
    });

});
/* slick 
$(document).ready(function(){
    $('.slickOne').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
    });
});

*/