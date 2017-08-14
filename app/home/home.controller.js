(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state'];

    function HomeController($state) {
        var vm = this;
        vm.tiles = [
            {
                id: 'ux_ui1',

                type: 'ux_ui',
                src: 'content/img/image1.png'
            },
            {
                id: 'mobile1',

                type: 'mobile',
                src: 'content/img/image2.png'
            },
             {
                id: 'ux_ui2',

                type: 'ux_ui',
                src: 'content/img/image3.png'
            },
            {
               id: 'heroku',

               type: 'heroku',
               src: 'content/img/image4.png'
           },


           {
               id: 'mobile2',

               type: 'mobile',
               src: 'content/img/image5.png'
           },
           {
               id: 'salesforce1',

               type: 'salesforce',
               src: 'content/img/image6.png'
           },
           {
               id: 'mobile4',

               type: 'mobile',
               src: 'content/img/image7.png'
           },
           {
               id: 'mobile3',

               type: 'mobile',
               src: 'content/img/image8.png'
           },
           {
               id: 'salesforce2',

               type: 'salesforce',
               src: 'content/img/image9.png'
           },
            {
               id: 'ux_ui3',

               type: 'ux_ui',
               src: 'content/img/image10.png'
           }
         ];




        vm.gotoSalesforce = gotoSalesforce;

        function gotoSalesforce(brick) {
            angular.element('li.active').removeClass('active');
            angular.element('li a[href="#' + brick.type + '"]').parent().addClass('active');
            $state.go(brick.type, {brick_id: brick.id});
        }

    }
})();
