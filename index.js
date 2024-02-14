// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


let colorsMenu = document.getElementsByClassName("setOfColors");
let gear = document.getElementsByClassName("gear-icon");
let hidden = false;
function hideAndDisplay(){
    if (hidden === false) {
        colorsMenu[0].style.display = "flex";
        hidden = true;
        gear[0].style.right = "115px";
    }
    else {
        colorsMenu[0].style.display = "none";
        gear[0].style.right = "0";
        hidden = false;
    }
}

function chosenColor(){
    let newColor = this.style.color;
    document.documentElement.style.setProperty("--main-color", newColor);
}


    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1300,
            disableOnInteraction: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPreView: 4,

    });
mySwiper;
