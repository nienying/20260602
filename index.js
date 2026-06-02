const menuBtn = document.querySelector(".btn-menu"); 

const navList = document.querySelector(".nav-list"); 





menuBtn.addEventListener("click", function () {

    navList.classList.toggle("active"); 

    document.body.classList.toggle("menu-open"); 

});