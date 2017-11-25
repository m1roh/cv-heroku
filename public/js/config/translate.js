'use strict';

angular.module('cvApp')

  .config(($translateProvider) => {

    $translateProvider

      .translations('en', {
        BUTTON: {
          CV: 'CV',
          PORTFOLIO: 'Portfolio',
          PRESENTATION: 'About me',
        },
        CV_HOME: {
          EXPERIENCES: 'EXPERIENCES',
          SKILLS: 'SKILLS',
          EDUCATION: 'EDUCATION',
          MORE: 'MORE',
        },
        HOME: {
          ABOUT: 'ABOUT ME'
        },
        ALL: 'All'
      })

      .translations('fr', {
        BUTTON: {
          CV: 'CV',
          PORTFOLIO: 'Portfolio',
          PRESENTATION: 'À propos de moi',
        },
        HOME: {
          ABOUT: 'ABOUT'
        },
        CV_HOME: {
          EXPERIENCES: 'EXPÉRIENCES',
          SKILLS: 'COMPÉTENCES',
          EDUCATION: 'FORMATION',
          MORE: 'DIVERS',
        },
        HOME: {
          ABOUT: 'À PROPOS DE MOI'
        },
        ALL: 'Toutes'
      })

      .useSanitizeValueStrategy('escape')
      .preferredLanguage('fr')
      .fallbackLanguage('fr');
    });