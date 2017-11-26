'use strict';

angular.module('cvApp')

  .component('more', {

    templateUrl: 'js/components/more.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('more component init');
      };
    }
  });