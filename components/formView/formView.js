'use strict';
var frame = require('ui/frame'),
    // additional requires
    viewModel = require('./formView-view-model');

function onfirstFormFormSubmit() {

}

function onfirstFormFormCancel() {
    frame.topmost().goBack();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    viewModel.on(viewModel.events.firstFormSubmit, onfirstFormFormSubmit);

    viewModel.on(viewModel.events.firstFormCancel, onfirstFormFormCancel);

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;
