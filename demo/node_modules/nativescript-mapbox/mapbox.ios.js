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
        this._ios = MGLMapView.alloc().initWithFrame(CGRectMake(0, 0, 1, 1));
    }
    MapBox.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate = MapViewDelegateImpl.initWithOwner(new WeakRef(this));
        this.notifyMapReady();
    };
    MapBox.prototype.updatePadding = function () {
        if (this.padding) {
            console.log("Not sure what to do");
        }
    };
    Object.defineProperty(MapBox.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapBox.prototype, "mapBox", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    MapBox.prototype.setCenter = function (arg) {
        return new Promise(function (resolve, reject) {
            try {
                var animated = arg.animated || true;
                var lat = arg.lat;
                var lng = arg.lng;
                var coordinate = CLLocationCoordinate2DMake(lat, lng);
                var zoom = arg.zoomLevel || this.mapBox.zoomLevel;
                this.mapBox.mapView.setCenterCoordinateZoomLevelAnimated(coordinate, zoom, animated);
                resolve();
            }
            catch (ex) {
                console.log("Error in mapbox.setCenter: " + ex);
                reject(ex);
            }
        });
    };
    ;
    MapBox.prototype.getZoomLevel = function () {
    };
    return MapBox;
}(mapbox_common_1.MapBox));
exports.MapBox = MapBox;
