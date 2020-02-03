window.addEventListener('DOMContentLoaded', function() {


    let tab = document.querySelectorAll('.entertainment__tab'),
        infoHeader = document.querySelector('.entertainment__tabs'),
        tabContent = document.querySelectorAll('.entertainment__tabcontent');


    // написание табов на странице
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } 
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function(event) {
        let target = event.target;

        if(target && target.classList.contains('entertainment__tab')) {                                                         
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);                                                                                                                            
                    break;
                }
            }
        }
    })




    //Timer
    let deadline = '2019-12-20';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor(t/1000/60/60);
                
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
           
        }
    }


    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
           
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if(num <= 9) {
                    return "0" + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
               
            }

        } 
    }
    setClock("timer", deadline)



    
    //slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider__dots'),
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



   //calc
   let persons = document.querySelectorAll('.counter__block-input')[0],
   restDays = document.querySelectorAll('.counter__block-input')[1],
   place = document.getElementById('select'),
   totalValue = document.getElementById('total'),
   personsSum = 0,
   daysSum = 0,
   total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    }); 



    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

   
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    document.body.addEventListener('submit', function(event) {
        event.preventDefault();
        let form = event.target;
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        let input = form.getElementsByTagName('input');

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });



    //модальное окно
    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        

    
    document.body.addEventListener('click', function(event) {
        let targetBtn = event.target;
        if(targetBtn && (targetBtn.classList.contains('button_more') || targetBtn.classList.contains('button_descr'))) {
            overlay.style.display = 'block';
            document.body.overflow = 'hidden';
        }
    })

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.overflow = '';
    })
    

})