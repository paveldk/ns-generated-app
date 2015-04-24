'use strict';
var frameModule = require('ui/frame'),

    service = require('./signupView-service'),

    // additional requires
    viewModel = require('./signupView-view-model');

function onLogged() {
    frameModule.topmost().navigate('components/firstView/firstView');
}

function onRegister(data) {
    service.register(data)
        .then(onLogged);
}

function onShowLogin() {
    frameModule.topmost().navigate('components/signinView/signinView');
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    viewModel.on(viewModel.events.register, onRegister);

    viewModel.on(viewModel.events.showLogin, onShowLogin);

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;