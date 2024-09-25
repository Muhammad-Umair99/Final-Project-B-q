nav = document.getElementById("nav");
headerMenu = document.getElementById("header_menu");
navClose = document.getElementById("nav_close");

// menu show
if (headerMenu) {
    headerMenu.addEventListener("click", () => {
        nav.classList.add("show_menu")
    })
}


// menu hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        nav.classList.remove("show_menu")
    })
}


// Sign-up/Sign-in functionality
const signUpBtn = document.querySelector(".signupbtn");
const signInBtn = document.querySelector(".signinbtn");
const nameField = document.querySelector(".namefield");
const title = document.querySelector(".title");
const underline = document.querySelector(".underline");
let text = document.querySelector(".text");
const accountLink = document.querySelector(".ri-account-circle-line"); // Account icon
const authContainer = document.getElementById("auth-container"); // The form container

// Show the authentication form when the account icon is clicked
accountLink.addEventListener("click", () => {
    authContainer.style.display = 'flex'; // Show the form
    backArrow.style.display = 'flex'
});

// Handle Sign In functionality
signInBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0"; // Hide name field for sign in
    title.innerHTML = "Sign In";
    text.innerHTML = "Lost Password"
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)"; // Move underline
});

// Handle Sign Up functionality
signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px"; // Show name field for sign up
    title.innerHTML = "Sign Up";
    text.innerHTML = "Password Suggestion"
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = "translateX(0)"; // Reset underline
});

// JavaScript for back arrow navigation
const backArrow = document.getElementById("back-arrow");

// Navigate to the previous page on click
if (backArrow) {
    backArrow.addEventListener("click", () => {
        window.location.href = "index.html"; // Change to your actual dashboard URL
    });
}



// SWIPER Movie
let swiperMovie = new Swiper('.movie-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints: {
        440: {
            slidesPerView: "auto",

        },
        768: {
            slidesPerView: 4,

        },
        1200: {
            slidesPerView: 5,

        }
    }
})

// SWIPER NEW
let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    

    breakpoints: {
        440: {
            slidesPerView: "auto",
                centeredSlides: false,


        },
        768: {
            slidesPerView: 4,
                centeredSlides: false,


        },
        1200: {
            slidesPerView: 5,
                centeredSlides: false,


        }
    }
})

