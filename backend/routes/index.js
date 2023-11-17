const express = require('express');
const router = express.Router();

const generalRoute = require('./all');
router.use('/all', generalRoute);

const authRoute = require('./auth');
router.use('/auth', authRoute);

const categoriesRoute = require('./categories');
router.use('/categories', categoriesRoute);

const feedbackRoute = require('./feedback');
router.use('/feedback', feedbackRoute);

const subcategoriesRoute = require('./subcategories');
router.use('/subcategories', subcategoriesRoute);

const subcategoryDataRoute = require('./subcategory_data');
router.use('/subcategory_data', subcategoryDataRoute);

const subcategoryHeadersRoute = require('./subcategory_headers');
router.use('/subcategory_headers', subcategoryHeadersRoute);

const subcategoryTypesRoute = require('./subcategory_types');
router.use('/subcategory_types', subcategoryTypesRoute);

const usersRoute = require('./users');
router.use('/users', usersRoute);

module.exports = router;