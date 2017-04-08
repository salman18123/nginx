var myApp=angular.module('blogApp',[]); 
myApp.controller('cBlogController',['$http',function($http) {

  //create a context
  var main = this;


  this.pageHeading = 'character details';
  this.pageSubHeading = ''
 

  this.getParameterByName = function(name){

      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


  }// end get parameter by name

  this.blogId = this.getParameterByName('name');

  console.log(this.blogId);


  this.baseUrl = 'https://www.anapioficeandfire.com/api';

  this.loadSingeBlog = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/characters?name='+main.blogId
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.blog = response.data[0];
          console.log(main.blog);

          
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller