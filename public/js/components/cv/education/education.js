'use strict';

angular.module('cvApp')

  .component('education', {

    templateUrl: 'js/components/cv/education/education.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('education component init');
      };
    }
  });