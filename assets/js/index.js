const hamburger_btn = document.getElementsByClassName("hamburger-menu")[0];
const navbarlinks = document.getElementsByClassName("navbar-links")[0]

hamburger_btn.addEventListener("click", function(){
    navbarlinks.classList.toggle('active')
})
//this above code is to toggle b/w hamburger menu for the nav bar!!
