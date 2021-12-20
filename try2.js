(function(){
    'use strict';
var app=angular.module("myImg",[]);
app.controller('imgcontroller',imgcontroller);
imgcontroller.$inject=['$scope'];


$scope.img="pic_1.jpg";
$scope.name="DOG";
$scope.clickfn=function() {
    $scope.img="pic_2.jpg";
    $scope.name="CAT";
}
});



