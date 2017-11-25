'use strict';

angular.module('cvApp')

  .component('education', {

    templateUrl: 'js/components/education.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('education component init');
      };
    }
  });