'use strict';

angular.module('cvApp')

  .config(($stateProvider, $urlRouterProvider) => {

    $stateProvider

      .state('main', {
        url: '/',
        component: 'main',
      })

      .state('main.home', {
        url: 'home',
        component: 'home',
      })

      .state('main.cv', {
        url: 'cv',
        component: 'cvHome'
      })

      .state('main.exp', {
        url: 'exp',
        component: 'experiences'
      })

      .state('main.comp', {
        url: 'comp',
        component: 'competences'
      })

      .state('main.educ', {
        url: 'educ',
        component: 'education'
      })

      .state('main.more', {
        url: 'more',
        component: 'more'
      })

      .state('main.port', {
        url: 'port',
        component: 'portfolio'
      })

      .state('main.about', {
        url: 'about',
        component: 'about'
      })

      .state('main.contact', {
        url: 'contact',
        component: 'contact'
      });

      /* .state('main.list', {
        url: 'list?{categoryId:int}',
        params: {
          categoryId: {
            value: 0
          }
        },
        component: 'recipesList',
        resolve: {
          recipes: (RecipesService, $transition$) => {
            return RecipesService.query({
              categoryId: $transition$.params().categoryId
            }).$promise;
          }
        }
      })

      .state('main.details', {
        url: 'details/:id',
        component: 'recipeDetails',
        resolve: {
          recipe: (RecipesService, $transition$) => {
            return RecipesService.get({
              id: $transition$.params().id
            }).$promise;
          }
        }
      })

      .state('main.add', {
        url: 'add',
        component: 'recipeAdd'
      }); */

    $urlRouterProvider.otherwise('/home');
  });