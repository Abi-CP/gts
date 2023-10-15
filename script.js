function typedjs() {
  var typed = new Typed("#typed", {
    strings: [
      "Business Continuity Planning (BCP)",
      "Disaster Recovery (DR)",
      "IT Risk and Governance",
      "Internet of Things (IoT)",
      "Big Data",
      "Resourcing",
      "IT Cloud Infrastructure",
      "Quantum Computing",
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Blockchain",
    ],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });
}

typedjs();

let vh = window.visualViewport.height / 100;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 3 * vh) {
    nav.classList.add("active");
  } else nav.classList.remove("active");
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

console.log("js loaded");
