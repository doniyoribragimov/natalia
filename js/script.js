jQuery(document).ready(function ($) {
    // ДЛЯ ОТКРЫТИЯ МОДАЛКИ
    function openModalOrMenu(trigger, targetSelector) {
        $(trigger).addClass('active');
        $('body').css('overflow-y', 'hidden');
        $(targetSelector).on('click', function (e) {
            if (e.target === this) {
                $(this).removeClass('active');
                $('body').css('overflow-y', 'initial');
            }
        });
    }

    // ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ
    function closeModalOrMenu(trigger) {
        $(trigger).removeClass('active');
        $('body').css('overflow-y', 'initial');
    }

    // ДЛЯ ВЫБОРА HREF ДЛЯ МОДАЛКИ
    $('a.getModal').on('click', function (e) {
        e.preventDefault();
        let triggerHref = $(this).attr('href');
        openModalOrMenu(triggerHref, triggerHref);
    });

    // ДЛЯ ЗАКРЫТИЯ МОДАЛКИ
    $('.modal__close').on('click', function () {
        closeModalOrMenu($(this).parents('.modal'));
    });

    // ДЛЯ ЗАКРЫТИЯ МОБИЛЬНОГО МЕНЮ
    $('.mobile-menu__close, .mobile-menu, .mobile-menu a').on('click', function () {
        closeModalOrMenu($(this).parents('.mobile-menu'));
    });

    // ФУНКЦИЯ ДЛЯ ТАБОВ, ЧТОБЫ ПОКАЗАТЬ ВСЕ ТАБЫ
    let accordionCheck = window.matchMedia("(max-width: 620px)");
    checkMedia(accordionCheck);
    accordionCheck.addListener(checkMedia);

    function checkMedia(accordionCheck) {
        if (accordionCheck.matches) {
            $('.service__item .text').slideUp()
            
        } else {
            $('.service__item .text').slideDown()
        }
    }
   
    checkMedia(accordionCheck);
    $('.service__head').on('click', function(){
        $(this).siblings('.text').slideToggle();
        $(this).parent().toggleClass('active')
    })

    // СЛАЙДЕР ДЛЯ БЕСКОНЕЧНОГО СКРОЛЛИНГА
    $('.info__slider').slick({
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

    $('.seen__slider').slick({
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

    $('.example__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: $('.example__wrapper .arrow__left'),
        nextArrow: $('.example__wrapper .arrow__right'),
        responsive: [
            {
              breakpoint: 620,
              settings: 'unslick',
              arrows: false
            }
          ]
    });

});

// МАСКА ДЛЯ ТЕЛЕФОНА В input[type='tel']
let maskedPhones = document.querySelectorAll("input[type='tel']");
for (var i = 0; i < maskedPhones.length; i++) {
    new IMask(maskedPhones[i], {
        mask: '+{7} (000) 000-00-00',
        placeholder: {
            show: 'always'
        }
    });
}


// ДЛЯ ЗАКРЫТИЯ МОДАЛКИ, КОГДА ПРОКЛИКАНО ЗА ПРЕДЕЛЫ МОДАЛКИ - УНИВЕРСАЛЬНЫЙ
let body = document.querySelector('body')
function closeModal(modalName, reverse = false) {
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function (e) {
        if (reverse) {
            if (e.target === modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        } else {
            if (e.target !== modalName) {
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }

    })
}
closeModal('.modal', true)
closeModal('.mobile-menu', true)

// ДЛЯ ОТОБРАЖЕНИЯ КАРТЫ
function init() {
    let myMap = new ymaps.Map('map', {
        center: [25.792235, -80.250852],
        zoom: 14,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });
    myplacemark = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [25.792235, -80.250852]
        },
        properties: {
            hintContent: 'Майами, округ Майами-Дейд, штат Флорида'
        }
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');
    myMap.controls.add('rulerControl', {
        scaleLine: false
    });
    myMap.geoObjects.add(myplacemark);
}
let maps = document.querySelectorAll("#map");
if (maps.length > 0) {
    ymaps.ready(init);
}

// SWIPER слайдеры
const photosSlider = new Swiper('.name__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
        prevEl: ".name__slider .arrow__left",
        nextEl: ".name__slider .arrow__right",
    },
    pagination: {
        el: '.name__slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        1400: {
            slidesPerView: 3,
        },
    }
});

const videosSlider = new Swiper('.videos__slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    navigation: {
        prevEl: ".videos .arrow__left",
        nextEl: ".videos .arrow__right",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        620: {
            spaceBetween: 20,
            slidesPerView: 1,
        },

        1200: {
            slidesPerView: 2,
        },
    }
});


const projectsSlider = new Swiper('#projectsSlider', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        reverseDirection: true,
    }, 
    speed: 800,
    autoHeight: true,
});

const designSlider = new Swiper('#designSlider', {
    loop: true,
    slidesPerView: 1,
    autoplay: true, 
    speed: 800,
    autoHeight: true,
    rtl: true
});

const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        prevEl: ".reviews .arrow__left",
        nextEl: ".reviews .arrow__right",
    },
});


