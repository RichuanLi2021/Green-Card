'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategory_data', [
      // Delirium - Nonpharmalogical Approach
      { uuid: uuidv4(), headerID: 68, value: 'Reduce noise', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Orient the patient using clocks, calendars, light/dark environment, verbal cues (esp. by family)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Correct sensory deficits (clean eyeglasses, working hearing aids)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Increase patients sense of control', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Minimize room/environment changes', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 68, value: 'Avoid restraints if possible', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Pharmalogical Approach
      { uuid: uuidv4(), headerID: 69, value: 'Only use if clinically signficant distress/agitation/aggression, when benefits>harm, and non pharmacological approach failed', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Antipsychotics are treatment of choice (other than etoh withdrawal delirium)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Aim for monotherapy, lowest effective dose, and tapering ASAP', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Haloperidol not recommended if pre-existing Parkinsons or LBD', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'Consider 4pm & 8pm dosing rather than morning dose to optimize sleep wake cycle', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 69, value: 'See antipsychotic table for dosing recommendations', createdAt: new Date(), updatedAt: new Date() },

      // Delirium - Anticholinergic Activity
      // High
      { uuid: uuidv4(), headerID: 70, value: 'Amitriptyline (Elavil)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Atropine (Sal-Tropine)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Benztropine (Cogentin)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Chlorpromazine (Thorazine)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Clomipramine (Anafranil)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Clozapine (Clozaril)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Desipramine (Norpramin)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Dimenhydrinate (Gravol)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Diphenhydramine (Benadryl)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Doxepin (Sinequan)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Fesoterodine (Toviaz)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Hydroxyzine (Atarax)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Imipramine (Tofranil)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Methocarbamol (Robaxin)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Nortriptyline (Pamelor)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Olanzapine (Zyprexa)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Oxybutynin (Ditropan)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Paroxetine (Paxil)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Perphenazine (Trilafon)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Quetiapine (Seroquel)',       createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Solifenacin (Vesicare)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Thioridazine (Mellaril)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Tolterodine (Detrol)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Trifluoperazine (Stelazine)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Trihyxyphenidyl (Artane)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 70, value: 'Trospium (Sanctura)',         createdAt: new Date(), updatedAt: new Date() },

      // Medium
      { uuid: uuidv4(), headerID: 71, value: 'Amantadine (Symmetrel)',        createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Carbamazepine (Tegretol)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Cyclobenzaprine (Flexeril)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Cyproheptadine (Periactin)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Loxapine (Loxitane)',           createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Meperidone (Demerol)',          createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Methotrimeprazine (Levoprome)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Oxcarbazepine (Trileptal)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 71, value: 'Pimozide (Orap)',               createdAt: new Date(), updatedAt: new Date() },

      // Low
      { uuid: uuidv4(), headerID: 72, value: 'Alprazolam (Xanax)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Aripiprazole (Abilify)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Asenapine (Saphris)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Bupropion (Wellbutrin)', createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Cetirizine (Reactine)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Codeine',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Colchicine (Odan)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Diazepam (Valium)',      createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Digoxin',                createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Fentanyl',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Furosemide (Lasix)',     createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Fluvoxamine (Luvox)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Hydralazine',            createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Haloperidol (Haldol)',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Hydrocortisone',         createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Loperamide (Imodium)',   createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Loratadine (Claritin)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Metoprolol',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Morphine',               createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Nifedipine (Adalat)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Paliperidone (Invega)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Prednisone',             createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Ranitidine (Zantac)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Trazodone (Desyrel)',    createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Venlafaxine (Effexor)',  createdAt: new Date(), updatedAt: new Date() },
      { uuid: uuidv4(), headerID: 72, value: 'Warfarin',               createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategory_data', null, {});
  }
};
