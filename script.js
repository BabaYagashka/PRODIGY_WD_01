window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  // Add the 'scrolled' class when user scrolls down more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
