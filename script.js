// burger
let burger = document.querySelector(".burger_menu_img");
// header naviogation
let header_nav = document.querySelector(".header_nav");
// c icon image
let x_icon = document.querySelector(".x_icon_img");

// click on burger show x icon and  show navigation
burger.addEventListener("click", () => {
  header_nav.classList.add("show");
  burger.style.display = "none";
  x_icon.style.display = "block";
});

// click on x icon  hide navigation and show burger

x_icon.addEventListener("click", () => {
  header_nav.classList.remove("show");
  burger.style.display = "block";
  x_icon.style.display = "none";
});

//-----------------------------------
// script.js (or your main JavaScript file)

// ... (Your existing burger menu and notification code) ...

const form = document.querySelector('.form');
const nameInput = form.querySelector('input[name="NAME"]');
const emailInput = form.querySelector('input[name="EMAIL"]');
const messageTextarea = form.querySelector('textarea[name="TEXTAREA"]');
const sendButton = form.querySelector('.send_button');





// Form Validation
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  let isValid = true;

  if (nameInput.value.trim() === '') {
    alert("Name is required.");
    nameInput.classList.add('error'); 
    isValid = false;
  } else {
        nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '') {
    alert("Email is required.");
    emailInput.classList.add('error');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) { 
    alert("Invalid email format.");
    emailInput.classList.add('error');
    isValid = false;
  }
  else {
    emailInput.classList.remove('error');
  }


  if (messageTextarea.value.trim() === '') {
    alert("Message is required.");
    messageTextarea.classList.add('error');
    isValid = false;
  } else {
    messageTextarea.classList.remove('error');
  }

  if (isValid) {
    
    alert("Form submitted successfully!");
    form.reset();
  }
});



function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return emailRegex.test(email);
}



