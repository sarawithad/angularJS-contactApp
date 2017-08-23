"use strict";

var app = angular.module("ContactApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
   when("/", {
      templateUrl: "partials/contact1.html",
      controller: "ContactCtrl"
    }).
   when("/contactform1", {
      templateUrl: "partials/contact1.html",
      controller: "ContactCtrl"
    }).
    when("/contactform2", {
      templateUrl: "partials/contact2.html",
      controller: "ContactCtrl"
    }).
    when("/displaycontactinfo", {
      templateUrl: "partials/displaycontact.html",
      controller: "ContactCtrl"
    }).
  otherwise('/');
});


