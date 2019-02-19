let menu = (function (options) {
    // let menu = document.querySelector('#overlayNav');
    let body = document.querySelector('body');
    // let button = document.querySelector('#toggle');
    let button = document.querySelector(options.button);
    let menu = document.querySelector(options.menu);
    let list = document.querySelector(options.list);

    console.log(list);
    let toggleMenu = function(e) {
        e.preventDefault();
        button.classList.toggle('hamburger-menu--active');
        menu.classList.toggle('overlay-menu--open');
        body.classList.toggle('body-active-menu');
    }    
    let addListeners = function() {
        button.addEventListener('click', toggleMenu);
    }

    // for(let i=0; i<list.length; i++){
    //     list[i].addEventListener('click', toggleMenu);
    // }

    list.addEventListener('click', function(e){
        let target = e.target;
        // console.log(target);
        if (target.className == "overlay-menu__link"){
            toggleMenu(e);
        }
    });

    return {openMenu: addListeners};
}) ({
    button: '#toggle',
    menu: '#overlayNav',
    list: '.overlay-menu__list'
});

menu.openMenu();