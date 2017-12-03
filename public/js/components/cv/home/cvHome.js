'use strict';

angular.module('cvApp')

  .component('cvHome', {

    templateUrl: 'js/components/cv/home/cvHome.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('cv component init');
      };
    }
  });