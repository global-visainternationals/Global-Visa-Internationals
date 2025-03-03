document.addEventListener("DOMContentLoaded", function() {
    function duplicateCarouselItems(selector) {
        const carouselTrack = document.querySelector(selector);
        if (carouselTrack) {
            const items = Array.from(carouselTrack.children);
            items.forEach(item => {
                const clone = item.cloneNode(true); // Clone each item
                carouselTrack.appendChild(clone);  // Append to track
            });
        }
    }

    duplicateCarouselItems('.review-carousel .carousel-track'); // Duplicate reviews
    duplicateCarouselItems('.video-carousel .carousel-track'); // Duplicate videos
});


      // FAQ toggle functionality with auto-close
      document.querySelectorAll('.consulting-container .faq-question').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.consulting-container .faq-item').forEach(faq => {
                if (faq !== this.parentNode) {
                    faq.classList.remove('active');
                }
            });
            this.parentNode.classList.toggle('active');
        });
    });

    //  gallery functions
    document.addEventListener("DOMContentLoaded", function () {
        let galleryIndex = 0;
        const galleryTrack = document.querySelector('.gallery-carousel-track');
        const gallerySlides = document.querySelectorAll('.gallery-slide');
        const totalGallerySlides = gallerySlides.length;
    
        function moveGallerySlide(step) {
            galleryIndex += step;
            if (galleryIndex < 0) {
                galleryIndex = totalGallerySlides - 1;
            } else if (galleryIndex >= totalGallerySlides) {
                galleryIndex = 0;
            }
            galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
        }
    
        // Auto-slide every 3 seconds
        setInterval(() => moveGallerySlide(1), 3000);
    
        // Add event listeners for buttons
        document.querySelector(".gallery-prev").addEventListener("click", () => moveGallerySlide(-1));
        document.querySelector(".gallery-next").addEventListener("click", () => moveGallerySlide(1));
    });
    
    
    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            item.parentElement.classList.add('active');
        });
    });
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("inquiry-form");
        const submitButton = form.querySelector("button[type='submit']");
        const popup = document.getElementById("success-popup");
        const closeButton = document.getElementById("close-popup");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
    
            if (!grecaptcha.getResponse()) {
                alert("❌ Please verify that you're not a robot.");
                return;
            }
    
            submitButton.disabled = true;
            submitButton.innerText = "Submitting..."; // Show user feedback
    
            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            })
            .then(response => response.text())
            .then(data => {
                submitButton.disabled = false;
                submitButton.innerText = "Submit"; // Reset button text
    
                if (data.trim().toLowerCase() === "success") {
                    popup.style.display = "block"; // Show popup
                    form.reset();
                    grecaptcha.reset(); // Reset reCAPTCHA
                } else {
                    alert("❌ Error: " + data);
                }
            })
            .catch(error => {
                submitButton.disabled = false;
                submitButton.innerText = "Submit"; // Reset button text
                alert("❌ Submission failed. Please check your network or Google Apps Script.");
            });
        });
    
        // Close popup when clicking the close button
        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });
    });
    
