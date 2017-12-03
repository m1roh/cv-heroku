'use strict';

angular.module('cvApp')

  .component('experiences', {

    templateUrl: 'js/components/cv/experiences/experiences.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('experiences component init');
      };
    }
  });