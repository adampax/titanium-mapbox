exports.win = function(args) {
	//create a map with online map source
	var win = Ti.UI.createWindow({
		title : 'Polygon',
		backgroundColor : 'white'
	});

	var mapbox = require('com.polancomedia.mapbox');

	var mapView = mapbox.createView({
		map : 'examples.map-zswgei2n',
		minZoom : 1,
		maxZoom : 18,
		zoom :5,
		centerLatLng : [35.206058, -97.442350],
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});

	win.add(mapView);

	//Polygon object inspired by Ben Bahrenburg's version:
	//https://github.com/benbahrenburg/benCoding.Map/blob/master/documentation/index.md

  //more info on line width, join, dash length/phases, etc:
	//https://developer.apple.com/library/ios/documentation/GraphicsImaging/Reference/CAShapeLayer_class/Reference/Reference.html#//apple_ref/occ/instp/CAShapeLayer/lineDashPhase
	var ok = {
		title : 'Oklahoma',
		fillColor : '#880000',
		fillOpacity : 0.5,
		lineWidth : 10.4,
		lineColor : '#000000',
		lineOpacity: 0.8,
		//lineDashLengths: [10, 7],
		//lineDashPhase: 2.0,
		//scaleLineDash: true,
		lineJoin: mapbox.LINE_JOIN_ROUND,
		points : [{
			longitude : -100.087706,
			latitude : 37.000263
		}, {
			longitude : -94.616242,
			latitude : 37.000263
		}, {
			longitude : -94.616242,
			latitude : 36.501861
		}, {
			longitude : -94.430026,
			latitude : 35.395519
		}, {
			longitude : -94.484796,
			latitude : 33.637421
		}, {
			longitude : -94.868182,
			latitude : 33.74696
		}, {
			longitude : -94.966767,
			latitude : 33.861976
		}, {
			longitude : -95.224183,
			latitude : 33.960561
		}, {
			longitude : -95.289906,
			latitude : 33.87293
		}, {
			longitude : -95.547322,
			latitude : 33.878407
		}, {
			longitude : -95.602092,
			latitude : 33.933176
		}, {
			longitude : -95.8376,
			latitude : 33.834591
		}, {
			longitude : -95.936185,
			latitude : 33.889361
		}, {
			longitude : -96.149786,
			latitude : 33.840068
		}, {
			longitude : -96.346956,
			latitude : 33.686714
		}, {
			longitude : -96.423633,
			latitude : 33.774345
		}, {
			longitude : -96.631756,
			latitude : 33.845545
		}, {
			longitude : -96.850834,
			latitude : 33.845545
		}, {
			longitude : -96.922034,
			latitude : 33.960561
		}, {
			longitude : -97.173974,
			latitude : 33.736006
		}, {
			longitude : -97.256128,
			latitude : 33.861976
		}, {
			longitude : -97.371143,
			latitude : 33.823637
		}, {
			longitude : -97.458774,
			latitude : 33.905791
		}, {
			longitude : -97.694283,
			latitude : 33.982469
		}, {
			longitude : -97.869545,
			latitude : 33.851022
		}, {
			longitude : -97.946222,
			latitude : 33.987946
		}, {
			longitude : -98.088623,
			latitude : 34.004376
		}, {
			longitude : -98.170777,
			latitude : 34.113915
		}, {
			longitude : -98.36247,
			latitude : 34.157731
		}, {
			longitude : -98.488439,
			latitude : 34.064623
		}, {
			longitude : -98.570593,
			latitude : 34.146777
		}, {
			longitude : -98.767763,
			latitude : 34.135823
		}, {
			longitude : -98.986841,
			latitude : 34.223454
		}, {
			longitude : -99.189488,
			latitude : 34.2125
		}, {
			longitude : -99.260688,
			latitude : 34.404193
		}, {
			longitude : -99.57835,
			latitude : 34.415147
		}, {
			longitude : -99.698843,
			latitude : 34.382285
		}, {
			longitude : -99.923398,
			latitude : 34.573978
		}, {
			longitude : -100.000075,
			latitude : 34.563024
		}, {
			longitude : -100.000075,
			latitude : 36.501861
		}, {
			longitude : -101.812942,
			latitude : 36.501861
		}, {
			longitude : -103.001438,
			latitude : 36.501861
		}, {
			longitude : -103.001438,
			latitude : 37.000263
		}, {
			longitude : -102.042974,
			latitude : 36.994786
		}, {
			longitude : -100.087706,
			latitude : 37.000263
		}]
	};


	mapView.addShape(ok);
	mapView.addEventListener('tapOnAnnotation', function(e) {
		Ti.API.info(e);
	});

	return win;
};
