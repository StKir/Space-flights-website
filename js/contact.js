let button = document.querySelector(".button");
let overlay = document.querySelector(".callback-overlay");
let back = document.querySelector(".callback-overlay__back");
let buttonSendData = document.querySelector(".callback-overlay__button");
let overlay2 = document.querySelector(".callback-overlay-2");
let buttonCloseOverlay2 = document.querySelector(".callback-overlay-2__button");

button.addEventListener("click", (target) => {
  target.preventDefault;
  overlay.style.display = "block";
  overlay.style.left = 0 + "%";
  setTimeout(() => {
    overlay.style.opacity = 1;
    overlay.style.backgroundColor = "rgba(109, 17, 202, 0.95)";
  }, 500);
});

back.addEventListener("click", (target) => {
  overlay.style.opacity = 0;
  overlay.style.backgroundColor = "";
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.style.left = -100 + "%";
  }, 800);
});

buttonSendData.addEventListener("click", (target) => {
  target.preventDefault();
  overlay.style.opacity = 0;
  overlay.style.backgroundColor = "";
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.style.left = -100 + "%";
  }, 800);

  setTimeout(() => {
    overlay2.style.top = 0 + "%";
  }, 800);
});

buttonCloseOverlay2.addEventListener("click", () => {
  overlay2.style.top = -100 + "%";
});

// overlay.style.left = 0+"%";
