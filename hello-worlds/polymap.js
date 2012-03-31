// url to the tiles
var baseURL = "http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg";

// "import" the namespace
var po = org.polymaps;

// select the map div
var div = document.getElementById("map-polymaps");

// create an svg element
var svg = po.svg("svg");
div.appendChild(svg);

// makes a polymaps map
var pmap = po.map()
	.container(svg)
	.zoom(2)
	.add(po.interact());

// add image tiles
pmap.add(po.image()
	.url(baseURL));

pmap.add(po.compass());