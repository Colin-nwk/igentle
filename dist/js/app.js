/*===== DATE =====*/
const year = document.querySelector(".year"),
  getCurrentYear = new Date();
year.innerHTML = getCurrentYear.getFullYear();

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
  try {
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
  } catch (e) {
    // console.log(e);
  }
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

/*===== GOOGLE MAP API =====*/
//Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

/*===== CAROUSEL CONTROL =====*/

let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

/*===== SCROLL REVEAL JS =====*/
const scrollRe = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 3000,
  reset: true,
});

//Home
scrollRe.reveal(".home__title", {});
scrollRe.reveal(".home__text", {});
//About
scrollRe.reveal(".flex-card", { delay: 500, interval: 300 });
// scrollRe.reveal(".about__title", { delay: 300 });
scrollRe.reveal(".about__img", { delay: 400 });
scrollRe.reveal("about__data", { delay: 300 });

//General
scrollRe.reveal(".title", { delay: 300 });

//Services

scrollRe.reveal(".card", { delay: 200 });

//gallery
scrollRe.reveal(".carousel", { delay: 400 });
scrollRe.reveal(".gallery__img", { delay: 400, interval: 200 });

//contact
scrollRe.reveal(".contact__map", { delay: 500 });
scrollRe.reveal(".contact__group", { delay: 400, interval: 300 });
