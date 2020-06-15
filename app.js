const ACCESS_TOKEN = 'pk.eyJ1IjoiY3RsbjEyIiwiYSI6ImNqeXNmdHM3aDBqdWszbXFkZGMwbzVrOW8ifQ.eFzPyDO8p9vXfM_LRpn6ag';
const MAPBOX_STYLE = 'mapbox://styles/ctln12/ckbgp9j1z100f1inv62wp7raa/draft';

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-151.4435, -16.7613],
  zoom: 2
});

// Display map navigation controls
map.addControl(new mapboxgl.NavigationControl());

// Geocoder
// map.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
//   })
// );

// Markers
var geneva = new mapboxgl.Marker()
  .setLngLat([6.1432, 46.2044])
  .addTo(map);
var panama = new mapboxgl.Marker()
  .setLngLat([-80.7821, 8.5380])
  .addTo(map);
var marquesasIslands = new mapboxgl.Marker()
  .setLngLat([-139.0817, -9.7812])
  .addTo(map);
var societyIslands = new mapboxgl.Marker()
  .setLngLat([-151.4435, -16.7613])
  .addTo(map);
var cookIslands = new mapboxgl.Marker()
  .setLngLat([-159.7777, -21.2367])
  .addTo(map);
var tonga = new mapboxgl.Marker()
  .setLngLat([-175.1982, -21.1790])
  .addTo(map);
var fiji = new mapboxgl.Marker()
  .setLngLat([178.0650, -17.7134])
  .addTo(map);
var newCaledonia = new mapboxgl.Marker()
  .setLngLat([165.6180, -20.9043])
  .addTo(map);
var sydney = new mapboxgl.Marker()
  .setLngLat([151.2093, -33.8688])
  .addTo(map);
var newZealand = new mapboxgl.Marker()
  .setLngLat([172.6362, -43.5321])
  .addTo(map);
var singapor = new mapboxgl.Marker()
  .setLngLat([103.8198, 1.3521])
  .addTo(map);

// Add a GeoJSON line
map.on('load', function () {
  map.addSource('route', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [-80.7821, 8.5380],
          [-139.0817, -9.7812],
          [-151.4435, -16.7613],
          [-159.7777, -21.2367],
          [-175.1982, -21.1790],
          [178.0650-360, -17.7134],
          [165.6180-360, -20.9043],
          [151.2093-360, -33.8688]
        ]
      }
    }
  });
  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#3fb2ce',
      'line-width': 8
    }
  });
});

// Display popups
var genevaPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([6.1432, 46.2044])
  .setHTML('Geneva, Switzerland')
  .addTo(map);
var panamaPopup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([-80.7821, 8.5380])
.setHTML('Panama')
.addTo(map);
var marquesasPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-139.0817, -9.7812])
  .setHTML('Marquesas Islands')
  .addTo(map);
var societyPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-151.4435, -16.7613])
  .setHTML('Society Islands')
  .addTo(map);
var cookPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-159.7777, -21.2367])
  .setHTML('Cook Islands')
  .addTo(map);
var tongaPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-175.1982, -21.1790])
  .setHTML('Tonga')
  .addTo(map);
var fijiPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([178.0650, -17.7134])
  .setHTML('Fiji')
  .addTo(map);
var newCaledoniaPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([165.6180, -20.9043])
  .setHTML('New Caledonia')
  .addTo(map);
var sydneyPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([151.2093, -33.8688])
  .setHTML('Sydney, Australia')
  .addTo(map);
var newZealandPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([172.6362, -43.5321])
  .setHTML('Christchurch, New Zealand')
  .addTo(map);
var singaporPopup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([103.8198, 1.3521])
  .setHTML('Singapor')
  .addTo(map);

document.querySelectorAll('.mapboxgl-popup-close-button').forEach(button => button.innerText = '')
