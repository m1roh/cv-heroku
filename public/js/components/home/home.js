'use strict';

angular.module('cvApp')

  .component('home', {

    templateUrl: 'js/components/home/home.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('home component init');
      };
    }
  });