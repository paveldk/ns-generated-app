'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "home",
    "modulePath": "components/home/home"
}, {
    "title": "Empty view",
    "modulePath": "components/firstView/firstView"
}, {
    "title": "Sign in View",
    "modulePath": "components/signinView/signinView"
}, {
    "title": "Sign up View",
    "modulePath": "components/signupView/signupView"
}, {
    "title": "DataList View",
    "modulePath": "components/listView/listView"
}, {
    "title": "Full DataList View",
    "modulePath": "components/fullListView/fullListView"
}, {
    "title": "Form View",
    "modulePath": "components/formView/formView"
}];

navigationViewModel.set('menuItems', menuItems);

module.exports = navigationViewModel;