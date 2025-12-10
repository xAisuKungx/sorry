// ------------------ หน้า index ------------------
const yesBtn = document.getElementById("btnYes");
const noBtn = document.getElementById("btnNo");
const mainImage = document.getElementById("mainImage");

let lastCryImage = null;   // เก็บชื่อรูปคราวก่อน เพื่อตัดซ้ำ

if (yesBtn && noBtn && mainImage) {

  // YES = ไปหน้า page1
  yesBtn.addEventListener("click", () => {
    window.location.href = location.origin + "/page1.html";
});



  // รายชื่อรูปที่ต้องสุ่มตอนกด NO
  const cryImages = ["cry1.gif", "cry2.gif", "cry3.gif"];

  noBtn.addEventListener("click", () => {

    // สุ่มรูปใหม่ที่ไม่ซ้ำกับรูปก่อนหน้านี้
    let newImage;
    do {
      newImage = cryImages[Math.floor(Math.random() * cryImages.length)];
    } while (newImage === lastCryImage);

    lastCryImage = newImage;  // เก็บไว้เช็คคราวหน้า

    // เปลี่ยนรูป
    mainImage.src = newImage;

    // ปุ่ม No หนีแบบสุ่ม
    moveNoButtonRandom();
  });
}


// ฟังก์ชันให้ปุ่ม No หนีแบบสุ่มภายใน container เดิม
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



// ------------------ หน้า page1 ------------------
const welcomeMessage = document.getElementById('welcomeMessage');
const emojiContainer = document.getElementById('emoji-container');
const bgMusic = document.getElementById('bgMusic');

if (welcomeMessage) {

  const name = localStorage.getItem('username');
  if (name) {
    // ไม่ต้องการข้อความแล้ว จึงปล่อยว่าง
    welcomeMessage.textContent = "";
  } else {
    window.location.href = "index.html";
  }

  const emojis = ['🩷', '✨'];

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



