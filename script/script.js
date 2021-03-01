let navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;
window.onscroll = function() {
    if(window.pageYOffset > sticky) {
        navbar.classList.add('fixed-top');
        navbar.classList.add('sticky-navbar');
    } else {
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('sticky-navbar');

    }
};
