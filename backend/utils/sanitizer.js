// pre_validation.js
const Joi = require('joi');

const categorySchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Category title cannot be empty',
    'any.required': 'Category must have a title'
  }),
  description: Joi.string().allow(null, '').messages({
    'string.empty': 'Category description cannot be empty'
  }),
});



//const feedbackValidateInput = Joi.object({})

//const subCategoryValidateInput = Joi.object({})

//const subCateDataValidateInput = Joi.object({})

//const subCateTypesValidateInput = Joi.object({})

//const subCateHeaderValidateInput = Joi.object({})

//..

module.exports = {
  categorySchema
  //feedbackValidateInput
  //subCategoryValidateInput
  //..
};


