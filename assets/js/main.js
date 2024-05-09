var swiper = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper1-next",
        prevEl: ".swiper1-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    }
});
var swiper = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper2-next",
        prevEl: ".swiper2-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1300: {
            slidesPerView: 3
        },
    }
});
var swiper = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper3-next",
        prevEl: ".swiper3-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    }
});
$(document).ready(function () {
    $('.loader-wrapper').fadeOut("slow");
})