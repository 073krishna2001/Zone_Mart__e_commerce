var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1200,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000, // Set the delay (in milliseconds) between slides
    },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
});



var sidenav = document.getElementById('sidenav');
var menubar = document.getElementById('menubar');
sidenav.style.width = "0px";
menubar.onclick = function () {
    if (sidenav.style.width == "0px") {
        sidenav.style.width = "250px";
    }
    else {
        sidenav.style.width = "0px";
    }
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function toggleSearchBar() {
//     const searchBarContainer = document.getElementById("searchBarContainer");
//     searchBarContainer.style.display = (searchBarContainer.style.display === "block") ? "none" : "block";
// }