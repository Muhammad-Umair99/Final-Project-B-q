nav = document.getElementById("nav");
headerMenu = document.getElementById("header_menu");
navClose = document.getElementById("nav_close");

// menu show
if(headerMenu){
    headerMenu.addEventListener("click",()=>{
        nav.classList.add("show_menu")
    })
}


// menu hidden
if(navClose){
    navClose.addEventListener("click",()=>{
        nav.classList.remove("show_menu")
    })
}