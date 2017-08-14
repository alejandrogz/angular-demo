(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('salesforce', {
            parent: 'app',
            url: "/salesforce",
            views: {
                'content-salesforce@': {
                    templateUrl: 'salesforce/salesforce.html',
                    controller: 'SalesforceController',
                    controllerAs: 'svm'
                }
            }
        })
    }
})();
