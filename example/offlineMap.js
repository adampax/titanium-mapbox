exports.win = function(args){
	//create a map with local mbtiles file that contains coverage of entire globe
	var win = Ti.UI.createWindow({
		title: 'Offline Map',
		backgroundColor:'white'
	});
	
	var mapbox = require('com.polancomedia.mapbox');
	
	var mapView = mapbox.createView({
		map: '/maps/control-room',
		minZoom: 0, //8,
		maxZoom: 6, //10,
		zoom: 4,
		centerLatLng: [18.467354,-91.903534],
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		hideAttribution: true,  //defaults to: false. See Mapbox terms and conditions before removing
		userLocation: true
	});
	
	win.add(mapView);

	mapView.setAnnotation([18.467354,-91.903534]);
	
	win.add(require('toolbar').init(mapView));

	//events
	mapView.addEventListener('singleTapOnMap', function(e){
		Ti.API.info('singleTapOnMap ' + JSON.stringify(e));
	});

	return win;
}

