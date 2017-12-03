'use strict';

angular.module('cvApp')

  .component('contact', {

    templateUrl: 'js/components/contact/contact.html',

    controller: function ($log) {

      this.$onInit = () => {
        $log.info('contact component init');
      };
    }
  });