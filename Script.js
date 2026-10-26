
/* =========================
   MOBILE NAVBAR
========================= */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");


/* BUTTON CLICK */

menuToggle.addEventListener("click", function () {

    // ☰ becomes ✕

    menuToggle.classList.toggle("active");

    // Open and close navbar

    navbar.classList.toggle("active");

    // Check menu status

    const isOpen = menuToggle.classList.contains("active");

    // Accessibility

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    // Button label

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


/* =========================
   CLOSE MENU AFTER LINK
========================= */

const navLinks = document.querySelectorAll(
    ".navbar a"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Close navbar

        menuToggle.classList.remove("active");

        navbar.classList.remove("active");

        // Reset button

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


/* =========================
   BACKGROUND IMAGE SLIDER
========================= */

const backgrounds = document.querySelectorAll(
    ".hero-background"
);

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


/* SHOW BACKGROUND */

function showSlide(index) {

    backgrounds.forEach(function (background) {

        background.classList.remove("active");

    });

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });

    backgrounds[index].classList.add("active");

    dots[index].classList.add("active");

}


/* NEXT BACKGROUND */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= backgrounds.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* START SLIDER */

showSlide(currentSlide);


/* CHANGE EVERY 2 SECONDS */

setInterval(nextSlide, 2000);


/* =========================
   SHOPPING CART
========================= */

const cartButtons = document.querySelectorAll(
    ".quick-cart"
);

const cartCount = document.getElementById(
    "cart-count"
);

const cartItemsDisplay = document.getElementById(
    "cart-items"
);

const cartTotalDisplay = document.getElementById(
    "cart-total"
);


let cartItems = 0;

let totalPrice = 0;


/* ADD PRODUCT */

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.dataset.name;

        const productPrice = Number(
            button.dataset.price
        );


        // Increase cart items

        cartItems++;

        // Increase total price

        totalPrice += productPrice;


        // Update header cart

        cartCount.textContent = cartItems;


        // Update cart summary

        cartItemsDisplay.textContent = cartItems;

        cartTotalDisplay.textContent =
            totalPrice.toLocaleString("en-PK");


        // Button feedback

        button.textContent = "Added ✓";

        setTimeout(function () {

            button.textContent = "Add To Cart";

        }, 1200);


        // Confirmation

        alert(

            productName +

            " added to cart!\n\n" +

            "Price: Rs. " +

            productPrice.toLocaleString("en-PK") +

            "\nTotal Items: " +

            cartItems +

            "\nCart Total: Rs. " +

            totalPrice.toLocaleString("en-PK")

        );

    });

});


/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year").textContent =

    new Date().getFullYear();


/* =========================
   SCROLL ANIMATION
========================= */

const revealItems = document.querySelectorAll(
    ".reveal, .category-card, .product-card"
);


/* INTERSECTION OBSERVER */

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* START REVEAL */

revealItems.forEach(function (item) {

    item.classList.add("reveal");

    observer.observe(item);

});

