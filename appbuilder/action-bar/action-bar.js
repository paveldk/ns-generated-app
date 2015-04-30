'use strict';
var frame = require("ui/frame"),
    gestures = require("ui/gestures");

function viewLoaded(args) {
    var view = args.object;
    //view.bindingContext = { actionBarTitle: view.title };
}
exports.viewLoaded = viewLoaded;

function backTap(args) {
    frame.topmost().goBack();
}
exports.backTap = backTap;
