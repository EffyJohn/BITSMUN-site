let navbarButton = document.getElementsByClassName("navbar__button");
let navbarMenu = document.getElementsByClassName("navbar__menu");

navbarButton[0].addEventListener("click", function() {
    if(navbarMenu[0].classList.contains("navbar__menu--view-hidden")) {
        navbarMenu[0].classList.remove("navbar__menu--view-hidden");
    } else {
        navbarMenu[0].classList.add("navbar__menu--view-hidden");
    }
})