$(document).ready(function(){
    // $('.carousel__inner').slick( {
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     // slidesToScroll: 1,
    //     // autoplay: true,
    //     // autoplaySpeed: 2000,
    //     prevArrow: `<button type="button" class="slick-prev"><img src='./icons/left-solid.png' alt='solid'></button>`,
    //     nextArrow: `<button type="button" class="slick-next"><img src='./icons/right-solid.png' alt='solid'></button>`
    //  });

     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
          $(item).each( function(i) {
              $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
      }

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
    

      $('[data-modal=consultation]').on('click', function() {
          $(".overlay, #consultation").fadeIn("slow");
      });

      $('.modal__close').on('click', function() {
          $(".overlay, #consultation, #order, #thanks").fadeOut('slow');
      });

      $('.button_mini').each(function(i){
          $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $(".overlay, #order").fadeIn("slow");
          })
      })
      function valideForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required:true,
                    minlength: 3
                },
                email:{
                    required: true,
                    email: true
                },
                phone: 'requred',
            },
            messages: {
                name: {
                    required:"Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                },  
                phone:'Please write your phone',                
                email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
                }
            }
        });
        };

        valideForm('#order form');
        valideForm('#consultation form');
        valideForm('#form-consulte');

        new WOW().init();


        $(window).scroll(function() {
            if($(this).scrollTop() > 1600) {
                $('.slickUp').fadeIn();
            } else {
                $('.slickUp').fadeOut();
            }
        })

        $("a[href=#up]").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

});
      //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);

    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none')
        dots.forEach(item => item.classList.remove('dot-active'))
        slides[slideIndex - 1].style.display = 'block'
        dots[slideIndex - 1].classList.add('dot-active')
    }

    function plusSlide(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }
    
    prev.addEventListener('click', function() {
        plusSlide(-1)
    })
    next.addEventListener('click', function() {
        plusSlide(1)
    })
    dotsWrap.addEventListener('click', function(event) {
        for(let i = 1; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    })

