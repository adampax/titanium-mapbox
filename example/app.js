// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var mapbox = require('com.polancomedia.mapbox');

var mapView = mapbox.createView({
	map: 'control-room',
	//map: 'road-trip',
	minZoom: 0, //8,
	maxZoom: 6, //10,
	zoom: 4,
	centerLatLng: [18.467354,-91.903534],
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});

win.add(mapView);
win.open();