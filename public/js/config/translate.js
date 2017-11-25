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
          EXPERIENCES: 'Experiences',
          SKILLS: 'Skills',
          EDUCATION: 'Education',
          MORE: 'More',
        },
        ALL: 'All'
      })

      .translations('fr', {
        BUTTON: {
          CV: 'CV',
          PORTFOLIO: 'Portfolio',
          PRESENTATION: 'À propos de moi',
        },
        CV_HOME: {
          EXPERIENCES: 'Expériences',
          SKILLS: 'Compétences',
          EDUCATION: 'Formation',
          MORE: 'Divers',
        },
        ALL: 'Toutes'
      })

      .useSanitizeValueStrategy('escape')
      .preferredLanguage('fr')
      .fallbackLanguage('fr');
    });