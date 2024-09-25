document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobil .img-menu");
  const menuOverlay = document.querySelector(".mobil .menu-overlay");
  const closeBtn = document.querySelector(".mobil .closebtn");

  menu.addEventListener("click", () => {
    menuOverlay.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".tablet .img-menu");
  const menuOverlay = document.querySelector(".tablet .menu-overlay");
  const closeBtn = document.querySelector(".tablet .closebtn");

  menu.addEventListener("click", () => {
    menuOverlay.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("open");
  });
});
