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
    

    document.getElementById("inquiry-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var form = event.target;
        var formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log("Success:", data);
            document.getElementById("response-message").style.display = "block"; // Show success message
            form.reset(); // Clear form fields after submission
        })
        .catch(error => console.error("Error:", error));
    });

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            item.parentElement.classList.add('active');
        });
    });



    document.getElementById("inquiry-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page from redirecting
    
        var form = event.target;
        var formData = new FormData(form);
    
        // Send form data to Google Sheets
        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log("Success:", data);
    
            // Show the popup window
            document.getElementById("popup").style.display = "flex";
    
            // Clear the form fields
            form.reset();
        })
        .catch(error => console.error("Error:", error));
    });
    
    // Close the popup when clicking "OK"
    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });

    

    document.getElementById("inquiry-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent redirection

        var form = event.target;
        var formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log("Success:", data);

            // Show the checkbox confirmation
            document.getElementById("confirmation-box").style.display = "block";

            // Clear the form fields
            form.reset();
        })
        .catch(error => console.error("Error:", error));
    });

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            item.parentElement.classList.add('active');
        });
    });