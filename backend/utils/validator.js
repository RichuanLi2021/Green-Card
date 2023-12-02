// const joi = require('joi');

// const validateCategory = joi.object({
//   title: joi.string().required().messages({
//     'string.empty': 'Category title cannot be empty',
//     'any.required': 'Category must have a title'
//   })
// });

// const validateFeedback = joi.object({})
//
// const validateSubcategory = joi.object({})
//
// const validateSubcategoryType = joi.object({})
//
// const validateSubcategoryHeader = joi.object({})
//
// const validateSubcategoryData = joi.object({})

const validate = (value, type) => {
  // if (type === 'category') {
  //   // Add sanitation and validation code
  //   return value
  // }
  // else if (type === 'feedback') {
  //   // Add sanitation and validation code
  //   return value
  // }
  // ...
  return value
}

const sanitize = (value) => {
  // Add sanitization code
  return value
}

const validateAndSanitize = (value, type) => {
  // if (type === 'category') {
  //   // Add sanitation and validation code
  //   return value
  // }
  // else if (type === 'feedback') {
  //   // Add sanitation and validation code
  //   return value
  // }
  // ...
  return value
}

module.exports = {
  validate,
  sanitize,
  validateAndSanitize,
};