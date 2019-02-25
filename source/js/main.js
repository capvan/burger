//Гамбургер меню

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


//Горизонтальный слайдер
let teamAccoJS = () => {
    //выборка всех ссылок
    let oTeamLink = document.querySelectorAll(".team-accordion__link");
    //переборка выбраанных ссылок методом forEach
    oTeamLink.forEach(function(personName) {

        //Добавление обработчика событий на каждую ссылку
        personName.addEventListener("click", function(e) {
            e.preventDefault();
            //при каждом клике переменная заново создается
            //В переменную записана выборка team-accordion__item is_active. При первом клике будет undefined, нет активных классов
            let activePerson = document.querySelector(".team-accordion__item.is_active");

            if (activePerson){
                let teamAccordeonDetails = activePerson.querySelector(".team-accordion__details")

                teamAccordeonDetails.style.height = "0px";
                activePerson.classList.remove("is_active");
            }
//Если в activePerson undefined(false). Отрицание = кликов нет, выполнится код
            if(!activePerson || activePerson.querySelector(".team-accordion__link") != e.target){
                //Находим e.target и добавляем активный класс
                let currentPerson = e.target.closest(".team-accordion__item");
                currentPerson.classList.add("is_active");

                let currentPersonInfo = currentPerson.querySelector(".team-accordion__details");
                currentPersonInfo.style.height = currentPersonInfo.scrollHeight + "px";
            }

        })
    })
    
};
 teamAccoJS();

