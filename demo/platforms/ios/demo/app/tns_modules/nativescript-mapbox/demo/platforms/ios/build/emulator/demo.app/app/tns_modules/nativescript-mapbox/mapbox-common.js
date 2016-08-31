"use strict";
var view_1 = require("ui/core/view");
var dependency_observable_1 = require("ui/core/dependency-observable");
var MAP_BOX = "MapBox";
function onMapPropertyChanged(data) {
    var mapBox = data.object;
}
function onPaddingPropertyChanged(data) {
    var mapBox = data.object;
    mapBox.updatePadding();
}
var MapBox = (function (_super) {
    __extends(MapBox, _super);
    function MapBox() {
        _super.apply(this, arguments);
    }
    // Object.defineProperty(MapBox.prototype, "latitude", {
    //     get: function () {
    //         return this._getValue(MapBox.latitudeProperty);
    //     },
    //     set: function (value) {
    //         this._setValue(MapBox.latitudeProperty, parseFloat(value));
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // Object.defineProperty(MapBox.prototype, "longitude", {
    //     get: function () {
    //         return this._getValue(MapBox.longitudeProperty);
    //     },
    //     set: function (value) {
    //         this._setValue(MapBox.latitudeProperty, parseFloat(value));
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // Object.defineProperty(MapBox.prototype, "zoom", {
    //     get: function () {
    //         return this._getValue(MapBox.zoomProperty);
    //     },
    //     set: function (value) {
    //         this._setValue(MapBox.zoomProperty, parseFloat(value));
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // Object.defineProperty(MapBox.prototype, "padding", {
    //     get: function () {
    //         return this._getValue(MapBox.paddingProperty);
    //     },
    //     set: function (value) {
    //         this._setValue(MapBox.paddingProperty, this._transformPadding(value));
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // MapBox.prototype._transformPadding = function (value) {
    //     if (!Array.isArray(value)) {
    //         value = String(value).split(',').map(function (v) {
    //             return parseInt(v, 10);
    //         });
    //     }
    //     if (value.length === 4) {
    //         return value;
    //     }
    //     else {
    //         return [0, 0, 0, 0];
    //     }
    // };
    MapBox.prototype.notifyMapReady = function () {
        this.notify({ eventName: MapBox.mapReadyEvent, object: this, gMap: this.mapBox });
    };
    MapBox.mapReadyEvent = "mapReady";
    // MapBox.latitudeProperty = new dependency_observable_1.Property("latitude", MAP_BOX, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    // MapBox.longitudeProperty = new dependency_observable_1.Property("longitude", MAP_BOX, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    // MapBox.zoomProperty = new dependency_observable_1.Property("zoom", MAP_BOX, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onMapPropertyChanged));
    // MapBox.paddingProperty = new dependency_observable_1.Property("padding", MAP_BOX, new dependency_observable_1.PropertyMetadata(0, dependency_observable_1.PropertyMetadataSettings.None, onPaddingPropertyChanged));
    return MapBox;
}(view_1.View));
exports.MapBox = MapBox;

// var view = require("ui/core/view");

// var mapbox = (function (_super) {
//   __extends(mapbox, _super);
//   function mapbox() {
//     _super.apply(this, arguments);
//   }
//   return mapbox;
// }(view.View));

// module.exports = mapbox;