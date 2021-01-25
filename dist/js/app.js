/* === Menu show=== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* === Remove mobile Menu === */
const navLink = document.querySelectorAll(".nav__link");
function LinkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", LinkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*===== CHANGE HEADER BACKGROUND =====*/
function scrollHeader() {
  const nav = document.getElementById("header");
  //when the scroll is greater than 200 view port height, add scroll-header class
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
  const nav = document.getElementById("scroll-top");
  //when the scroll is greater than 200 view port height, add scroll-header class
  if (this.scrollY >= 560) nav.classList.add("show-scroll");
  else nav.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
