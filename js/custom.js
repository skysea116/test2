

    
    $(window).load(function() {
    
$(document).ready(function () {

        $('.num1').viewportChecker({
            offset: 100,
            callbackFunction: function () {
                $('#num1').animateNumber({number: $('#num1').data('num')}, 1500);
            }
        });
        $('.num2').viewportChecker({
            offset: 100,
            callbackFunction: function () {
                $('#num2').animateNumber({number: $('#num2').data('num')}, 1500);
            }
        });
        $('.num3').viewportChecker({
            offset: 100,
            callbackFunction: function () {
                $('#num3').animateNumber({number: $('#num3').data('num')}, 1500);
            }
        });
        $('.num4').viewportChecker({
            offset: 100,
            callbackFunction: function () {
                $('#num4').animateNumber({number: $('#num4').data('num')}, 1500);
            }
        });
        $('.nav_menu .menu').slicknav({
            label: '',
            prependTo: '.nav_menu',
            closeOnClick: true
        });
        $('.sticky_nav').singlePageNav({
            offset: 30,
            speed: 600
        });
        $('.sticky_nav').sticky({topSpacing: 0});
        $('[name=square]').bind("change keyup input click", function () {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        setTimeout(function () {
            if ($('.mashine-wrapper').length > 0) {
                h = $(window).height();// высота экрана
                h1 = $(".mashine-inner").offset();// начало блока Учебные центры
                dh = h1.top - h; //величина прокрутки до начала движ
                if (dh < 0) dh = 0;
                dh1 = h1.top;
                ddh = 633; // высота блока где катается тачка
                end_g = $("#axis").offset(); //конец горизонт
                end_g = end_g.top - 300;
                end_g1 = end_g + 50; // пх на поворот
                move1 = end_g - dh; //горизонт. расстояние по высоте
                g_dvij = 930; //горизонт. расстояние движения
                car_move();
                window.onscroll = function () {
                    car_move();
                }
                window.addEventListener("orientationchange", function () {
                    h = $(window).height();// высота экрана
                    h1 = $(".mashine-inner").offset();// начало блока Учебные центры
                    dh = h1.top - h; //величина прокрутки до начала движ
                    if (dh < 0) dh = 0;
                    dh1 = h1.top;
                    ddh = 633; // высота блока где катается тачка
                    end_g = $("#axis").offset(); //конец горизонт
                    end_g = end_g.top - 300;
                    end_g1 = end_g + 50; // пх на поворот
                    move1 = end_g - dh; //горизонт. расстояние по высоте
                    g_dvij = 930; //горизонт. расстояние движения
                    car_move();
                    window.onscroll = function () {
                        car_move();
                    }
                }, false);
                window.addEventListener("resize", function () {
                    h = $(window).height();// высота экрана
                    h1 = $(".mashine-inner").offset();// начало блока Учебные центры
                    dh = h1.top - h; //величина прокрутки до начала движ
                    if (dh < 0) dh = 0;
                    dh1 = h1.top;
                    ddh = 633; // высота блока где катается тачка
                    end_g = $("#axis").offset(); //конец горизонт
                    end_g = end_g.top - 300;
                    end_g1 = end_g + 50; // пх на поворот
                    move1 = end_g - dh; //горизонт. расстояние по высоте
                    g_dvij = 930; //горизонт. расстояние движения
                    car_move();
                    window.onscroll = function () {
                        car_move();
                    }
                }, false);
            }
            var tempScrollTop, currentScrollTop = 0;
            $(window).scroll(function () {
                currentScrollTop = $(window).scrollTop();
                if (tempScrollTop < currentScrollTop) {
                    $('.mashine-wrapper .object').removeClass('revers');
                } else if (tempScrollTop > currentScrollTop) {
                    $('.mashine-wrapper .object').addClass('revers');
                }
                tempScrollTop = currentScrollTop;
            });
        }, 3000);
        $(window).scroll(function () {
            if ($(this).scrollTop() > $('.site_header').height()) {
                $('.side_btn').addClass('active');
                //console.log($(this).scrollTop());
            } else {
                $('.side_btn').removeClass('active');
            }
        });
        
});

    $('.portfolio_grid').masonry({
        columnWidth: '.grid_sizer',
        gutter: '.gutter_sizer',
        itemSelector: '.grid_item',
        percentPosition: true
    });
    var slider_owl = $('.site_header_slider');
    slider_owl.owlCarousel({
        autoHeight: true,
        items: 1,
        center: true,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: false,
        navText: [,]
    });
    slider_owl.on('translate.owl.carousel', function (e) {
        $('.owl-item video').each(function () {
            $(this).get(0).pause();
        });
    });
    slider_owl.on('translated.owl.carousel', function (e) {
        
            $('.owl-item.active video').get(0).play();
        
    })
    $('.clients_list').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: 1000,
        autoHeight: true,
        items: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: [,],
        responsive: {
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $('.testimonials_list').owlCarousel({
        autoHeight: true,
        items: 1,
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        navText: [,]
    });

var map;
var markers = [];
var features = [
    {
        position: {lat: 52.18728963406938, lng: 20.950442413912008},
        position2: {lat: 47.237321, lng: 39.625298},//52.18699071409546, 20.945842081202603
        center: {lat: 52.18699071409546, lng: 20.945842081202603},//center:{lat: 47.237604,lng: 39.605496},//52.18728963406938, 20.950442413912008
        title: '<b>Автосервис Варшава</b><br>г. Варшава, ул. Krakowiaków 18a, 02-255',
        title2: '<b>Автосервис Варшава</b><br>г. Варшава, ул. Krakowiaków 18a, 02-255'
    }];

function initMap() {
    map = new google.maps.Map(document.getElementById('google_map'), {
        zoom: 15,
        center: features[0].center,
        scrollwheel: false,
        fullscreenControl: false
    });

    function addMarker(location, info) {
        var marker = new google.maps.Marker({
            position: location,
            icon: 'img/pin.png',
            map: map
        });
        var marker2 = new google.maps.Marker({
            position2: location,
            icon: 'img/pin.png',
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: info
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker2);
        });
        markers.push(marker);
    }

    addMarker(features[0].position, features[0].title);
    if ($(window).width() < 768) {
        map.setCenter(features[0].position);
    }
    // $(window).resize(function () {
    //     if ($(window).width() < 768) {
    //         map.setCenter(features[0].position);
    //     } else {
    //         map.setCenter(features[0].center);
    //     }
    // });
    //addMarker(features[0].position2, features[0].title2);
    // if ($(window).width() < 768) {
    //     map.setCenter(features[0].position2);
    // }
    // $(window).resize(function () {
    //     if ($(window).width() < 768) {
    //         map.setCenter(features[0].position2);
    //     } else {
    //         map.setCenter(features[0].center);
    //     }
    // });
}

$(function () {
    $.scrollUp({
        scrollDistance: 400,// Distance from top/bottom before showing element(px)
        scrollFrom: 'top',
        scrollSpeed: 600,// Speed back to top(ms)
        easingType: 'easeOutCubic',// Scroll to top easing(see http://easings.net/)
        animationSpeed: 200,// Animation in speed(ms)
        scrollText: '',
        scrollTitle: 'Наверх',// Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        zIndex: 1400// Z-Index for the overlay
    });
});
$(function () {
    $('.note input:checkbox').each(function (indx) {
        if (!($(this).prop('checked'))) {
            $(this).parents('.form_wrp').find(':submit').prop('disabled', true);
        } else {
            $(this).parents('.form_wrp').find(':submit').prop('disabled', false);
        }
    });
    $('.note input:checkbox').change(function () {
        if (!($(this).prop('checked'))) {
            $(this).parents('.form_wrp').find(':submit').prop('disabled', true);
        } else {
            $(this).parents('.form_wrp').find(':submit').prop('disabled', false);
        }
    });
});
$('.section_portfolio .see_more').on('click', function () {
    if (!($(this).hasClass('open'))) {
        $('.portfolio_grid_more').height('auto').css('overflow', 'visible');
        $(this).html('Скрыть работы').addClass('open');
    } else {
        $('.portfolio_grid_more').height('0').css('overflow', 'hidden');
        $(this).html('Посмотреть еще работы').removeClass('open');
    }
});

function car_move() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop; // высота при прокрутке
    scrolled = scrolled;
    if (scrolled <= dh) {
        $(".move-right").css({
            "-webkit-transform": "none",
            "-moz-transform": "none",
            "-o-transform": "none",
            "-ms-transform": "none",
            "transform": "none",
            "left": "100",
            "top": "0"
        });
    }
    if (scrolled >= dh && scrolled <= end_g) {
        $(".move-right").css("transform", "none");
        g = scrolled - dh; //где мы находимся по y
        i = (g * 100) / move1; // сколько мы прошли
        i = (g_dvij * i) / 100;
        $(".move-right").css({"left": i + 100 + "px", "top": "0"});
    }
    if (scrolled > end_g && scrolled <= end_g1) {
        g = scrolled - end_g; //где мы находимся по y
        i = (g * 100) / 50; // сколько мы прошли
        i = (90 * i) / 100;
        $(".move-right").css({
            "-webkit-transform": "rotate(" + i + "deg)",
            "-moz-transform": "rotate(" + i + "deg)",
            "-o-transform": "rotate(" + i + "deg)",
            "-ms-transform": "rotate(" + i + "deg)",
            "transform": "rotate(" + i + "deg)",
            "left": g_dvij + 100 + "px",
            "top": "0"
        });
    }
    if (scrolled > end_g1 && scrolled <= end_g1 + 300) {
        $(".move-right").css({
            "-webkit-transform": "rotate(90deg)",
            "-moz-transform": "rotate(90deg)",
            "-o-transform": "rotate(90deg)",
            "-ms-transform": "rotate(90deg)",
            "transform": "rotate(90deg)",
            "left": g_dvij + 100 + "px"
        });
        g = scrolled - end_g1; //где мы находимся по y
        i = (g * 100) / 300; // сколько мы прошли
        i = (ddh * i) / 100;
        $(".move-right").css("top", i + "px");
    }
    if (scrolled > end_g1 + 300 && scrolled <= end_g1 + 350) {
        g = scrolled - end_g1 - 300; //где мы находимся по y
        i = (g * 100) / 50; // сколько мы прошли
        i = 90 + (90 * i) / 100;
        $(".move-right").css({
            "-webkit-transform": "rotate(" + i + "deg)",
            "-moz-transform": "rotate(" + i + "deg)",
            "-o-transform": "rotate(" + i + "deg)",
            "-ms-transform": "rotate(" + i + "deg)",
            "transform": "rotate(" + i + "deg)",
            "left": g_dvij + 100 + "px",
            "top": ddh + "px"
        });
    }
    if (scrolled > end_g1 + 350 && scrolled <= end_g1 + 900) {
        g = scrolled - end_g1 - 350; //где мы находимся по y
        i = (g * 200) / 300; // сколько мы прошли
        i = (250 * i) / 100;
        $(".move-right").css({
            "-webkit-transform": "rotate(-180deg)",
            "-moz-transform": "rotate(-180deg)",
            "-o-transform": "rotate(-180deg)",
            "-ms-transform": "rotate(-180deg)",
            "transform": "rotate(-180deg)",
            "left": (g_dvij + 100 - i) + "px",
            "top": ddh + "px"
        });
    }
}
});
