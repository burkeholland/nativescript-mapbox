"use strict";
var main_view_model_1 = require("./main-view-model");
MGLAccountManager.setAccessToken("sk.eyJ1IjoiYnVya2Vob2xsYW5kIiwiYSI6ImNpcXh3NXd3NDAxcDJmbG04M2FxNW5zc3YifQ.kVNHOX6UvgsTPS4BJebtLg");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=main-page.js.map