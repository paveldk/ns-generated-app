'use strict';
var _,

    _consts,
    dataService = require('../../providers/mainProvider-data-provider'),
    localSettings = require('local-settings'),

    // additional requires
    consts;

function Service() {}

_consts = {
    accessTokenKey: 'accessToken'
};

function onRequestSuccess(e) {
    localSettings.setString(_consts.accessTokenKey, e.result.access_token);
    return 'Success';
}

function onRequestFail(err) {
    return err;
}

Service.prototype.register = function(args) {
    if (!args.username) {
        throw new Error('Service: register - missing username');
    }

    if (!args.password) {
        throw new Error('Service: register - missing password');
    }

    if (!args.email) {
        throw new Error('Service: register - missing email');
    }

    return dataService.Users.register(args.username, args.password, {
            Email: args.email,
            DisplayName: args.username
        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

Service.prototype.getCurrentUser = function() {
    return dataService.Users.currentUser();
};

Service.prototype.isAuthenticated = function() {
    return localSettings.getString(_consts.accessTokenKey);
};

Service.prototype.setAuthorization = function() {
    return dataService.Users.setAuthorization(localSettings.getString(_consts.accessTokenKey), 'bearer');
};

// additional properties

module.exports = new Service();