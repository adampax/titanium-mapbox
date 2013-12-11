exports.win = function(args){
	//This example uses an offline map file that does not have coverage for the full globe.
	var win = Ti.UI.createWindow({
		title: 'Offline Partial Map',
		backgroundColor:'white'
	});
	
	var mapbox = require('com.polancomedia.mapbox');
	
	var mapView = mapbox.createView({
		map: '/maps/road-trip',
		minZoom: 7,
		maxZoom: 12,
		zoom: 9,
		centerLatLng: [18.467354,-91.903534],
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		debugTiles:true
	});
	
	win.add(mapView);
	
	win.add(require('toolbar').init(mapView));
	
	return win;
}

