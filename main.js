
const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenu = document.querySelector(".header-right > a");

openMenu.addEventListener("click",

    function(){
        hamburgerMenu.classList.add("active");
    }
);

// menu nascosto
const closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click",
        
    function(){
        hamburgerMenu.classList.remove("active");
    }
);