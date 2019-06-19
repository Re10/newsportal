app.controller("shownewsContoller",shownewsContoller);
function shownewsContoller($scope,$http,$state){
    $scope.message="within show function";
    $scope.news=[];

    $http.get("http://localhost:4000/news").then(function(res){
        console.log(res);
        $scope.news = res.data.doc;
        //$scope.news.reverse();
        //console.log("Reverse Arrray----:",$scope.news);
      // $scope.temp; 
    });

    // $scope.detailnews=(idd)=>{
    //            
    // }
    $scope.edit = function(id){
      console.log('In Edit:', $scope.news);
      console.log(id);
      $http.put('http://localhost:3000/news/' + id, $scope.news).then(function(res){
          console.log(res);
      });
   
  }

}