app.controller("postnewsContoller",postnewsContoller);
function postnewsContoller($scope,$http,$state){

   $scope.message="hello you can add elsement here";
   
   $scope.saveNews = function(){
      $scope.newNews.file=imgFile;
       console.log('Save function:', imgFile);
    
       var formData = new FormData();
       formData.append("headline", $scope.newNews.headline);
       formData.append("discription", $scope.newNews.discription);
       formData.append("date", $scope.newNews.date);
       formData.append("file",imgFile);
        //console.log("this is form data:",formData);

       $http.post('http://localhost:4000/newscreate/', formData,{
     
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
           
        }).then(function (res) { 
        

   $state.go("headlines");
        });
  $scope.newNews={};

   }
   

}