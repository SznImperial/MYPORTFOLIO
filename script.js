// Example: Simple form submit handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
});
// Example: Toggle navigation menu
document.getElementById('nav-toggle').addEventListener('click', function() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('hidden');
});