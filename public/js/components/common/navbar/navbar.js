'use strict';

angular.module('cvApp')

  .component('navbar', {

    templateUrl: 'js/components/common/navbar/navbar.html',

    controller: function ($translate) {

      this.$onInit = () => {
        this.lang = $translate.use();
      };

      this.setLanguage = (code) => {
        $translate.use(code);
        this.lang = $translate.use();
      };
    }
  });