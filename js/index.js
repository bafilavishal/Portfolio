// Typing effect (keep this as-is)
const text = ["Engineer", "Developer", "Designer", "Data Analyist", "Front-end developer"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
  currentText = text[i];
  typedText.innerHTML = currentText.substring(0, j);

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  if (!isDeleting && j > currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    j = 0;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}

type();

// Skill slider: duplicate the track content for seamless loop
const track = document.querySelector('.slider-track');
if (track) {
  track.innerHTML += track.innerHTML;
}
    var swiper = new Swiper(".mySwiper", {
        // Required for showing 4 slides at a time
        slidesPerView: 4, 
        spaceBetween: 30,
        
        // Loop mode for continuous scrolling
        loop: true,
        
        // Enable and configure the navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Enable and configure the pagination dots
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        // Responsive breakpoints (optional, but recommended)
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px (md)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px (lg)
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            // when window width is >= 1280px (xl)
            1280: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
