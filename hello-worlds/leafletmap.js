// url to the tiles
var baseURL = "http://s3.amazonaws.com/com.modestmaps.bluemarble/{z}-r{y}-c{x}.jpg";

var lmap = new L.Map('map-leaflet');

// create tile layer
var blueMarble = new L.TileLayer(baseURL);

lmap.setView(new L.LatLng(37.8, -122.45), 2);
lmap.addLayer(blueMarble);