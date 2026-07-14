// SELECT MOBILE MENU BUTTON

const menuButton = document.getElementById("menuButton");


// SELECT NAVIGATION LINKS

const navLinks = document.getElementById("navLinks");


// OPEN AND CLOSE MOBILE MENU

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// NAVBAR EFFECT WHILE SCROLLING

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});