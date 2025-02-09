// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

// Initialize the player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-audio', {
    height: '0',
    width: '0',
    videoId: 'nqJlNCs4qbI', // Replace with your YouTube video ID
    playerVars: {
      autoplay: 0, // Start playback only when the button is clicked
      loop: 1, // Loop the video
      playlist: 'nqJlNCs4qbI', // Same as videoId for looping
      controls: 0, // Hide controls
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title
      rel: 0, // Hide related videos
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Start playback when the player is ready
function onPlayerReady(event) {
  const playMusicButton = document.getElementById('play-music');

  playMusicButton.addEventListener('click', () => {
    event.target.playVideo();
    event.target.unMute(); // Unmute the audio
    playMusicButton.style.display = 'none'; // Hide the button
  });
}

// Create floating hearts
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Button functionality
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = "Yay! You just made me the happiest person! ❤️";
});

noBtn.addEventListener('click', () => {
  response.textContent = "Aww, I'll try again next year! 😢";
});