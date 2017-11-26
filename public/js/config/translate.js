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
        EXP1: {
          JOB: 'Order picker',
          SKILLS: 'Assembly of kitchen furniture according to customer orders'
        },
        EXP2: {
          JOB: 'Gardener',
          SKILLS: 'Maintenance of a landscaped park',
          SKILLS_L2: 'of 11 ha'
        },
        EXP3: {
          JOB: 'Versatile employee',
          SKILLS: 'Goods receipt, shelving, cashing...'
        },
        EXP4: {
          JOB: 'Postman',
          SKILLS: 'Distribution of mail, registered letters and parcels'
        },
        EXP5: {
          JOB: 'Warehouseman',
          SKILLS: 'Preparation of metal parts before chemical treatment'
        },
        EXP6: {
          JOB: 'Waiter / Gardener',
          SKILLS: 'Wait on table, wash dishes / Planting and maintenance of the landscaped park and flower beds'
        },
        EXP7: {
          JOB: 'Polyvalent operator',
          SKILLS: 'Management of several extrusion machines'
        },
        EXP8: {
          JOB: 'Salesman',
          SKILLS: 'Active selling at the garden department, plants care'
        },
      })

      .translations('fr', {
        BUTTON: {
          CV: 'CV',
          PORTFOLIO: 'Portfolio',
          PRESENTATION: 'À propos de moi',
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
        EXP1: {
          JOB: 'Préparateur de commandes',
          SKILLS: 'Montage de meubles de cuisines suivant commandes client'
        },
        EXP2: {
          JOB: 'Jardinier',
          SKILLS: 'Entretien d\'un parc',
          SKILLS_L2: 'paysager de 11 ha'
        },
        EXP3: {
          JOB: 'Employé polyvalent',
          SKILLS: 'Réception marchandise, mise en rayon, encaissement...'
        },
        EXP4: {
          JOB: 'Facteur',
          SKILLS: 'Distribution de courrier, lettres recommandées et colis'
        },
        EXP5: {
          JOB: 'Manutentionnaire',
          SKILLS: 'Préparation de pièces métalliques avant traitement chimique'
        },
        EXP6: {
          JOB: 'Serveur / Jardinier',
          SKILLS: 'Service en salle, plonge / Plantation et entretien du parc paysager et des massifs floraux'
        },
        EXP7: {
          JOB: 'Opérateur Polyvalent',
          SKILLS: 'Gestion de plusieurs machines à extrusion'
        },
        EXP8: {
          JOB: 'Vendeur Conseil',
          SKILLS: 'Vente active au rayon jardin, entretien des plantes'
        },
      })

      .useSanitizeValueStrategy('escape')
      .preferredLanguage('fr')
      .fallbackLanguage('fr');
    });