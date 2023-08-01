/*===== toggle icon navbar =====*/
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===== scroll section active link =====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    /*===== sticky navbar =====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===== remove toggle icon and navbar when click navbar link (scroll) =====*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');
};