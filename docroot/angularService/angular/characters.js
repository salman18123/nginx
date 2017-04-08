myApp.controller('charController',['$http',function($http){
var main=this;
this.pageHeading='';
this.pageSubheading='';
this.Url='https://www.anapioficeandfire.com/api';
this.blog=[];
console.log(this.blog);
this.charLoad=function(){
   $http({
   	method:'GET',
   	url:main.Url+'/characters?page=3&pageSize=100'
   }).then(function successcallback(response){
   	   console.log(response);
   	   main.blog=response.data;
   	   console.log(main.blog);

   },function errorcallback(response){

   	alert("check the console");
   	console.log(response);
   });

}



}]);