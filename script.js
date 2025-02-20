document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu clicked'); // For debugging
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = navLinks.getElementsByTagName('a');
        for(let link of links) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
            });
        }
    }

    // Lucide icons initialization
    lucide.createIcons();

    // Typing animation
    const textToType = "Frontend Developer | UX/UI Designer";
    let currentIndex = 0;
    const typedTextElement = document.getElementById('typed-text');

    function typeText() {
        if (currentIndex <= textToType.length) {
            typedTextElement.textContent = textToType.slice(0, currentIndex);
            currentIndex++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Slideshow class and initialization
    class Slideshow {
        constructor(container, images, interval = 3000) {
            this.container = container;
            this.images = images;
            this.currentIndex = 0;
            this.init();
            setInterval(() => this.nextSlide(), interval);
        }

        init() {
            this.slideWrapper = document.createElement('div');
            this.slideWrapper.className = 'slideshow-wrapper';
            this.container.appendChild(this.slideWrapper);

            this.images.forEach((src, index) => {
                const slide = document.createElement('div');
                slide.className = 'slide';
                
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Slide ${index + 1}`;
                
                slide.appendChild(img);
                this.slideWrapper.appendChild(slide);
                
                if (index === 0) {
                    slide.classList.add('active');
                }
            });
        }

        nextSlide() {
            const slides = this.slideWrapper.getElementsByClassName('slide');
            slides[this.currentIndex].classList.remove('active');
            this.currentIndex = (this.currentIndex + 1) % slides.length;
            slides[this.currentIndex].classList.add('active');
        }
    }

    const slideshowContainer = document.getElementById('profileSlideshow');
    if (slideshowContainer) {
        new Slideshow(slideshowContainer, [
            'a.jpg', 'b.jpg'
        ]);
    }
});