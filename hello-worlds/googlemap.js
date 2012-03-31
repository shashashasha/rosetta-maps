// url to the tiles
var baseURL = "http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg";

var div = document.getElementById('map-googlemaps');

var options = {
	zoom: 2,
	center: new google.maps.LatLng(37.8, -122.45),
	mapTypeId: google.maps.MapTypeId.SATELLITE
}

var gmap = new google.maps.Map(div, options);