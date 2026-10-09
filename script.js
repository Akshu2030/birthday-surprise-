

const memories = [
  {
    photo: "sample 2.jpeg",
    caption: "💜 Our friendship is one of the most beautiful gifts in my life.",
    message: "No matter how many people come into my life, you will always have a special place in my heart. 🥹"
  },
  {
    photo: "sample 3.jpeg",
    caption: "💕 Every moment with you becomes a beautiful memory.",
    message: "Thank you for all the laughs, silly talks, and little moments that make me happy. Never change who you are! 🧸"
  },
  {
    photo: "sample 4.jpeg",
    caption: "🫂 You are more than a best friend; you are family.",
    message: "Even on my worst days, your friendship makes everything feel a little better. I am so lucky to have you!"
  },
  {
    photo: "sample 5.jpeg",
    caption: "✨ So many memories, and so many more to make!",
    message: "I hope we keep making silly memories, sharing secrets, and laughing together for years to come. 💖"
  },
  {
    photo: "sample 1.jpeg",
    caption: "🎂 Happy Birthday to my favourite person, Galdy!",
    message: "May your life be filled with love, peace, success, and endless happiness. You deserve all the beautiful things in this world. Love you, bestie! 💜"
  }
];

const openedHearts = new Set();

function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const nextPage = document.getElementById("page" + pageNumber);
  if (nextPage) nextPage.classList.add("active");

  if (pageNumber === 1) resetSurprise();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHeart(index) {
  const message = document.getElementById("heartMessage");
  const hearts = document.querySelectorAll(".heart");

  if (!memories[index] || !message || !hearts[index]) return;

  openedHearts.add(index);
  hearts[index].classList.add("opened");
  hearts[index].textContent = "💖";

  message.innerHTML = "";

  const photo = document.createElement("img");
  photo.src = memories[index].photo;
  photo.alt = "Memory " + (index + 1);
  photo.className = "memory-photo";

  photo.onerror = function () {
    photo.remove();
    caption.textContent =
      "Photo not found: " + memories[index].photo;
  };

  const caption = document.createElement("p");
  caption.className = "memory-caption";
  caption.textContent = memories[index].caption;

  message.appendChild(photo);
  message.appendChild(caption);
  const extraMessage = document.createElement("p");
extraMessage.className = "memory-extra";
extraMessage.textContent = memories[index].message;
message.appendChild(extraMessage);

  document.getElementById("heartCount").textContent =
    openedHearts.size + " / 5 hearts opened";

  document.getElementById("heartNext").disabled =
    openedHearts.size < 5;
}

function blowCandles() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("birthdayReveal").style.display = "block";
}

function resetSurprise() {
  openedHearts.clear();

  document.querySelectorAll(".heart").forEach(heart => {
    heart.classList.remove("opened");
    heart.textContent = "💜";
  });

  document.getElementById("heartMessage").textContent = "Choose a heart! 💌";
  document.getElementById("heartCount").textContent = "0 / 5 hearts opened";
  document.getElementById("heartNext").disabled = true;

  document.getElementById("flame").style.display = "";
  document.getElementById("startBtn").style.display = "";
  document.getElementById("birthdayReveal").style.display = "none";

  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.style.position = "";
    noBtn.style.left = "";
    noBtn.style.top = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("noBtn");
  const buttonArea = document.getElementById("buttonArea");

  if (!noBtn || !buttonArea) return;

  function moveNoButton() {
    const maxX = Math.max(0, buttonArea.clientWidth - noBtn.offsetWidth);
    const maxY = Math.max(0, buttonArea.clientHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("mouseenter", moveNoButton);

  noBtn.addEventListener("click", function (event) {
    event.preventDefault();
    moveNoButton();
  });

  noBtn.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });
});
