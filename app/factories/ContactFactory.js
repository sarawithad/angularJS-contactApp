"use strict";

app.factory("ContactFactory", ($q, $http) => { 

    let contactObject = {};

    let setContactObject = function(component){
        console.log("inside setContactObject");
        for (var prop in component){
        contactObject[prop] = component[prop];
        }
    };    

    let getContactObject = function(){
        console.log("inside getContactObject");
        return contactObject;
    };


    return {setContactObject, getContactObject};
           

});

