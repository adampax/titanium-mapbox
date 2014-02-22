/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "ComPolancomediaMapboxViewProxy.h"
#import "ComPolancomediaMapboxView.h"
#import "TiUtils.h"

@implementation ComPolancomediaMapboxViewProxy

-(void)addAnnotation:(id)arg
{
    ENSURE_SINGLE_ARG(arg, NSDictionary);
    TiThreadPerformOnMainThread(^{[(ComPolancomediaMapboxView*)[self view] addAnnotation:arg];}, NO);
}

@end
