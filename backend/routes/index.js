const express = require('express');
const router = express.Router();

const categoriesRoute = require('./categories');
router.use('/categories', categoriesRoute);

const subcategoriesRoute = require('./subcategories');
router.use('/subcategories', subcategoriesRoute);

const subcategoryTypesRoute = require('./subcategory_types');
router.use('/subcategory-types', subcategoryTypesRoute);

const subcategoryHeadersRoute = require('./subcategory_headers');
router.use('/subcategory-headers', subcategoryHeadersRoute);

const subcategoryDataRoute = require('./subcategory_data');
router.use('/subcategory-data', subcategoryDataRoute);

const usersRoute = require('./users');
router.use('/users', usersRoute);

const feedbackRoute = require('./feedback');
router.use('/feedback', feedbackRoute);

const authRoute = require('./auth');
router.use('/auth', authRoute);

const generalRoute = require('./general');
router.use('/general', generalRoute);

module.exports = router;