window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
 // Модальные окна

 let overlay = document.querySelector('.overlay'),
 close = document.querySelector('.modal__close');
 


document.body.addEventListener('click', function(event) {
 let targetBtn = event.target;
 if(targetBtn && (targetBtn.classList.contains('subheader_btn') || targetBtn.classList.contains('promo_btn'))) {
    overlay.style.display = 'block';
    document.body.overflow = 'hidden';
 }
})

close.addEventListener('click', function() {
 overlay.style.display = 'none';
 document.body.overflow = '';
})


})