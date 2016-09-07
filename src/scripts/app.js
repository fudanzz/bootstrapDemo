var app = angular.module('ngweb', ['ui.router']);

app.controller('MainCtrl', function () {

    'use strict';

    var vm = this;
    vm.var = 1;

    vm.even = false;

    vm.click = function () {
        vm.var += 1;
        vm.even = (vm.var % 2 === 0);
    };

    vm.myArray = [1, 2, 3, 4, 5, 5];

    vm.obj = {
        name: 'phil',
        age: 37,
        gender: 'M'
    }
});
