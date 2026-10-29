// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// check if elements exist
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', function () {
    // toggle 'hidden' class to show or hide the menu
    mobileMenu.classList.toggle('hidden');
  });
}

// Shopping cart counter
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');
const buyButtons = document.querySelectorAll('.buy-btn');

// loop through all buy buttons
buyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // add 1 to cart counter
    cartCount = cartCount + 1;
    cartCountElement.textContent = cartCount;

    // change button text and color when clicked
    button.textContent = 'Added';
    button.classList.add('bg-green-700');
    button.classList.remove('bg-red-800');

    // reset button back to normal after 1 second
    setTimeout(function () {
      button.textContent = 'Buy Now';
      button.classList.remove('bg-green-700');
      button.classList.add('bg-red-800');
    }, 1000);
  });
});

// Newsletter submit message
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    // prevent page reload
    e.preventDefault();
    alert('Thank you for subscribing! Your 20% discount code is on the way.');
    newsletterForm.reset();
  });
}
