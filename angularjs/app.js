var imgFile;
var app=angular.module("myApp",["ui.router"]).config(($stateProvider,$urlRouterProvider)=>{
    //$urlRouterProvider.otherwise("headlines");
    $stateProvider.state("headlines",{
        url:'/headlines',
        templateUrl:'headlines.html',
        controller:'headlinesContoller',
        controllerAs:'headlinesctrl'
    })
    .state("postnews",{
        url:'/postnews',
        templateUrl:'postnews.html',
        controller:'postnewsContoller',
        controllerAs:'postnewsctrl'
    })
    .state("detailnews",{
        url:'/detailnews/:id',
        templateUrl:'detailnews.html',
        controller:'detailnewsContoller',
        controllerAs:'detailnewsctrl'
    })
    .state("shownews",{
        url:'/shownews',
        templateUrl:'showallnews.html',
        controller:'shownewsContoller',
        controllerAs:'shownewsctrl'
    })
    .state("editnews",{
        url:'/editnews',
        templateUrl:'edit.html',
        controller:'editnewsContoller',
        controllerAs:'editnewsctrl'
    })
});


function uploadImg(event) {
    console.log(event);
    imgFile = event.target.files[0];
    console.log("image file:",imgFile);
}