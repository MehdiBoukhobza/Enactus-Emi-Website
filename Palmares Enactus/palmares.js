window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

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
