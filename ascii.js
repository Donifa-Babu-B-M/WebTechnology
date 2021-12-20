<script>(function(){
    "use strict";
    angular.module("myFirst",[])
    angular.controller('myFirstController',function($scope){
        
        $scope.Character="";
               
    $scope.cal=function(){
    var t=tcal();
    $scope.total=t;
}
    function tcal(){
        return (Character.charCodeAt(0))
    }
    
});
})();
</script>