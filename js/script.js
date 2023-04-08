const nav_btn = document.getElementById("nav-btn");
const modal = document.getElementById("modal");
const CTA = document.getElementById("CTA");
const about = document.getElementById("about");
const products = document.getElementById("products");
const testimonials = document.getElementById("testimonials");
const contact = document.getElementById("contact");
const header = document.getElementById("header");

let isNavClicked = false;

//closes the modal
function closeModal() {
  nav_btn.src = "assets/iPhone 13-NavBar.svg";
  modal.className = "hidden";
  isNavClicked = false;
}

function openModal() {
  nav_btn.src = "assets/iPhone 13-NavBar.svg";
  modal.className = "visible";
  isNavClicked = true;
}

//Controls about the Navigation Bar
nav_btn.addEventListener("click", () => {
  if (!isNavClicked) {
    openModal();
  } else {
    closeModal();
  }
});

//Scroll to CTA
function scrollToCTA() {
  CTA.scrollIntoView({ behavior: "smooth" }, true);
  setTimeout(closeModal, 500);
}

//Scroll to About
function scrollToAbout() {
  about.scrollIntoView({ behavior: "smooth" }, true);
  setTimeout(closeModal, 500);
}

//Scroll to Products
function scrollToProduct() {
  products.scrollIntoView({ behavior: "smooth" }, true);
  setTimeout(closeModal, 500);
}

//Scroll to Testimonials
function scrollToTestimonials() {
  testimonials.scrollIntoView({ behavior: "smooth" }, true);
  setTimeout(closeModal, 500);
}

//Scroll to Contact
function scrollToContact() {
  contact.scrollIntoView({ behavior: "smooth" }, true);
  setTimeout(closeModal, 500);
}

//Header scroll animation
// Listen for the scroll event on the window object
window.addEventListener("scroll", () => {
  // Check if the user has scrolled past a certain point on the page
  if (window.scrollY > 100) {
    // Change 100 to the desired scroll threshold
    // Add the drop-shadow filter to the element
    header.style.filter = "drop-shadow(2px 2px 4px rgba(10, 50, 40, 0.5))";
  } else {
    // Remove the drop-shadow filter from the element
    header.style.filter = "none";
  }
});
