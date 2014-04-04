/**
 * benCoding.Map
 * Copyright (c) 2009-2012 by Ben Bahrenburg. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import <MapKit/MapKit.h>
#import "JSONKit.h"

@interface BBGeoJSONParser : NSObject{
    NSString *jsonFilePath;
    NSMutableArray* jsonPolygons;
    NSString* jsonCode;
    NSString* jsonName;
}
@property (nonatomic, readonly) NSString* Code;
@property (nonatomic, readonly) NSString* Name;
@property (nonatomic, readonly) NSMutableArray* Polygons;

- (id) initWithFilePath:(NSString*)filePath;
- (void) Parse;

@end
