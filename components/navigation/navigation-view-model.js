'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home",
    "icon": "~/images/home.png",
    "modulePath": "components/home/home"
}, {
    "title": "Form View",
    "icon": "~/images/bookmarks.png",
    "modulePath": "components/formView/formView"
}, {
    "title": "Register View",
    "icon": "~/images/edit.png",
    "modulePath": "components/signupView/signupView"
}, {
    "title": "Sign in View",
    "icon": "~/images/contacts.png",
    "modulePath": "components/signinView/signinView"
}, {
    "title": "DataList View",
    "icon": "~/images/organize.png",
    "modulePath": "components/listView/listView"
}, {
    "title": "Full DataList View",
    "icon": "~/images/mostviewed.png",
    "modulePath": "components/fullListView/fullListView"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('pageTitle', 'My NativeScript App');
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;
