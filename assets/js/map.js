document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("leaflet-map").setView([51.505, -0.09], 13); 

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map).bindPopup("Un joli endroit !").openPopup();
});
var map = L.map("leaflet-map", {
  zoomControl: false,
}).setView([51.505, -0.09], 13);
