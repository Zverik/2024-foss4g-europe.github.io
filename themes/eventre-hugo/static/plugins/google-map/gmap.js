window.marker = null;

function initialize() {
  var map;
  var latitude = $('#map_canvas').attr('data-latitude');
  var longitude = $('#map_canvas').attr('data-longitude');
  var mapMarker = $('#map_canvas').attr('data-marker');
  var mapMarkerName = $('#map_canvas').attr('data-marker-name');

    var map = L.map('map_canvas', {
        scrollWheelZoom: false
    }).setView([latitude, longitude], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);
    var marker = L.marker([latitude, longitude]).addTo(map);
    if (mapMarkerName) marker.bindPopup(mapMarkerName);
}
var map = document.getElementById('map_canvas');
if (map != null) {
  window.addEventListener('load', initialize);
}
