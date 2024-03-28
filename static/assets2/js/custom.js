(function($) {
    "use strict";
    /*=================== Scroll To Next Section ===================*/
    $(".scroll-next-sec").on('click', function() {
        var cls = $(this).closest("section").next().offset().top;
        $("html, body").animate({
            scrollTop: cls
        }, 1000, 'swing');
    });

    /*=================== Lightbox ===================*/
    $('a[data-rel^=lightbox-popup]').lightcase({
        swipe: true
    });

    /*=================== counterUp ===================*/
    $('.counter-count').counterUp({
        delay: 10,
        time: 1300
    });

    /*=================== Form Validation ===================*/
    if ($('.contact-form[name="contactform"]').length > 0) {
        var frmvalidator = new Validator("contactform");
        frmvalidator.addValidation("name", "req", "Please provide your name");
        frmvalidator.addValidation("email", "req", "Please provide your email");
        frmvalidator.addValidation("email", "email", "Please enter a valid email address");
    }

    /*=================== Parallax ===================*/
    $('.jarallax').jarallax({
        speed: 0.1,
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/
    });

    /*=================== Animated wave ===================*/
    $('#animated-wave-one').wavify({
        height: 20,
        bones: 4,
        amplitude: 70,
        color: "rgba(255, 255, 255, 0.06)",
        speed: .15
    });

    $('#animated-wave-two').wavify({
        height: 30,
        bones: 4,
        amplitude: 100,
        color: 'rgba(255, 255, 255, 0.06)',
        speed: .2
    });

    $('#animated-wave-three').wavify({
        height: 40,
        bones: 5,
        amplitude: 70,
        color: "rgba(188, 214, 234, 0.14)",
        speed: .2
    });

    $('#animated-wave-four').wavify({
        height: 60,
        bones: 4,
        amplitude: 90,
        color: 'rgba(188, 214, 234, 0.14)',
        speed: .25
    });

    /*=================== On scroll animation ===================*/
    if ($(window).width() > 767) {
        new WOW().init({
            mobile: false,
            easing: "in-quintic",
        });
    }

    /*=================== Scroll Top ===================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 900) {
            $('.scroll-top').fadeIn(600);
        } else {
            $('.scroll-top').fadeOut(600);
        }
    });
    $('.scroll-top').on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    /*=================== Search Form ===================*/
    $(".nav-search").on('click', function(e) {
        $('.main-search-area').addClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $(".icon_close").on('click', function(e) {
        $('.main-search-area').removeClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    /*=================== One Page Scrolling ===================*/
    $(document).on('click', '.navbar-nav a.nav-link-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        $('.navbar-collapse').collapse('hide');
    });

    /*=================== Dropwon Menu ===================*/
    $("#mobile-menu a.dropdown-toggle").off('click');
    $("#mobile-menu a.dropdown-toggle").on('click', function(e) {
        event.preventDefault();
        event.stopPropagation();
        $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().slideToggle().toggleClass("show");
        $(this).closest("li.dropdown").first().toggleClass("show");
        return false;
    });


    /*=================== Sticky Menu ===================*/
    if ($('header.header').length > 0) {
        var myNavBar = {

            flagAdd: true,

            elements: [],

            init: function(elements) {
                this.elements = elements;
            },

            add: function() {
                if (this.flagAdd) {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className += " sticky-nav";
                    }
                    this.flagAdd = false;
                }
            },

            remove: function() {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace(/(?:^|\s)sticky-nav(?!\S)/g, '');
                }
                this.flagAdd = true;
            }

        };
        /**
         * Init the object. Pass the object the array of elements
         * that we want to change when the scroll goes down
         */
        myNavBar.init([
            "main-nav"
        ]);

        /**
         * Function that manage the direction
         * of the scroll
         */
        function offSetManager() {

            var yOffset = 0;
            var currYOffSet = window.pageYOffset;

            if (yOffset < currYOffSet) {
                myNavBar.add();
            } else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }
        }
        /**
         * bind to the document scroll detection
         */
        window.onscroll = function(e) {
            offSetManager();
        }

        /**
         * We have to do a first detectation of offset because the page
         * could be load with scroll down set.
         */
        offSetManager();
    }

    /*=================== Home 2 slider ===================*/
    function home2Slider() {
        var mySwiper = new Swiper('.iconic-main-slider', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            speed: 1500,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.iconic-main-slider .swiper-pagination',
                clickable: true
            }
        })
    }

    /*=================== App ScreenShot slider ===================*/
    function screenshotSlider() {
        var mySwiper = new Swiper('.app-screenshot-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 700,
            autoplay: {
                delay: 2500,
            },
            pagination: {
                el: '.app-screenshot-slider .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                570: {
                    slidesPerView: 1
                },
                767: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                }
            }
        })
    }

    function screenshotSlider2() {
        var mySwiper = new Swiper('.app-screenshot-slider-2', {
            slidesPerView: 3.2,
            centeredSlides: true,
            loop: true,
            effect: 'coverflow',
            spaceBetween: 0,
            speed: 700,
            grabCursor: true,
            autoplay: {
                delay: 2500,
            },
            pagination: {
                el: '.app-screenshot-slider-2 .swiper-pagination',
                clickable: true
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 71,
                depth: 160,
                modifier: 1,
                slideShadows: false
            },
            breakpoints: {
                1199: {
                    coverflowEffect: {
                        stretch: 57
                    }
                },
                992: {
                    coverflowEffect: {
                        stretch: 50
                    }
                },
                768: {
                    coverflowEffect: {
                        stretch: 36
                    }
                },
                575: {
                    slidesPerView: 2.5,
                    coverflowEffect: {
                        stretch: 18
                    }
                },
                370: {
                    slidesPerView: 2.5,
                    coverflowEffect: {
                        stretch: 10
                    }
                }
            }
        })
    }

    function screenshotSlider3() {
        var mySwiper = new Swiper('.app-screenshot-slider-3', {
            slidesPerView: 5,
            centeredSlides: true,
            loop: true,
            spaceBetween: 38,
            speed: 700,
            autoplay: {
                delay: 2500,
            },
            pagination: {
                el: '.app-screenshot-slider-3 .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4
                },
                992: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 20
                }
            }
        })
    }


    /*=================== Testimonial slider ===================*/
    function testimonialSlider() {
        var mySwiper = new Swiper('.testimonial-slider', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.testimonial-slider .swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
            },
            breakpoints: {
                767: {
                    slidesPerView: 1
                },
                992: {
                    slidesPerView: 2
                }
            }
        })
    }

    function testimonialSlider2() {
        var mySwiper = new Swiper('.testimonial-one-item-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.testimonial-one-item-slider .swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
            }
        })
    }

    function testimonialSlider3() {
        var mySwiper = new Swiper('.testimonial-slider-2-item', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 50,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.testimonial-slider-2-item .swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
            },
            breakpoints: {
                767: {
                    slidesPerView: 1
                }
            }
        })
    }

    /*=================== Partners slider ===================*/
    function partnersSlider() {
        var mySwiper = new Swiper('.partners-slider', {
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
            speed: 900,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.partners-slider .swiper-pagination',
                clickable: true
            },
            breakpoints: {
                570: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                767: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                }
            }
        })
    }

    /*=================== Partners slider ===================*/
    function particles() {
        if ($('#particles').length > 0) {
            particlesJS("particles", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 1443.0708547789707
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 212,
                        "color": "#ffffff",
                        "opacity": 0.30464829156444934,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 8.017060304327615,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 641.3648243462092,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }

    home2Slider();
    screenshotSlider();
    screenshotSlider2();
    screenshotSlider3();
    testimonialSlider();
    testimonialSlider2();
    testimonialSlider3();
    partnersSlider();
    particles();


})($);