
app.controller("editnewsContoller", editnewsContoller);

function editnewsContoller($scope, $http, $stateParams){
    $scope.student = null;
    var id = $stateParams.id;
    $scope.message = "Edit Student";
     
    $http.get('http://localhost:3000/news/' + id).then(function(res){
        console.log(res);
        $scope.student = res.data.docs;
        console.log($scope.student);
    });

    $scope.edit = function(id){
        console.log('In Edit:', $scope.student);
        console.log(id);
        $http.put('http://localhost:3000/student/' + id, $scope.student).then(function(res){
            console.log(res);
        });
    }
}