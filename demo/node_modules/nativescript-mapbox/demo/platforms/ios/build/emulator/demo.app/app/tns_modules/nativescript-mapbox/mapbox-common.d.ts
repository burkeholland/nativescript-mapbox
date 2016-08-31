import { MapBox as IMapBox } from "mapbox";
import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
export declare class MapBox extends View implements IMapBox {
    mapbox: any;
    static latitudeProperty: Property;
    static longitudeProperty: Property;
    static zoomProperty: Property;
    constructor(options?: IMapBox.Options);
    latitude: any;
    longitude: any;
    zoom: any;
}
