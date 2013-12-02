exports.win = function(args){
	//create a map with online map source
	var win = Ti.UI.createWindow({
		title: 'Online Map',
		backgroundColor:'white'
	});
	
	var mapbox = require('com.polancomedia.mapbox');
	
	var mapView = mapbox.createView({
		map: 'examples.map-zswgei2n',
		minZoom: 0, //8,
		maxZoom: 6, //10,
		zoom: 4,
		centerLatLng: [18.467354,-91.903534],
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		hideAttribution: true,  //defaults to: false. See Mapbox terms and conditions before removing
		debugTiles:true
	});
	
	win.add(mapView);
	return win;
}

