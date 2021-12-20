!(function() {
    'use strict';
angular.module('coronaApp', []).controller('coronaController', function($scope) {

    $scope.Details= [ 
    { name:"TamilNadu", active:"4520",cured:"1220",death:"1220"},
    { name:"kerala", active:"4520",cured:"1220",death:"1220"},
    { name:"Karnataka", active:"4520",cured:"1220",death:"1220"},
    { name:"Maharashtra", active:"4520",cured:"1220",death:"1220"},
    { name:"Delhi",active:"4520",cured:"1220",death:"1220"},
    { name:"Uttarkand", active:"4520",cured:"1220",death:"1220"},
    ];   
   
}); 


})();
