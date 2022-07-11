// RESPONDING TO CLICK ON MOBILE MENU ICON
///// Most changes are applied through CSS styling
$("#toggler").change(() => {
    $("body").toggleClass("no-scroll");

    if ($("#toggler").prop("checked")) {
        $(".header__nav-icon").prop("src", "images/icon-close.svg");
    }
    else {
        $(".header__nav-icon").prop("src", "images/icon-hamburger.svg");
    }
})


// INITIALIZING THE SWIPERJS SLIDER

var mySwiper = new Swiper(".swiper-container", {
    init: true,
    slidesPerView: slides(),
    spaceBetween: 30,
    freeMode: setFreeMode(),
    observer: true,

    // Adding pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    // Adding scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true
    },
});

$(window).resize(function() {
    mySwiper.params.slidesPerView = slides();
    mySwiper.params.freeMode = setFreeMode();
})


// Setting the number of slides per view according to screen width
function slides() {
    if ($(window).width() > 1050) {
        return 2.5;
    }
    else {
        return 1;
    }
}

// Setting the slide to free mode on desktop
function setFreeMode() {
    if ($(window).width() > 1050) {
        return true;
    }
    else {
        return false;
    }
}


// VALIDATING EMAIL ADDRESS
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

$(".footer__form").on("submit", function (event) {
    event.preventDefault();
    let email = $(".footer__input").val();

    if (validateEmail(email)) {
        $(this).removeClass("error");
        $(".footer__input").val("");
        $(this).addClass("success");
    }
    else {
        $(this).removeClass("success");
        $(this).addClass("error");
    }
})
