exports.init = function(mapView) {

	Ti.API.info(mapView);
	var debug = Titanium.UI.createButton({
		title : 'Toggle Grid'
	});

	debug.addEventListener('click', function(){
		mapView.debugTiles = !mapView.debugTiles;
	});
	
	var zoom = Titanium.UI.createButtonBar({
	    labels:['Zoom +', 'Zoom -'],
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR
	});
	
	zoom.addEventListener('click', function(e){
		mapView.setZoom(mapView.zoom + (e.index === 0 ? 1 : -1));
		Ti.API.info('Map Zoomed to: ' + mapView.zoom);
	});

	var center = Titanium.UI.createButton({
		title: 'Center'
	});
	
	center.addEventListener('click', function(){
		mapView.setCenterLatLng([18.467354,-91.903534]);
	})

	var cancel = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
	});

	flexSpace = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	var toolbar = Titanium.UI.iOS.createToolbar({
		items : [debug, flexSpace, zoom, flexSpace, center],
		bottom : 0,
		borderTop : true,
		borderBottom : false
	});
	
	return toolbar;
}