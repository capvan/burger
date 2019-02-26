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


//Вертикальный аккордеон
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
//Если в activePerson undefined(false). Отрицание = кликов нет, выполнится код. Если активный класс уже есть на странице
// и он не равен querySelector, activePErson станет true
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


//Горизонтальный аккордеон

let verticalAcco3 = () => {
    
    let calculateWidth = () => {
        //определение ширины экрана
        let windowWidth = window.innerWidth; //ширина всего окна

        let links = document.querySelectorAll(".menu-accordion__link");
        let link = document.querySelector(".menu-accordion__link");
        //parseFloat - превращение значения ширины link в чичло с плавающей точкой
        let linksWidth = parseFloat(getComputedStyle(link).width);

        //вернет тернарный оператор. Если reqWidth - истина, то запишется условие 1 
        let reqWidth = windowWidth - linksWidth * links.length;
        return reqWidth > 550 ? 550 : reqWidth;
    };

    let oTeamLink = document.querySelectorAll(".menu-accordion__link");

        oTeamLink.forEach(function(personName) {
            personName.addEventListener("click", function(e) {
                e.preventDefault();
                let activePerson = document.querySelector(".menu-accordion__item.is_active");

                if(activePerson) {
                    let teamAccordeonDetails = activePerson.querySelector(".menu-accordion__content");
                    teamAccordeonDetails.style.width = "0px";
                    activePerson.classList.remove("is_active");
                }

                if(!activePerson || activePerson.querySelector(".menu-accordion__link") != this) {
                    let currentPerson = this.closest(".menu-accordion__item");

                    currentPerson.classList.add("is_active");
                    let currentPersonInfo = currentPerson.querySelector(".menu-accordion__content");
                    currentPersonInfo.style.width = calculateWidth() + 'px';
                }
            })
        })
        // //Обработчик клика вне аккордеона
        // document.addEventListener("click", e => {
        //     //Запись активной ссыдки
        //     let activePerson = document.querySelector(".menu-accordion__item.is_active");
        //     const target = e.target;
        //     if (!target.closest(".menu-accordion")) {
        //         closeItem(activePerson);
        //     }
        // });
    };
verticalAcco3();
