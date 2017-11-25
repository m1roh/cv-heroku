'use strict';

angular.module('cvApp')

  .component('cv', {

    templateUrl: 'js/components/cv.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('cv component init');
      };

    }

  });