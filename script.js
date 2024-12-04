// script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.welcome, .about-us .vision, .about-us .mission');

    function checkSlide() {
        elements.forEach(function(element) {
            const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
            const elementBottom = element.offsetTop + element.clientHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Run the function once on load
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  
  // script.js
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const visibleSlides = 3; // Number of visible slides

    if (index >= totalSlides - visibleSlides + 1) {
        currentSlide = totalSlides - visibleSlides;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});





document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}




// Get the popup box
var popupBox = document.getElementById("popupBox");

// Get the link that opens the popup
var popupLink = document.getElementById("popupLink");

// Get the <span> element that closes the popup
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the popup
popupLink.onclick = function(event) {
    event.preventDefault();
    popupBox.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
closeBtn.onclick = function() {
    popupBox.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popupBox) {
        popupBox.style.display = "none";
    }
}
