//This is script for portfolio pagage of the Personal Webiste Ania Leibel

document.addEventListener('DOMContentLoaded', () => {
  const portfolioButton = document.getElementById('portfolioButton');
  const video = document.getElementById('videoElement');

  // Pause video when hovering over the button
  portfolioButton.addEventListener('mouseenter', () => {
      video.pause();
  });

  // Play video again when hover ends
  portfolioButton.addEventListener('mouseleave', () => {
      video.play();
  });

  // Button click navigation
  portfolioButton.addEventListener('click', () => {
      window.location.href = '/portfolioWebsite/pages/index.html';
  });
});