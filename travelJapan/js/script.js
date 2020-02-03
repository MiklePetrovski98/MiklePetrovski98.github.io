(function () {
    let header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 70) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

(function () {
    const burgerItem = document.getElementsByClassName('burger')[0];
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })
}());