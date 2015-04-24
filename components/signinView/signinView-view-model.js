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

ViewModel.prototype.events = {
    login: 'login',
    showRegister: 'showRegister'
};

ViewModel.prototype.onLogin = function() {
    this.notify({
        eventName: this.events.login,
        username: this.get('username'),
        password: this.get('password')
    });
};

ViewModel.prototype.onShowRegister = function() {
    this.notify({
        eventName: this.events.showRegister
    });
};

// additional properties

module.exports = new ViewModel();