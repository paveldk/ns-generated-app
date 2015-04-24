'use strict';
var ViewModel,
    _extends = require('../../utils/extends'),
    observable = require('data/observable');

function ViewModel() {
    observable.Observable.apply(this, arguments);
}

_extends(ViewModel, observable.Observable);

ViewModel.prototype.username = '';
ViewModel.prototype.password = '';
ViewModel.prototype.email = '';

ViewModel.prototype.events = {
    register: 'register',
    showLogin: 'showLogin'
};

ViewModel.prototype.onRegister = function() {
    this.notify({
        eventName: this.events.register,
        username: this.get("username"),
        password: this.get("password"),
        email: this.get("email")
    });
};

ViewModel.prototype.onShowRegister = function() {
    this.notify({
        eventName: this.events.showLogin
    });
};

// additional properties

module.exports = new ViewModel();