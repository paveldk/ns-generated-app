'use strict';
var ViewModel,
    _extends = require('../../utils/extends'),
    observable = require('data/observable');

function ViewModel() {
    observable.Observable.apply(this, arguments);
}

_extends(ViewModel, observable.Observable);

ViewModel.prototype.events = {
    firstFormSubmit: 'firstFormSubmit',
    firstFormCancel: 'firstFormCancel'
};

ViewModel.prototype.onfirstFormFormSubmit = function() {
    this.notify({
        eventName: this.events.firstFormFormSubmit
    });
};

ViewModel.prototype.onfirstFormFormCancel = function() {
    this.notify({
        eventName: this.events.firstFormFormCancel
    });
};

// additional properties

module.exports = new ViewModel();