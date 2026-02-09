/* =========================
   PRELOADER & AUDIO
========================= */
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

/* =========================
   SETTINGS / SOUND / THEME
========================= */
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
  if (!document.getElementById("switchforsound").checked) {
    audio.pause();
  } else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach((el) => {
    el.classList.toggle("invertapplied");
  });
}

/* =========================
   HAMBURGER MENU
========================= */
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");

  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");

  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

/* =========================
   ACTIVE NAV ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) li.classList.add("activeThismobiletab");
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) li.classList.add("activeThistab");
  });
});

/* =========================
   BACK TO TOP
========================= */
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

/* =========================
   DISABLE IMAGE RIGHT CLICK
========================= */
document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);


/* =========================
   HIRE ME → GET IN TOUCH POPUP
========================= */
const hireBtn = document.getElementById("hireBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

if (hireBtn && contactModal && closeModal) {
  hireBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
}

/* =========================
   CONSOLE CREDIT
========================= */
console.log(
  "%c Designed and Developed by Mim Akter ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color:white;font-weight:900;font-size:1rem; padding:20px;"
);

document.addEventListener("DOMContentLoaded", () => {
  const hireBtn = document.getElementById("hireBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");

  if (hireBtn && contactModal && closeModal) {

    // OPEN modal
    hireBtn.addEventListener("click", () => {
      contactModal.classList.add("show");
    });

    // CLOSE by ❌
    closeModal.addEventListener("click", () => {
      contactModal.classList.remove("show");
    });

    // CLOSE by clicking outside box
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("show");
      }
    });

  }
});
