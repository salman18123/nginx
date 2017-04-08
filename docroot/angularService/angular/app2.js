//var myApp = angular.module('blogApp', []); 
myApp.controller('myController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.blogs = [];
  this.characters=[];
  this.houses=[];
  console.log(this.blogs);

  this.baseUrl = 'https://www.anapioficeandfire.com/api';

  this.loadAllBlogs = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/houses?page=1&pageSize=100'
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.blogs = response.data;



          console.log(main.blogs);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all blogs

 


}]); // end controller

