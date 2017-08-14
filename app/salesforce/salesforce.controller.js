(function () {
  'use strict';


  angular
      .module('oktyBlog')
      .controller('SalesforceController', SalesforceController);

  SalesforceController.$inject = ['$state'];



  function SalesforceController($state) {

    var svm = this;
    svm.article = "contet/img/article1.png";

  }

})();
