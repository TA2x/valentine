const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
  heartsContainer.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);

// Button functionality
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = "Yay! You just made me the happiest person! I LOVE YOU FOR ETERNITY AND BEYOND❤️";
});

noBtn.addEventListener('click', () => {
  response.textContent = "please reconsider your decision again! 😊";
});