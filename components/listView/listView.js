'use strict';
var frameModule = require('ui/frame'),

    service = require('./listView-service'),

    // additional requires
    viewModel = require('./listView-view-model');

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                itemsList.push({
                    icon: 'icon',

                    header: item.Text,

                });
            });

            viewModel.set('listItems', itemsList);
        });

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;
