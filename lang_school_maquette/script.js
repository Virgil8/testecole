document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav__burger");
  const overlay = document.querySelector(".nav__overlay");
  const overlayLinks = document.querySelectorAll(".nav__overlay a");

  if (burger && overlay) {
    burger.addEventListener("click", () => {
      const isOpen = overlay.classList.toggle("nav__overlay--open");
      overlay.setAttribute("aria-hidden", String(!isOpen));
    });

    overlayLinks.forEach((link) => {
      link.addEventListener("click", () => {
        overlay.classList.remove("nav__overlay--open");
        overlay.setAttribute("aria-hidden", "true");
      });
    });
  }
});
