'use strict';
var frameModule = require('ui/frame'),

    service = require('./fullListView-service'),

    // additional requires
    viewModel = require('./fullListView-view-model');

// additional functions

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = viewModel;

    service.getAllRecords()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                console.log(item.Picture);
                itemsList.push({
                    icon: 'icon',

                    image: item.Picture,

                    header: item.Text,

                    description: item.Id,

                });
            });

            viewModel.set('listItems', itemsList);
        });

    // additional pageLoaded
}

exports.pageLoaded = pageLoaded;
