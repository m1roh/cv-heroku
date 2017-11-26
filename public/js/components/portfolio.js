'use strict';

angular.module('cvApp')

  .component('portfolio', {

    templateUrl: 'js/components/portfolio.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('portfolio component init');
      };
    }
  });