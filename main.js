  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active"); // animate hamburger to X
  });

