$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav: true,
    navText: ["<i class='owl-prev fa-solid fa-arrow-left'></i>", "<i class='owl-next fa-solid fa-arrow-right'></i>"],
    smartSpeed: 1200,
    autoHeight: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }

    }
});

const toggleButton = document.getElementById('menu');
const navList = document.getElementById('nav-list');

const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    phoneNumber.classList.remove('active');
});

phoneIcon.addEventListener('click', () => {
    phoneNumber.classList.toggle('active');
    navList.classList.remove('active');
});