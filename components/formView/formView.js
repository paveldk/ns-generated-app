'use strict';
var frameModule = require('ui/frame'),
    // additional requires
    viewModel = require('./formView-view-model');

function onfirstFormFormSubmit() {

}

function onfirstFormFormCancel() {

}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    viewModel.on(viewModel.events.firstFormCancel, onfirstFormFormSubmit);

    viewModel.on(viewModel.events.firstFormCancel, onfirstFormFormCancel);

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;