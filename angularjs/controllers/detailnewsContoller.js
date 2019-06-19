
app.controller("detailnewsContoller",detailnewsContoller);
function detailnewsContoller($scope,$http,$stateParams){

$scope.news = null;
var id = $stateParams.id;
$scope.url="http://localhost:4000/";


//$scope.clicked="false";
$http.get("http://localhost:4000/news/"+ id).then(function(res){
   
        console.log(res);
        $scope.news = res.data.doc;
        var date=new Date($scope.news.date);
    
    });



    $http.get("http://localhost:4000/comments/"+id).then(function(res){
        console.log("within get ALLL RECORDmethod"+id);
        $scope.comments = res.data.doc;
        console.log("Res:----",$scope.comments);
    
    });


$scope.clicked = function(){
    console.log('In Click()');
    $scope.clicked = $scope.clicked ? false : true;

}

$scope.addComment = function(id){
    console.log("In Add");
    $scope.newcomment.newsid = id;
    $scope.clicked = $scope.clicked ? false : true;
    console.log('id:',id);  
    console.log('In Click():', $scope.newcomment);
    $http.post("http://localhost:4000/comments", $scope.newcomment).then(function(res){
        console.log(res);
    });
   
}


}