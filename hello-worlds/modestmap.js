// url to the tiles
var baseURL = "http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg";

// "import" the namespace
var MM = com.modestmaps;

var provider = new MM.TemplatedMapProvider("http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg");

var mmap = new MM.Map('map-modestmaps', provider);

mmap.setCenterZoom(new MM.Location(37.8, -122.45), 2);