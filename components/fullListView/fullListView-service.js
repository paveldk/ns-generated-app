'use strict';
var _,

    _consts,
    dataService = require('../../providers/mainProvider-data-provider'),

    // additional requires
    consts;

function Service() {}

function onRequestSuccess(data) {
    console.log(JSON.stringify(data.result));
    return data.result;
}

function onRequestFail(data) {
    console.log(JSON.stringify(data));

    return data;
}

Service.prototype.getAllRecords = function(args) {
    var data = dataService.data('Activities'),
        expandExp = {
            "Picture": {
                'SingleField': 'Uri'
            }
        };

    return data.expand(expandExp).get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional properties

module.exports = new Service();
