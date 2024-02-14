// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger-menu");

humberger.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// Klik diluar sidebar untuk hilangkan nav
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
