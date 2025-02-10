$(document).ready(function () {
  function nav() {
    $(".nav-toggle").click(function () {
      $(".nav").toggleClass("open");
    });
  }

  nav();
});
document.addEventListener("DOMContentLoaded", function () {
  // 1. Défilement  du menu
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // 2. Slider
  let slides = document.querySelectorAll(".banner li");
  let currentIndex = 0;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
  }

  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // 3. Carte LeafletJS
  let mapContainer = document.createElement("div");
  mapContainer.id = "map";
  mapContainer.style = "width: 100%; height: 300px; margin-bottom: 20px;";
  document
    .getElementById("contact")
    .insertBefore(mapContainer, document.querySelector("#contact .wrapper"));

  let map = L.map("map").setView([45.5234, -73.5221], 13); // Longueuil

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([45.5234, -73.5221])
    .addTo(map)
    .bindPopup("Nous sommes ici !")
    .openPopup();
});
