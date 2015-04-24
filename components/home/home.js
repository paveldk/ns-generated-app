'use strict';
var frameModule = require('ui/frame'),

    // additional requires
    viewModel = require('./home-view-model');

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;
    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;
