document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".closebtn");

  menu.addEventListener("click", () => {
    menuOverlay.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("open");
  });
});
