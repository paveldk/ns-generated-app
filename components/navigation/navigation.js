'use strict';
var frameModule = require('ui/frame'),
    navigationViewModel = require('./navigation-view-model');

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = navigationViewModel;
}

function menuItemTap(args) {
    var navigateToPath = navigationViewModel.menuItems[args.index].modulePath;

    frameModule.topmost().navigate(navigateToPath);
}

exports.pageLoaded = pageLoaded;
exports.menuItemTap = menuItemTap;
