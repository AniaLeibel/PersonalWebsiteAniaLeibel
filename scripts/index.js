//This is script for index page of the Personal Webiste Ania Leibel

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-area li a');

  navLinks.forEach(link => {
      if (link.href === window.location.href) {
          link.classList.add('active'); 
      } else {
          link.classList.remove('active'); 
      }
  });
});