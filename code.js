let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
   let nav = document.querySelector(".navigation");
   nav.classList.toggle("show-nav");
   
   if (menuIcon.src.match("assets/images/icon-menu.svg")) {
    menuIcon.src = "assets/images/icon-menu-close.svg";
   } else {
    menuIcon.src = "assets/images/icon-menu.svg";
   }
})