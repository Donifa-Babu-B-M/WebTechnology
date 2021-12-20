(function(){
    'use strict';
angular.module('caseApp', [])
    .controller('caseController', caseController);
    
    caseController.$inject = ['$scope', '$filter'];
    function caseController($scope, $filter) {
     $scope.num=(document.getElementByName("number");
    $scope.conv="The value is rounded as "$filter('number')(num,0));
    $scope.Conv=function(){
        $scope.conv="The value is rounded as "$filter('number')(num,0)); 
    }

    
    }
});