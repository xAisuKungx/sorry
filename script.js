// ------------------ หน้า index ------------------
const yesBtn = document.getElementById("btnYes");
const noBtn = document.getElementById("btnNo");
const mainImage = document.getElementById("mainImage");

let lastCryImage = null;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

if (yesBtn && noBtn && mainImage) {

  // กด YES → เปิดหน้า page2 แทน redirect
  yesBtn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "block";
    startSecondPage();
  });

  const cryImages = ["cry1.gif", "cry2.gif", "cry3.gif"];

  noBtn.addEventListener("click", () => {

    let newImage;
    do {
      newImage = cryImages[Math.floor(Math.random() * cryImages.length)];
    } while (newImage === lastCryImage);

    lastCryImage = newImage;
    mainImage.src = newImage;

    moveNoButtonRandom();
  });
}

function moveNoButtonRandom() {
  const container = document.querySelector(".container");

  if (!container || !noBtn) return;

  const rect = container.getBoundingClientRect();

  const maxX = rect.width - noBtn.offsetWidth - 10;
  const maxY = rect.height - noBtn.offsetHeight - 10;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}



// ------------------ หน้า page2 ------------------
function startSecondPage() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  const emojiContainer = document.getElementById('emoji-container');
  const bgMusic = document.getElementById('bgMusic');

  if (welcomeMessage) welcomeMessage.textContent = "";

  const emojis = ['❤️', '✨'];

  function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (3 + Math.random() * 3) + 's';
    emoji.style.fontSize = (20 + Math.random() * 30) + 'px';
    emojiContainer.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 6000);
  }

  setInterval(createEmoji, 300);

  document.body.addEventListener('click', () => {
    if (bgMusic.paused) bgMusic.play();
  });
}
