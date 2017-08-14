(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('scrapbook', {
            parent: 'app',
            url: "/scrapbook",
            params: {
                id: null
            },
            views: {
                'content-scrapbook@': {
                    templateUrl: 'scrapbook/scrapbook.html',
                }
            }
        })
    }
})();
