'use strict';

angular.module('cvApp')

  .component('about', {

    templateUrl: 'js/components/about/about.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('about component init');
      };
    }
  });