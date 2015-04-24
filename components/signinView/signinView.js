'use strict';
var frameModule = require('ui/frame'),

    service = require('./signinView-service'),

    // additional requires
    viewModel = require('./signinView-view-model');

function onLogged() {
    frameModule.topmost().navigate('components/firstView/firstView');
}

function onLogin(data) {
    service.login(data)
        .then(onLogged);
}

function onShowRegister() {
    frameModule.topmost().navigate('components/signupView/signupView');
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    viewModel.on(viewModel.events.login, onLogin);

    viewModel.on(viewModel.events.showRegister, onShowRegister);

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;