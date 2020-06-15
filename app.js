const ACCESS_TOKEN = 'pk.eyJ1IjoiY3RsbjEyIiwiYSI6ImNqeXNmdHM3aDBqdWszbXFkZGMwbzVrOW8ifQ.eFzPyDO8p9vXfM_LRpn6ag';
const MAPBOX_STYLE = 'mapbox://styles/ctln12/ckbgp9j1z100f1inv62wp7raa/draft';

mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  style: MAPBOX_STYLE,
  center: [-77.04, 38.907],
  zoom: 14
});
