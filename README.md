# Mapbox IOS SDK Wrapper for Titanium

Uses the [Mapbox iOS SDK](https://github.com/mapbox/mapbox-ios-sdk) `develop` branch.

## Use

Put the [compiled zip](https://github.com/adampax/titanium-mapbox/tree/master/dist) in your project, and add a reference in tiapp.xml. Built using Ti SDK 3.1.3GA, tested on iOS 7.

### Example

```javascript
var mapbox = require('com.polancomedia.mapbox');

var mapView = mapbox.createView({
    map: 'control-room',
    //map: 'road-trip',
    minZoom: 0,
    maxZoom: 6,
    zoom: 10,
    centerLatLng: [20.7972,-88.1598],
    width: Ti.UI.FILL,
    height: Ti.UI.FILL
});

win.add(mapView);
win.open();
```

See more examples in the `example` folder.

### Sample Maps
The `example` folder contains two sample mbtiles maps:

#### control-room
* Zoom levels 0 through 6
* Full-world coverage

#### road-trip
* Zoom levels 7 through 12
* Only contains subset of world coverage

## Properties

#### map
* Required, path to local mbtiles file or an online MapBox or TileStream id that looks something like: _userName.map-szwegi5m_.

#### debugTiles
* Optional, defaults to false.
* Show grid with tile info to help with debugging.

#### hideAttribution
* Optional, defaults to false.
* Displays info button in corner of map.
* See Mapbox [Terms and Conditions](https://www.mapbox.com/mapbox-ios-sdk/#attribution) for attribution info.

#### userLocation
* Optional, defaults to false.
* Displays the user's location on map.

## Methods

#### setDebugTiles(true)
* Boolean, toggles the debug grid on the map

#### setZoom(4)
* Zoom the map. Accepts a float to set the zoom level

#### setCenterLatLng([18.467354,-91.903534])
* Centers the map on a latitude and longitude.

## Events

#### 'mapViewRegionDidChange'
* Fires any time the map moves

#### 'singleTapOnMap'
* Returns coordinates of where the map was single tapped as `latitude` and `longitude`.

## Annotations
Note: Anntotations are a work in progress.  Currently, annotations are added like this:

mapView.setAnnotation({
	latitude: 18.467354,
	longitude: -91.903534,
	title: 'Test Title',
	subtitle: 'Subtitle'
});
````

## Todos
* Need to verify that min, max and default zoom levels work for maps that don't contain full-world (like road-trip).
* ~~Add support for remote maps~~
* Add support for markers and other SDK items
* Contributions welcome

## About
* Me: [Adam Paxton](http://adampaxton.com) 
* Twitter: [@adampax](http://twitter.com/adampax)
* Work: [Polanco Media, LLC](http://polancomedia.com)

## License
MIT License
Copyright (c) 2013 Polanco Media, LLC

Uses MapBox iOS SDK, (c) 2008-2013 MapBox and Route-Me Contributors

