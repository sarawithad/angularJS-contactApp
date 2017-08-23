"use strict";

app.controller('ContactCtrl', function($scope, ContactFactory) {

    $scope.addFirstName = function(firstName){
        var newFirstName = {contactFirstName: event.target.value};
        ContactFactory.setContactObject(newFirstName);
        console.log("newFirstName: ", newFirstName);
    };


    $scope.addLastName = function(lastName){
        var newLastName = {contactLastName: event.target.value};
        ContactFactory.setContactObject(newLastName);
    };


    $scope.addPhone = function(phone){
        var newPhone = {contactPhone: event.target.value};
        ContactFactory.setContactObject(newPhone);
    };


    $scope.addEmail = function(email){
        var newEmail = {contactEmail: event.target.value};
        ContactFactory.setContactObject(newEmail);
    };


    $scope.addAddress1 = function(address1){
        var newAddress1 = {contactAddress1: event.target.value};
        ContactFactory.setContactObject(newAddress1);
    };


    $scope.addAddress2 = function(address2){
        var newAddress2 = {contactAddress2: event.target.value};
        ContactFactory.setContactObject(newAddress2);
    };


    $scope.addCity = function(city){
        var newCity= {contactCity: event.target.value};
        ContactFactory.setContactObject(newCity);
    };


    $scope.addState = function(state){
        var newState = {contactState: event.target.value};
        ContactFactory.setContactObject(newState);
    };


    $scope.addZipCode = function(zipCode){
        var newZipCode = {contactZipCode: event.target.value};
        ContactFactory.setContactObject(newZipCode);
    };

    $scope.addUsername = function(username){
        var newUsername = {contactUsername: event.target.value};
        ContactFactory.setContactObject(newUsername);
    };


    $scope.addPassword = function(zipCode){
        var newPassword = {contactPassword: event.target.value};
        ContactFactory.setContactObject(newPassword);
    };


    var component = ContactFactory.getContactObject();

    $scope.contactComponents = component;
    

});




