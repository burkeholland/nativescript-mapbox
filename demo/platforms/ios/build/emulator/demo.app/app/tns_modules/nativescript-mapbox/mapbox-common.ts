import { MapBox as IMapBox } from "nativescript-mapbox";
import { View } from "ui/core/view";
import { Property, PropertyChangeData, PropertyMetadata, PropertyMetadataSettings } from "ui/core/dependency-observable";

let MAP_BOX: string = "MapBox";

function onMapPropertyChanged(data: PropertyChangeData) {
    let mapBox = <MapBox>data.object;
}

function onPaddingPropertyChanged(data: PropertyChangeData) {
    let mapBox = <MapBox>data.object;
    mapBox.updatePadding();
}

export abstract class MapBox extends View implements IMapBox {

    public mapBox: any;

    public static mapReadyEvent: string = "mapReady";

    public static latitudeProperty = new Property ("latitude", MAP_BOX, new PropertyMetadata(0, PropertyMetadataSettings.None, onMapPropertyChanged));
    public static longitudeProperty = new Property ("longitude", MAP_BOX, new PropertyMetadata(0, PropertyMetadataSettings.None, onMapPropertyChanged));
    public static zoomProperty = new Property ("zoom", MAP_BOX, new PropertyMetadata(0, PropertyMetadataSettings.None, onMapPropertyChanged));
    public static paddingProperty = new Property("padding", MAP_BOX, new PropertyMetadata(0, PropertyMetadataSettings.None, onPaddingPropertyChanged));

    get latitude() {
        return this._getValue(MapBox.latitudeProperty);
    }

    set latitude(value: any) {
        this._setValue(MapBox.latitudeProperty, parseFloat(value));
    }

    get longitude() {
        return this._getValue(MapBox.longitudeProperty);
    }

    set longitude(value: any) {
        this._setValue(MapBox.latitudeProperty, parseFloat(value));
    }

    get zoom() {
        return this._getValue(MapBox.zoomProperty);
    }

    set zoom(value: any) {
        this._setValue(MapBox.zoomProperty, parseFloat(value));
    }

    get padding() {
        return this._getValue(MapBox.paddingProperty);
    }

    set padding(value: any) {
        this._setValue(MapBox.paddingProperty, this._transformPadding(value));
    }

     private _transformPadding(value) {
        if (!Array.isArray(value)) {
            value = String(value).split(',').map(function(v) {
                return parseInt(v, 10);
            });
        }
        if (value.length === 4) {
            return value;
        } else {
            return [0, 0, 0, 0];
        }
    }

    public abstract updatePadding(): void;

    notifyMapReady() {
        this.notify({ eventName: MapBox.mapReadyEvent, object: this, gMap: this.mapBox });
    }
}

// var mapbox = {};

// mapbox.MapStyle = {
//   DARK: "dark",
//   EMERALD: "emerald",
//   HYBRID: "hybrid",
//   LIGHT: "light",
//   SATELLITE: "satellite",
//   STREETS: "streets"
// };

// mapbox.defaults = {
//   style: 'streets',
//   margins: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0
//   },
//   zoomLevel: 0, // 0 (a big part of the world) to 20 (streetlevel)
//   showUserLocation: false, // true requires adding `NSLocationWhenInUseUsageDescription` or `NSLocationAlwaysUsageDescription` in the .plist
//   hideLogo: false, // required for the 'starter' plan
//   hideAttribution: true,
//   hideCompass: false,
//   disableRotation: false,
//   disableScroll: false,
//   disableZoom: false,
//   disableTilt: false
// };

// mapbox.merge = function merge(obj1, obj2){ // Our merge function
//   var result = {}; // return result
//   for(var i in obj1){      // for every property in obj1
//     if((i in obj2) && (typeof obj1[i] === "object") && (i !== null)){
//       result[i] = merge(obj1[i],obj2[i]); // if it's an object, merge
//     }else{
//       result[i] = obj1[i]; // add it to result
//     }
//   }
//   for(i in obj2){ // add the remaining properties from object 2
//     if(i in result){ //conflict
//       continue;
//     }
//     result[i] = obj2[i];
//   }
//   return result;
// };

// mapbox.requestFineLocationPermission = function () {
//   return new Promise(function (resolve) {
//     resolve(true);
//   });
// };

// mapbox.hasFineLocationPermission = function () {
//   return new Promise(function (resolve) {
//     resolve(true);
//   });
// };

// mapbox.mapView = null;
// mapbox.mapboxMap = null;

// module.exports = mapbox;