function Hope(myname) {
  let box = document.getElementById("modal_" + myname);
  let openBox = document.getElementById("omodal_" + myname);

  // let closeBox = document.getElementById("close");
  let closeBox = document.getElementsByClassName("close-icon");
  let universe = document.getElementById("Universe");
  let bigDiv = document.getElementById("bigdiv");

  for (var i = 0; i < closeBox.length; i++)
    closeBox[i].addEventListener("click", close);

  openBox.addEventListener("click", open);

  window.addEventListener("click", close_2);

  function close_2(event) {
    console.log(event.target);
    if (event.target == bigDiv) {
      close();
    }
  }

  function open() {
    box.style.display = "block";
    box.scrollIntoView();
    universe.style.filter = "grayscale(80%)";
    universe.style.filter = "blur(1.5px)";
    bigDiv.style.display = "block";
  }

  function close() {
    box.style.display = "none";
    universe.style.filter = "grayscale(0%)";
    bigDiv.style.display = "none";
  }
}

let projects = [
  "smartclean",
  "ocuero",
  "skillboost",
  "silk",
  "slight",
  "freedge",
  "iterra",
  "accesswater",
  "safa",
  "argacare",
  "nuwood",
  "dif2",
];

for (let i = 0; i < projects.length; i++) {
  Hope(projects[i]);
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavBar").style.top = "0";
  } else {
    document.getElementById("myNavBar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

var dropdownTimeout;

document.getElementById("about").addEventListener("mouseenter", function () {
  document.getElementById("dropdown").style.display = "block";
});

document.getElementById("about").addEventListener("mouseleave", function () {
  dropdownTimeout = setTimeout(function () {
    document.getElementById("dropdown").style.display = "none";
  }, 500);
});

document.getElementById("dropdown").addEventListener("mouseenter", function () {
  clearTimeout(dropdownTimeout);
});

document.getElementById("dropdown").addEventListener("mouseleave", function () {
  document.getElementById("dropdown").style.display = "none";
});
