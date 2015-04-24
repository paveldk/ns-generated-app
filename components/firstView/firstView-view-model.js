'use strict';
var ViewModel,
    _extends = require('../../utils/extends'),
    observable = require('data/observable');

function ViewModel() {
    observable.Observable.apply(this, arguments);
}

_extends(ViewModel, observable.Observable);

// additional properties

module.exports = new ViewModel();