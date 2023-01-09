$(function (){
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        margin:20,
        dots: true,
        responsive:{
            0:{
                items:1,
                margin: 30
            },
            600:{
                items:2
            }
        }
    })
})


if($('.owl-main').length) {
    var newOwl = $('.owl-main');
    newOwl.owlCarousel({
        loop:true,
        margin:20,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
    }})
}

$('#navToggle').click(function() {
    $(this).toggleClass('active');
});

