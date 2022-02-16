document.getElementById('video-player').controls = false

let  pageSlider = new Swiper('.page',{     // присвайвание свайпа+
    //Свои классы
    wrapperClass: "page_wrapper",
    slideClass: "page_screen",

    //Вертикальный слайдер
    direction: 'vertical',

    //Скрыть проигрыватель

    //Количество слайдов для показов
    slidesPerView: 'auto',

    //Вкючаем параллакс
    parallax: true,

    //Управление клавиатурой
    keyboard: {
        //выключить\включить
        enabled: true,
        //выключить\включить
        //только когда слайдер
        //в пределах вьюпорта
        onlyInViewport: true,
        pageUpDown: true,
    },

    //Управление классом мыши
    mousewheel:{
        //чувствительность колеса мыши
        sensitivity: 1,
        //Класс объекта на котором
        //будет срабатывать прокрутка мышью.
        //eventTarget: ".image-slider"
    },

    //отключение функционала
    //если слово меньше чем нужно
    watchOverflow: true,

    //скорость
    speed: 800,

    //обновить свайпер
    //при изменении элементов слайдера
    observer: true,

    observerParents: true,

    //обновить свайпер
    //при изменении дочерних
    //элементов слайда
    observerSliderChildren: true,

    //Навигация
    //Буллеты, текущие положение, пррогрессбор
    pagination:{
        el: '.page_pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page_bullet",
        bulletActiveClass: "page_bullet_active",
    },
    //Скролл
    scrollbar: {
        el: '.page_scroll',
        dragClass: "page_drag-scroll",
        //возможность перетаскивать скролл
        draggable: true
    },

    
})

