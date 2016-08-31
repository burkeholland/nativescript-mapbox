import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

declare var MGLAccountManager: any;

MGLAccountManager.setAccessToken("sk.eyJ1IjoiYnVya2Vob2xsYW5kIiwiYSI6ImNpcXh3NXd3NDAxcDJmbG04M2FxNW5zc3YifQ.kVNHOX6UvgsTPS4BJebtLg");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}