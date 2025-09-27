
const Mk = "09102006";
const MAX_ATTEMPTS = 3;

window.addEventListener('DOMContentLoaded', () => {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const mk = prompt("Em sinh ngày mấy? (nhập ddmmyyyy)");
    const input = mk.trim();
    if (input == Mk) {
      
      return;
    } 
    else {
      const left = MAX_ATTEMPTS - attempt;
      if (left > 0) {
        alert("Sai mật khẩu. Còn " + left + " lần thử.");
      }
    }
  }

  location.replace("phake.html");
});

const unlockBtn = document.getElementById("unlockBtn");
const lockScreen = document.getElementById("lock-screen");
const content = document.getElementById("content");
const music = document.getElementById("bg-music");

unlockBtn.addEventListener("click", () => {
  let opacity = 1;
  const fade = setInterval(() => {
    opacity -= 0.05;
    lockScreen.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fade);
      lockScreen.style.display = "none";
      music.play();
    }
  }, 50);
});



window.addEventListener("load", () => {
  const header = document.querySelector("header");
  header.classList.add("intro-show");

  const footer = document.querySelector("footer");
  footer.classList.add("intro-show");
});
// Chọn tất cả các item trong timeline
const items = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.2 
});

items.forEach(item => observer.observe(item));
document.body.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.muted = false;
  music.play();
}, { once: true });
 
