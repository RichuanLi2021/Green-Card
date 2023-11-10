'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Delirium - Nonpharmalogical Approach
      { uuid: uuidv4(), headerID: 69, value: 'Reduce noise', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Correct sensory deficits (clean eyeglasses, working hearing aids)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Increase patients sense of control', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Minimize room/environment changes', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Avoid restraints if possible', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Pharmalogical Approach
      { uuid: uuidv4(), headerID: 70, value: 'Only use if clinically signficant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Antipsychotics are treatment of choice (other than etoh withdrawal delirium)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Aim for monotherapy, lowest effective dose, and tapering ASAP', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Haloperidol not recommended if pre-existing Parkinsons or LBD', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'See antipsychotic table for dosing recommendations', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Anticholinergic Activity
      // High
      { uuid: uuidv4(), headerID: 71, value: 'Amitriptyline (Elavil)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Atropine (Sal-Tropine)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Benztropine (Cogentin)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Chlorpromazine (Thorazine)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Clomipramine (Anafranil)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Clozapine (Clozaril)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Desipramine (Norpramin)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Dimenhydrinate (Gravol)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Diphenhydramine (Benadryl)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Doxepin (Sinequan)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Fesoterodine (Toviaz)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Hydroxyzine (Atarax)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Imipramine (Tofranil)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Methocarbamol (Robaxin)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Nortriptyline (Pamelor)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Olanzapine (Zyprexa)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Oxybutynin (Ditropan)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Paroxetine (Paxil)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Perphenazine (Trilafon)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Quetiapine (Seroquel)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Solifenacin (Vesicare)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Thioridazine (Mellaril)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Tolterodine (Detrol)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Trifluoperazine (Stelazine)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Trihyxyphenidyl (Artane)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Trospium (Sanctura)',         createdAt: new Date(), updatedAt: new Date() },

      // Medium
      { uuid: uuidv4(), headerID: 72, value: 'Amantadine (Symmetrel)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Carbamazepine (Tegretol)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Cyclobenzaprine (Flexeril)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Cyproheptadine (Periactin)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Loxapine (Loxitane)',           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Meperidone (Demerol)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Methotrimeprazine (Levoprome)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Oxcarbazepine (Trileptal)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Pimozide (Orap)',               createdAt: new Date(), updatedAt: new Date() },

      // Low
      { uuid: uuidv4(), headerID: 73, value: 'Alprazolam (Xanax)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Aripiprazole (Abilify)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Asenapine (Saphris)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Bupropion (Wellbutrin)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Cetirizine (Reactine)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Codeine',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Colchicine (Odan)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Diazepam (Valium)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Digoxin',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Fentanyl',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Furosemide (Lasix)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Fluvoxamine (Luvox)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Hydralazine',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Haloperidol (Haldol)',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Hydrocortisone',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Loperamide (Imodium)',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Loratadine (Claritin)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Metoprolol',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Morphine',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Nifedipine (Adalat)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Paliperidone (Invega)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Prednisone',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Ranitidine (Zantac)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Trazodone (Desyrel)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Venlafaxine (Effexor)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 73, value: 'Warfarin',               createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
