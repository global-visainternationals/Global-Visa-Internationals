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
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload
    
            grecaptcha.ready(function () {
                grecaptcha.execute("6Ld-WeYqAAAAAPXgC3iT9J5a4ZFHEo_SAc69eXwN", { action: "submit" }).then(function (token) {
                    document.getElementById("g-recaptcha-response").value = token;
    
                    const formData = new FormData(form);
                    
                    console.log("📤 Sending Form Data:", Object.fromEntries(formData.entries())); // Debugging
    
                    fetch(form.action, {
                        method: "POST",
                        body: formData
                    })
                    .then(response => response.text())
                    .then(data => {
                        console.log("📩 Server Response:", data); // Debugging
    
                        if (data.trim() === "Success") {
                            document.getElementById("success-popup").style.display = "block";
                            form.reset();
                        } else {
                            console.error("❌ Server Error:", data);
                            alert("❌ Error: " + data);
                        }
                    })
                    .catch(error => {
                        console.error("❌ Network Error:", error);
                        alert("❌ Submission failed. Please try again.");
                    });
                });
            });
        });
    });
    
