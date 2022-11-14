$(document).ready(function(){

    // Slick -> Banner
    $('.wc-banner section').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        autoplay:               true,
        autoplaySpeed:          5000,
        fade:                   true,
        dots:                   true,
        prevArrow:              '<button class="arrow arrow-prev"><i class="fa-thin fa-chevron-left"></i></button>',
        nextArrow:              '<button class="arrow arrow-next"><i class="fa-thin fa-chevron-right"></i></button>',
        responsive: [
            { breakpoint: 800, settings: { arrows: false } },
        ]
    })
	
    // Slick -> Table
    $('.table-cont .cont section aside .round').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        prevArrow:              '<button class="arrow arrow-prev"><i class="fa-light fa-chevron-left"></i></button>',
        nextArrow:              '<button class="arrow arrow-next"><i class="fa-light fa-chevron-right"></i></button>',
    })

    // Slick -> Group
    $('.wc-group section').slick({
        slidesToShow:           4,
        slidesToScroll:         4,
        dots:                   true,
        prevArrow:              '<button class="arrow arrow-prev"><i class="fa-thin fa-chevron-left"></i></button>',
        nextArrow:              '<button class="arrow arrow-next"><i class="fa-thin fa-chevron-right"></i></button>',
        responsive: [
            { breakpoint: 1000, settings: { dots: true, slidesToShow: 3, slidesToScroll: 3, } },
            { breakpoint: 800, settings: { dots: false, slidesToShow: 2, slidesToScroll: 2, } },
            { breakpoint: 650, settings: { dots: false, slidesToShow: 1, slidesToScroll: 1, } },
        ]
    })

    // Slick -> More
    $('.wc-more .features section').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        dots:                   true,
        arrows:                 false,
        autoplay:               true,
        autoplaySpeed:          5000,
        prevArrow:              '<button class="arrow arrow-prev"><i class="fa-thin fa-chevron-left"></i></button>',
        nextArrow:              '<button class="arrow arrow-next"><i class="fa-thin fa-chevron-right"></i></button>',
    })

});