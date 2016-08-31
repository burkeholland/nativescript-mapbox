"use strict";
var mapbox_common_1 = require("./mapbox-common");
var fs = require("file-system");
var imgSrc = require("image-source");
var MapViewDelegateImpl = (function (_super) {
    __extends(MapViewDelegateImpl, _super);
    function MapViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    MapViewDelegateImpl.initWithOwner = function (owner) {
        var handler = MapViewDelegateImpl.new();
        handler._owner = owner;
        return handler;
    };
    MapViewDelegateImpl.ObjCProtocols = [MGLMapViewDelegate];
    return MapViewDelegateImpl;
}(NSObject));
var MapBox = (function (_super) {
    __extends(MapBox, _super);
    function MapBox() {
        _super.call(this);
        this._ios = MGLMapView.alloc().initWithFrame(CGRectZero);
    }
    MapBox.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate = MapViewDelegateImpl.initWithOwner(new WeakRef(this));
        this.notifyMapReady();
    };
    // MapBox.prototype.updatePadding = function () {
    //     if (this.padding) {
    //         console.log("Not sure what to do");
    //     }
    // };
    Object.defineProperty(MapBox.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    // Object.defineProperty(MapBox.prototype, "mapBox", {
    //     get: function () {
    //         return this._ios;
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // return MapBox;
}(mapbox_common_1.MapBox));
exports.MapBox = MapBox;

// var mapbox_common = require("./mapbox-common");
// var fs = require("file-system");
// var imgSrc = require("image-source");

// (function() {
//   // need to kick this off otherwise offline stuff won't work without first showing a map
//   MGLOfflineStorage.sharedOfflineStorage();
// })();

// var MapViewDelegateImpl = (function (_super) {
//     __extends(MapViewDelegateImpl, _super);
//     function MapViewDelegateImpl() {
//         _super.apply(this, arguments);
//     }
//     MapViewDelegateImpl.initWithOwner = function (owner) {
//         var handler = MapViewDelegateImpl.new();
//         handler._owner = owner;
//         return handler;
//     };
//     MapViewDelegateImpl.ObjCProtocols = [MGLMapViewDelegate];
//     return MapViewDelegateImpl;
// }(NSObject));

// var mapbox = (function(_super) {
//   __extends(mapbox, _super);
//   function mapbox() {
//     _super.call(this);
//     this._ios = MGLMapView.alloc().initWithFrame(CGRectZero);
//     // this._ios = MGLMapView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));

//     mapbox.prototype.onLoaded = function() {
//       _super.prototype.onLoaded.call(this);
//       this._ios.delegate = this._delegate = MapViewDelegateImpl.initWithOwner(new WeakRef(this));
//     }
//   }  
//   return mapbox;
// }(mapbox_common));

// module.exports = mapbox;