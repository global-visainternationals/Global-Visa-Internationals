document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link"); // Select all nav links
    const dropdownItems = document.querySelectorAll(".dropdown__item"); // Select dropdown items
    const dropdownMenus = document.querySelectorAll(".dropdown__menu"); // Select dropdown menus
    const dropdownLinks = document.querySelectorAll(".dropdown__link"); // Select dropdown links inside dropdown

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
            toggle.classList.toggle("show-icon");

            // Automatically expand all dropdown menus when menu is opened
            if (nav.classList.contains("show-menu")) {
                dropdownMenus.forEach(menu => menu.style.maxHeight = "1000px");
            } else {
                dropdownMenus.forEach(menu => menu.style.maxHeight = "0");
            }
        });

        // Close menu when a normal (non-dropdown) nav link is clicked
        navLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                const parent = link.parentElement;
                if (!parent.classList.contains("dropdown__item")) {
                    closeNavMenu(); // Close menu
                }
            });
        });

        // Prevent closing when clicking dropdown items & toggle dropdowns individually
        dropdownItems.forEach((dropdown) => {
            dropdown.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent event from closing nav
                const submenu = dropdown.querySelector(".dropdown__menu");

                if (submenu) {
                    const isOpen = submenu.style.maxHeight === "1000px";
                    submenu.style.maxHeight = isOpen ? "0" : "1000px";
                }
            });
        });

        // Close navbar when a dropdown item is clicked
        dropdownLinks.forEach((dropdownLink) => {
            dropdownLink.addEventListener("click", () => {
                closeNavMenu();
            });
        });

        function closeNavMenu() {
            nav.classList.remove("show-menu"); // Hide menu
            toggle.classList.remove("show-icon"); // Reset toggle icon
            dropdownMenus.forEach(menu => menu.style.maxHeight = "0"); // Close dropdowns
        }
    }
});
