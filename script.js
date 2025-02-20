document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    lucide.createIcons();

    // Text to be typed out
    const textToType = "Frontend Developer | UX/UI Designer";
    let currentIndex = 0;
    const typedTextElement = document.getElementById('typed-text');

    // Function to type out the text one character at a time
    function typeText() {
        if (currentIndex <= textToType.length) {
            // Update the text content of the element
            typedTextElement.textContent = textToType.slice(0, currentIndex);
            currentIndex++;
            // Call the function again after 100ms
            setTimeout(typeText, 100);
        }
    }
    // Start typing the text
    typeText();

    // Slideshow class to handle image slideshow functionality
    class Slideshow {
        constructor(container, images, interval = 3000) {
            this.container = container; // Container element for the slideshow
            this.images = images; // Array of image sources
            this.currentIndex = 0; // Current index of the slideshow
            this.init(); // Initialize the slideshow
            // Set interval to change slides
            setInterval(() => this.nextSlide(), interval);
        }

        // Initialize the slideshow
        init() {
            // Create a wrapper div for the slides
            this.slideWrapper = document.createElement('div');
            this.slideWrapper.className = 'slideshow-wrapper';
            this.container.appendChild(this.slideWrapper);

            // Create slide elements for each image
            this.images.forEach((src, index) => {
                const slide = document.createElement('div');
                slide.className = 'slide';
                
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Slide ${index + 1}`;
                
                slide.appendChild(img);
                this.slideWrapper.appendChild(slide);
                
                // Set the first slide as active
                if (index === 0) {
                    slide.classList.add('active');
                }
            });
        }

        // Function to move to the next slide
        nextSlide() {
            const slides = this.slideWrapper.getElementsByClassName('slide');
            // Remove the active class from the current slide
            slides[this.currentIndex].classList.remove('active');
            // Update the current index to the next slide
            this.currentIndex = (this.currentIndex + 1) % slides.length;
            // Add the active class to the new current slide
            slides[this.currentIndex].classList.add('active');
        }
    }

    // Get the slideshow container element
    const slideshowContainer = document.getElementById('profileSlideshow');
    if (slideshowContainer) {
        // Create a new slideshow instance with the specified images
        new Slideshow(slideshowContainer, [
            'a.jpg', 'b.jpg'
        ]);
    }
});