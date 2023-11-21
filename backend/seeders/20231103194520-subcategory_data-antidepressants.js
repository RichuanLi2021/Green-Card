'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Antidepressants - Medication Table
      //SSRI
      { uuid: uuidv4(), headerID: 1, value: 'citalopram (Celexa)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '23-45h',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '5-10 | 20 | 20',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,20,30,40/tab',       createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 1, value: 'escitalopram (Cipralex)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '27-32h',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '5 | 10 | 10',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,20/tab',                 createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'fluoxetine (Prozac) ∅', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '10-14d^',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '10 | 20-40 | 40',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,20/cap,liq',         createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'fluvoxamine (Luvox)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '9-28h',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '25-50 | 50-200 | 200', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '50,100/tab',           createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'paroxetine (Paxil) ♯', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '3-65h',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '10 | 20-40 | 40',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,20,30,40/tab',      createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 1, value: 'sertraline (Zoloft)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '<104h^',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '25 | 50-150 | 200',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '25,50,100/cap',         createdAt: new Date(), updatedAt: new Date() },

      // Serotonin Modulator
      { uuid: uuidv4(), headerID: 1, value: 'vortioxetine (Trintellix)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '66h',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '5-10 | 10-20 | 20',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '5,10,15,20/tab',            createdAt: new Date(), updatedAt: new Date() },

      // SNRI
      { uuid: uuidv4(), headerID: 1, value: 'duloxetine (Cymbalta)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '8-17h',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT,NA',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '30-60 | 60 | 120',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '30,60/cap',               createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'venlafaxine XR (Effexor XR)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '9-13h^',                        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT,NA',                        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '37.5 | 75-150 | 300',           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '37.5,75,150/cap',               createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'desvenlafaxine (Pristiq)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '11',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5-HT,NA',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '50 | 50 | 50',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '50,100/er tab',            createdAt: new Date(), updatedAt: new Date() },

      // NaSSA
      { uuid: uuidv4(), headerID: 1, value: 'mirtazapine (Remeron)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '20-40h',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: '5HT,NA',                  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '3.75-15 | 15-45 | 45',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'hs',                      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '15,30,45/tab,diss tab',   createdAt: new Date(), updatedAt: new Date() },

      // NDRI
      { uuid: uuidv4(), headerID: 1, value: 'bupropion (Wellbutrin SR)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '<27h^',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA,DA',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '100 | 150-300 | 300',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'bid',                         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '100,150/sr tab',              createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 1, value: 'bupropion (Wellbutrin XL)**', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '<27h^',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA,DA',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '100 | 150-300 | 300',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'od',                          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '150,300/xl tab',              createdAt: new Date(), updatedAt: new Date() },

      // TCA - 2°amine
      { uuid: uuidv4(), headerID: 1, value: 'desipramine (Norpramin)†', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '12-72h',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '25am | 75-150 | 200',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'bid',                      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,25,50,75,100/tab',      createdAt: new Date(), updatedAt: new Date() },
      
      { uuid: uuidv4(), headerID: 1, value: 'nortriptyline (Aventyl)†', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '13-88h',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA',                       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '10-25hs | 50-100 | 100',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'hs/bid',                   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10,25/cap',                createdAt: new Date(), updatedAt: new Date() },

      // TCA - 3°amine
      { uuid: uuidv4(), headerID: 1, value: 'amitriptyline (Elavil)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: 'Not recommended',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'Not recommended',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: 'Not recommended',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'Not recommended',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: 'Not recommended',        createdAt: new Date(), updatedAt: new Date() },

      // MAOI
      { uuid: uuidv4(), headerID: 1, value: 'phenelzine (Nardil)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '1.5-4h',              createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA,5HT',              createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '15 | 45-90 | 90',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'b-tid',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '15/tab',              createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 1, value: 'tranylcypromine (Parnate)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 2, value: '2-4h',                      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 3, value: 'NA,5HT',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 4, value: '10bid | 20-40 | 40',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 5, value: 'am/bid',                    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 6, value: '10/tab',                    createdAt: new Date(), updatedAt: new Date() },

      // Antidepressants - Adverse Effects and Safety
      { uuid: uuidv4(), headerID: 7, value: 'Cognitive impairment', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'Drug-drug interactions', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'Falls', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'Fractures', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'GI bleed', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'Hyponatremia/SIADH', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'QTc prolongation (escitalopram, citalopram, TCAs)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 7, value: 'Seizures (bupropion, TCAs)', createdAt: new Date(), updatedAt: new Date() },

      // Antidepressants - Clinical Guide
      //For Inadequate Response
      { uuid: uuidv4(), headerID: 8, value: 'Switching is preferred over augmentation (↓ risk of falls)', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 9, value: 'Single episode: ≥ 2 years', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 9, value: 'Multiple episodes: ongoing (preventative)', createdAt: new Date(), updatedAt: new Date() },

      { uuid: uuidv4(), headerID: 10, value: '≥ 2-3 months if switching or ineffective', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 10, value: 'Longer tapering period if remitted (≥1-2 years)', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
