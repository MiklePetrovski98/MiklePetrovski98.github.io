window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    sub = document.querySelectorAll(".menu_sub"),
    subItem = document.querySelectorAll('.sub__item'),
    menuList  = document.querySelectorAll('.menu_list'),
    hamburger = document.querySelector('.hamburger');
    
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });



    function hideContent(a,list, listI, item, itemI, active, hide) {
        for(let i = a; i < list.length; i++) {
            if(listI == list[i]) {
                continue;
            } else {
                list[i].classList.remove(active);
                list[i].classList.add(hide);
                for(let i = a; i < item.length; i++) {
                    if(item[i] != itemI) {
                        item[i].style.order = 0;

                    }
                }

            }
        }
    } 

    function showContent(list, item, active, hide) {
        if(!list.classList.contains(active)) {
            list.classList.add(active);
            list.classList.remove(hide);
            item.style.order = -1;         
        } else {
            list.classList.remove(active);
            list.classList.add(hide);
            item.style.order = 0;
        }
    }

    function comparisonContent(list,listItem, item, itemI, active, hide) {
        for(let i = 0; i < list.length; i++) {
            if(listItem == list[i]) {
                hideContent(0,list, list[i], item, itemI, active, hide);
                showContent(list[i], itemI, active, hide);                                                                                                                            
                break;
            }
        }
    }

    menu.addEventListener('touchstart', function(event) {
    let target = event.target;

    if(target && (target.classList.contains('fa-chevron-down') && target.classList.contains('list_down')) ) {
        const listItemToggle = target.closest('.sub__item'),
        listDown = listItemToggle.querySelector(".menu_list"),
        active = "menu_list_active",
        hide = "menu_list_hide";
        comparisonContent(menuList,listDown, subItem, listItemToggle, active, hide)

    } else if(target && target.classList.contains('fa-chevron-down')) {
        const menuItemToggle = target.closest('.menu__item'),
        subDown = menuItemToggle.querySelector('.menu_sub'),
        active = "menu_sub_active",
        hide = "menu_sub_hide";
        comparisonContent(sub, subDown, menuItem, menuItemToggle, active, hide)
    }
    });


});