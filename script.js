// ------------------ Apology Page (หน้าขอโทษ) ------------------
const forgiveBtn = document.getElementById("btnYes");
const refuseBtn = document.getElementById("btnNo");
const apologyImage = document.getElementById("mainImage");

let currentCryImage = null; // เปลี่ยนชื่อ

const apologyPage = document.getElementById("page1"); // เปลี่ยนชื่อ
const acceptancePage = document.getElementById("page2"); // เปลี่ยนชื่อ

// ตรวจสอบว่ามีปุ่มและรูปในหน้าแรก
if (forgiveBtn && refuseBtn && apologyImage) { // เปลี่ยนชื่อ

  // กด YES → เปิดหน้า acceptancePage
  forgiveBtn.addEventListener("click", () => { // เปลี่ยนชื่อ
    apologyPage.style.display = "none"; // เปลี่ยนชื่อ
    acceptancePage.style.display = "block"; // เปลี่ยนชื่อ
    startAcceptancePage(); // เปลี่ยนชื่อฟังก์ชัน
  });

  const cryImages = ["cry1.gif", "cry2.gif", "cry3.gif"];

  refuseBtn.addEventListener("click", () => { // เปลี่ยนชื่อ
    // สุ่มภาพร้องไห้ โดยไม่ให้ซ้ำภาพล่าสุด
    let newImage;
    do {
      newImage = cryImages[Math.floor(Math.random() * cryImages.length)];
    } while (newImage === currentCryImage); // เปลี่ยนชื่อ

    currentCryImage = newImage; // เปลี่ยนชื่อ
    apologyImage.src = newImage; // เปลี่ยนชื่อ

    moveRefuseButton(); // เปลี่ยนชื่อฟังก์ชัน
  });
}



// ------------------ ฟังก์ชันให้ปุ่ม No หนี ------------------
function moveRefuseButton() { // เปลี่ยนชื่อฟังก์ชัน
  const container = apologyPage; // เปลี่ยนชื่อ

  if (!container || !refuseBtn) return; // เปลี่ยนชื่อ

  // ให้ container เป็นตำแหน่งอ้างอิง
  container.style.position = "relative";

  // ระยะขอบของ container
  const rect = container.getBoundingClientRect();

  const maxX = rect.width - refuseBtn.offsetWidth - 10; // เปลี่ยนชื่อ
  const maxY = rect.height - refuseBtn.offsetHeight - 10; // เปลี่ยนชื่อ

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  refuseBtn.style.position = "absolute"; // เปลี่ยนชื่อ
  refuseBtn.style.left = randomX + "px";
  refuseBtn.style.top = randomY + "px";
}



// ------------------ Acceptance Page (หน้าตอบรับ) ------------------
function startAcceptancePage() { // เปลี่ยนชื่อฟังก์ชัน
  const acceptanceMessage = document.getElementById("welcomeMessage"); // เปลี่ยนชื่อตัวแปร (แต่ยังคงใช้ ID เดิมใน HTML)
  const emojiContainer = document.getElementById("emoji-container");
  const backgroundMusic = document.getElementById("bgMusic"); // เปลี่ยนชื่อตัวแปร (แต่ยังคงใช้ ID เดิมใน HTML)

  if (acceptanceMessage) acceptanceMessage.textContent = ""; // เปลี่ยนชื่อ

  // อิโมจิ
  const emojis = ["💗", "✨"];

  function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // ตกจากตำแหน่ง random
    emoji.style.left = Math.random() * 100 + "vw";

    // ความเร็วตก
    emoji.style.animationDuration = (3 + Math.random() * 3) + "s";

    // ขนาด emoji
    emoji.style.fontSize = (14 + Math.random() * 20) + "px";

    emojiContainer.appendChild(emoji);

    // ลบหลังจากตกเสร็จ
    setTimeout(() => emoji.remove(), 6000);
  }

  // เริ่มปล่อยอิโมจิ
  setInterval(createEmoji, 300);

  // ถ้า user แตะหน้าจอให้เปิดเพลง
  document.body.addEventListener("click", () => {
    if (backgroundMusic.paused) backgroundMusic.play(); // เปลี่ยนชื่อ
  });
}
