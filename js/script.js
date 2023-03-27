const nav_btn = document.getElementById("nav-btn");
const modal = document.getElementById("modal");
const CTA = document.getElementById("CTA");
const about = document.getElementById("about");
const products = document.getElementById("products");
const testimonials = document.getElementById("testimonials");
const contact = document.getElementById("contact");

let isNavClicked  = false;

//closes the modal
function closeModal(){
  nav_btn.src = "assets/iPhone 13-NavBar.svg";
  modal.className = "hidden"; 
  isNavClicked = false;
}

function openModal(){
  nav_btn.src = "assets/iPhone 13-X.svg";
  modal.className = "visible";
  isNavClicked = true;
}

//Controls about the Navigation Bar
nav_btn.addEventListener("click",()=>{
  if(!isNavClicked){
      openModal();
  }
  else{      
      closeModal();
  }
});

//Scroll to CTA
function scrollToCTA(){
  CTA.scrollIntoView({behavior:"smooth"},true);
  setTimeout(closeModal,500)
  
}

//Scroll to About
function scrollToAbout(){
  about.scrollIntoView({behavior:"smooth"},true);
  setTimeout(closeModal,500)
  
}

//Scroll to Products
function scrollToProduct(){
  products.scrollIntoView({behavior:"smooth"},true);
  setTimeout(closeModal,500)
  
}

//Scroll to Testimonials
function scrollToTestimonials(){
  testimonials.scrollIntoView({behavior:"smooth"},true);
  setTimeout(closeModal,500)
  
}

//Scroll to Contact
function scrollToContact(){
  contact.scrollIntoView({behavior:"smooth"},true);
  setTimeout(closeModal,500)
  
}