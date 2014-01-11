/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "ComPolancomediaMapboxView.h"
#import "TiUtils.h"
#import "Mapbox.h"

@implementation ComPolancomediaMapboxView

#pragma mark Lifecycle

-(void)initializeState
{
	// This method is called right after allocating the view and
	// is useful for initializing anything specific to the view
	
	[super initializeState];
	
	NSLog(@"[VIEW LIFECYCLE EVENT] initializeState");
}

-(void)configurationSet
{
	// This method is called right after all view properties have
	// been initialized from the view proxy. If the view is dependent
	// upon any properties being initialized then this is the method
	// to implement the dependent functionality.
	
	[super configurationSet];
	
	NSLog(@"[VIEW LIFECYCLE EVENT] configurationSet");
}

-(void)dealloc
{
    RELEASE_TO_NIL(mapView);
    [super dealloc];
    
    NSLog(@"[VIEW LIFECYCLE EVENT] dealloc");
}

-(void)willMoveToSuperview:(UIView *)newSuperview
{
	NSLog(@"[VIEW LIFECYCLE EVENT] willMoveToSuperview");
}

-(void)addMap:(CGRect)bounds
{
    if(mapView==nil)
    {
        NSLog(@"[VIEW LIFECYCLE EVENT] addMap");
        
        NSString *mapPath = [TiUtils stringValue:[self.proxy valueForKey:@"map"]];
        id mapSource;
        
        //check if file exists, otherwise try to add remote map
        NSString *mapInResourcesFolder = [[[NSBundle mainBundle] resourcePath] stringByAppendingPathComponent:[mapPath stringByAppendingString:@".mbtiles"]];
        BOOL fileExists = [[NSFileManager defaultManager] fileExistsAtPath:mapInResourcesFolder];
        NSLog(@"mapFile exists: %i", fileExists);
        
        if(fileExists)
        {
            mapSource = [[RMMBTilesSource alloc] initWithTileSetResource:mapPath ofType:@"mbtiles"];
            
        } else
        {
            mapSource = [[RMMapBoxSource alloc] initWithMapID:mapPath];

        }
        
        mapView = [[RMMapView alloc] initWithFrame:bounds andTilesource:mapSource];
        mapView.zoom = [TiUtils floatValue:[self.proxy valueForKey:@"zoom"]];
        mapView.minZoom = [TiUtils floatValue:[self.proxy valueForKey:@"minZoom"]];
        mapView.maxZoom = [TiUtils floatValue:[self.proxy valueForKey:@"maxZoom"]];
        mapView.centerCoordinate = CLLocationCoordinate2DMake([TiUtils floatValue:[[self.proxy valueForKey:@"centerLatLng"]  objectAtIndex:0]],[TiUtils floatValue:[[self.proxy valueForKey:@"centerLatLng"]  objectAtIndex:1]]);
        
       /**
        mapView = [[RMMapView alloc]
                   initWithFrame:[self bounds]
                   andTilesource:mapSource
                   centerCoordinate:CLLocationCoordinate2DMake([TiUtils floatValue:[[self.proxy valueForKey:@"centerLatLng"]  objectAtIndex:0]],[TiUtils floatValue:[[self.proxy valueForKey:@"centerLatLng"]  objectAtIndex:1]])
                   zoomLevel:[TiUtils floatValue:[self.proxy valueForKey:@"zoom"]]-1
                   maxZoomLevel:[TiUtils floatValue:[self.proxy valueForKey:@"maxZoom"]]
                   minZoomLevel:[TiUtils floatValue:[self.proxy valueForKey:@"minZoom"]]
                   backgroundImage:Nil
                   ];
          */
        
        mapView.debugTiles = [self.proxy valueForKey:@"debugTiles"];
        mapView.hideAttribution = [self.proxy valueForKey:@"hideAttribution"];
        
        mapView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
        
        mapView.adjustTilesForRetinaDisplay = YES; // these tiles aren't designed specifically for retina, so make them legible
        
        mapView.showsUserLocation = [self.proxy valueForKey:@"userLocation"];
        
        [self addSubview:mapView];
        mapView.delegate = self;
    }
}

-(void)frameSizeChanged:(CGRect)frame bounds:(CGRect)bounds
{
    NSLog(@"[VIEW LIFECYCLE EVENT] frameSizeChanged");
    if (mapView!=nil)
    {
        [TiUtils setView:mapView positionRect:bounds];
    }
    else
    {
        //create the mapView after frameSizeChanged so that zoom will work correctly for maps smaller than the view
        [self addMap:bounds];
    }
}

#pragma mark Property Setters

-(void)setCenterLatLng_:(id)center
{
    mapView.centerCoordinate = CLLocationCoordinate2DMake([TiUtils floatValue:[center objectAtIndex:0]],[TiUtils floatValue:[center objectAtIndex:1]]);

}

-(void)setDebugTiles_:(id)debug
{
	mapView.debugTiles = [TiUtils boolValue:debug];
}

-(void)setZoom_:(id)zoom
{
    [mapView setZoom:[TiUtils floatValue:zoom] animated:true];
}

#pragma mark Events

- (void)mapViewRegionDidChange:(RMMapView *)map
{
	if ([self.proxy _hasListeners:@"mapViewRegionDidChange"]) {
		[self.proxy fireEvent:@"mapViewRegionDidChange"];
	}
}

- (void)singleTapOnMap:(RMMapView *)mapView at:(CGPoint)point
{
	// The event listeners for a view are actually attached to the view proxy.
	// You must reference 'self.proxy' to get the proxy for this view
	
	// It is a good idea to check if there are listeners for the event that
	// is about to fired. There could be zero or multiple listeners for the
	// specified event.
	if ([self.proxy _hasListeners:@"singleTapOnMap"]) {
        
		NSDictionary *event = [NSDictionary dictionaryWithObjectsAndKeys:
                               [NSString stringWithFormat:@"%f",[mapView pixelToCoordinate:point].longitude],@"longitude",
                               [NSString stringWithFormat:@"%f",[mapView pixelToCoordinate:point].latitude],@"latitude",
                               nil
                               ];
        
		[self.proxy fireEvent:@"singleTapOnMap" withObject:event];
	}
}

@end
