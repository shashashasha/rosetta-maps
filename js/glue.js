var moving = false;

// listen to polymaps interaction
pmap.on("move", pmapHandler);
function pmapHandler() {
	if (moving) {
		return;
	}
	moving = true;

	var center = pmap.center(),
		zoom = pmap.zoom();

	console.log(zoom);
	gmap.setCenter(new google.maps.LatLng(center.lat, center.lon));
	gmap.setZoom(Math.round(zoom));

	mmap.setCenterZoom(new MM.Location(center.lat, center.lon), zoom);

	// leaflet needs rounded zoom levels
	lmap.setView(new L.LatLng(center.lat, center.lon), Math.round(zoom));

	moving = false;
}

// listen to google maps interaction
google.maps.event.addListener(gmap, "drag", gmapHandler);
google.maps.event.addListener(gmap, "zoom_changed", gmapHandler);
function gmapHandler() {
	if (moving) {
		return;
	}
	moving = true;

	var center = gmap.getCenter(),
		zoom = gmap.getZoom();

	pmap.center({ lat: center.lat(), lon: center.lng()})
		.zoom(zoom);

	mmap.setCenterZoom(new MM.Location(center.lat(), center.lng()), zoom);

	lmap.setView(new L.LatLng(center.lat(), center.lng()), zoom);

	moving = false;
}

// listen to modestmaps interaction
mmap.addCallback('drawn', mmapHandler);
function mmapHandler() {
	if (moving) {
		return;
	}
	moving = true;
	
	var center = mmap.getCenter(),
		zoom = mmap.getZoom();

	gmap.setCenter(new google.maps.LatLng(center.lat, center.lon));
	gmap.setZoom(Math.round(zoom));	

	pmap.center(center).zoom(zoom);

	lmap.setView(new L.LatLng(center.lat, center.lon), Math.round(zoom));

	moving = false;
}

// listen to leaflet interaction
lmap.on('drag', lmapHandler);
lmap.on('zoomend', lmapHandler);
function lmapHandler() {
	if (moving) {
		return;
	}
	moving = true;
	
	var center = lmap.getCenter(),
		zoom = lmap.getZoom();

	gmap.setCenter(new google.maps.LatLng(center.lat, center.lng));
	gmap.setZoom(Math.round(zoom));

	pmap.center({ lat: center.lat, lon: center.lng }).zoom(zoom);

	mmap.setCenterZoom(new MM.Location(center.lat, center.lng), zoom);

	moving = false;
}