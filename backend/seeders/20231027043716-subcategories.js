'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.bulkInsert('subcategories', [
      {
        categoryID: 1,
        subcategoryTypeID: 1,
        description: 'Antidepressants Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 1,
        subcategoryTypeID: 2,
        description: 'Antidepressants Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 1,
        subcategoryTypeID: 3,
        description: 'Antidepressants Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 2,
        subcategoryTypeID: 1,
        description: 'Antipsychotics Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 2,
        subcategoryTypeID: 2,
        description: 'Antipsychotics Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 2,
        subcategoryTypeID: 3,
        description: 'Antipsychotics Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 3,
        subcategoryTypeID: 1,
        description: 'Cognitive Enhancers Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 3,
        subcategoryTypeID: 2,
        description: 'Cognitive Enhancers Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 3,
        subcategoryTypeID: 3,
        description: 'Cognitive Enhancers Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 4,
        subcategoryTypeID: 1,
        description: 'Sedatives/Hypnotics Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 4,
        subcategoryTypeID: 2,
        description: 'Sedatives/Hypnotics Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 4,
        subcategoryTypeID: 3,
        description: 'Sedatives/Hypnotics Clinical Guide',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 5,
        subcategoryTypeID: 1,
        description: 'Mood Stabilizers Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 5,
        subcategoryTypeID: 2,
        description: 'Mood Stabilizers Adverse Effects and Safety',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 6,
        subcategoryTypeID: 4,
        description: 'Neuropsychiatric Symptoms on Dementia Nonpharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 6,
        subcategoryTypeID: 5,
        description: 'Neuropsychiatric Symptoms on Dementia Pharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 7,
        subcategoryTypeID: 4,
        description: 'Delirium Nonpharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 7,
        subcategoryTypeID: 5,
        description: 'Delirium Pharmalogical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 7,
        subcategoryTypeID: 6,
        description: 'Delirium Anticholinergic Activity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryID: 8,
        subcategoryTypeID: 1,
        description: 'ECT & Psychoactive Medications Medication Table',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('subcategories', null, {});
  }
};
