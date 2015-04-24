'use strict';
var _,

    _consts,
    dataService = require('../../providers/mainProvider-data-provider'),

    // additional requires
    consts;

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(data) {
    return data;
}

Service.prototype.getAllRecords = function(args) {
    var data = dataService.data('Activities');

    return data.get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional properties

module.exports = new Service();