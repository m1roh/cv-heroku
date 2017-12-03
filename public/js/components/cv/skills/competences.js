'use strict';

angular.module('cvApp')

  .component('competences', {

    templateUrl: 'js/components/cv/skills/competences.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('competences component init');
      };
    }

  });