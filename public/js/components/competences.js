'use strict';

angular.module('cvApp')

  .component('competences', {

    templateUrl: 'js/components/competences.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('competences component init');
      };
    }

  });