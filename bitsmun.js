let navbar = document.getElementsByClassName('navbar')[0];
let navToggle = document.getElementsByClassName('navbar__toggle')[0];
let loadTrigger = document.getElementsByClassName('load-trigger')[0];
let navMenu = document.getElementsByClassName('navbar__menu')[0];
let navTop = document.getElementsByClassName('navbar__top')[0];
let navItem = document.getElementsByClassName('navbar__menu__item');

navbar.classList.add("hidden");
navToggle.classList.add("stowed");
navMenu.classList.add("stowed");
navTop.classList.add("stowed");

navToggle.addEventListener('click', function(){
    if (navbar.classList.contains("hidden")){
        navbar.classList.remove("hidden");
        navToggle.classList.remove("stowed");
        navMenu.classList.remove("stowed");
        navTop.classList.remove("stowed");
    } else {
        navbar.classList.add("hidden");
        navToggle.classList.add("stowed");
        navMenu.classList.add("stowed");
        navTop.classList.add("stowed");
    }
});

for (let i = 0; i < navItem.length; ++i) {
    navItem[i].addEventListener('click', function() {
        navbar.classList.add("hidden");
        navToggle.classList.add("stowed");
        navMenu.classList.add("stowed");
        navTop.classList.add("stowed");
    })
}
