const express = require('express');
const router = express.Router();

const categoriesRoute = require('./categories');
router.use('/categories', categoriesRoute);

const subcategoriesRoute = require('./subcategories');
router.use('/subcategories', subcategoriesRoute);

const subcategoryTypesRoute = require('./subcategory_types');
router.use('/subcategory-type', subcategoryTypesRoute);

const subcategoryHeadersRoute = require('./subcategory_headers');
router.use('/subcategory-header', subcategoryHeadersRoute);

const subcategoryDataRoute = require('./subcategory_data');
router.use('/subcategory-data', subcategoryDataRoute);

const usersRoute = require('./users');
router.use('/users', usersRoute);

const feedbackRoute = require('./feedback');
router.use('/feedback', feedbackRoute);

const authRoute = require('./auth');
router.use('/auth', authRoute);

module.exports = router;