var swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000, // 3 seconds between slides
        disableOnInteraction: false, // Keeps autoplay active even after user interaction (if needed)
    },
    allowTouchMove: false, // Disable dragging/touch interaction
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

// Initialize Swiper for the carousel
const swiper = new Swiper('.swiper-container2', {
    loop: true,
    autoplay: {
        delay: 30000000, // 3 seconds between slides
        disableOnInteraction: false, // Keeps autoplay active even after user interaction (if needed)
    },
    // Removed the pagination dots section
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', function() {
    const answer = this.nextElementSibling;

    // Toggle the answer visibility
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    
    // Toggle the active state of the button
    this.classList.toggle('active');
    
    // Close other open answers
    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
      if (otherAnswer !== answer) {
        otherAnswer.style.display = 'none';
        otherAnswer.previousElementSibling.classList.remove('active');
      }
    });
  });
});


