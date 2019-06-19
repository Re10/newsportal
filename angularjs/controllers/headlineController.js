app.controller("headlinesContoller",headlinesContoller);
function headlinesContoller($scope,$http,$state){
    $scope.message="within headline function";
    $scope.news=[];

    $http.get("http://localhost:4000/news").then(function(res){
        console.log(res);
        $scope.news = res.data.doc;
        $scope.news.reverse();
        console.log("Reverse Arrray----:",$scope.news);
      // $scope.temp; 
    });

    // $scope.detailnews=(idd)=>{
        $state.go("detailnewsContoller");        
    // }
}
