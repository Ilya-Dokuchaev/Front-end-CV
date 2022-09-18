document.addEventListener("DOMContentLoaded", () => {
  const moon = document.getElementById("moon");
  const mountainsFront = document.getElementById("mountains_front");
  const mountainsBack = document.getElementById("mountains_back");
  const scrollText = document.getElementById("scroll");
  const mouseSvg = document.getElementById("mouse-svg");
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * 1.05 + "px";
    mountainsFront.style.bottom = value * 1.5 + "px";
    mountainsBack.style.top = value * 0.5 + "px";
    scrollText.style.marginRight = value * 1.5 + "px";
    mouseSvg.style.marginTop = value * 1.5 + "px";
  });

  const dark = document.querySelectorAll(".dark");
  const skillsBg = document.querySelectorAll(".circular-chart");

  toggle.addEventListener("click", () => {
    dark.forEach((b) => b.classList.toggle("dark-side"));
    skillsBg.forEach((d) => d.classList.toggle("circular-chart--active"));
  });
  let reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      elementTop < windowHeight - elementVisible
        ? reveals[i].classList.add("activated")
        : reveals[i].classList.remove("activated");
    }
  };
  window.addEventListener("scroll", reveal);

  let accordion = document.querySelector(".accordion");
  let items = accordion.querySelectorAll(".accordion__item");
  let title = accordion.querySelectorAll(".accordion__title");
  function toggleAccordion() {
    let thisItem = this.parentNode;

    items.forEach((item) => {
      if (thisItem == item) {
        // if this item is equal to the clicked item, open it.
        thisItem.classList.toggle("active-accordion");
        return;
      }
      // otherwise, remove the open class
      // item.classList.remove("active-accordion");
    });
  }
  title.forEach((question) =>
    question.addEventListener("click", toggleAccordion)
  );

  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
