const swaggerDocument = {
  swagger: '2.0',
  info: {
    title: 'GPGC API',
    version: '1.3.0',
    description: 'All routes and endpoints for Geriatrics Psychiatry Green Card'
  },
  host: 'localhost:8887',
  basePath: '/api',
  paths: {
    '/all/categories' : {
      'get': {
        'tags': ['all'],
        'summary': 'Returns all categories with all subcategories, types, headers, and data.',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all categories with all subcategories, types, headers, and data. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no categories exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/all/subcategories' : {
      'get': {
        'tags': ['all'],
        'summary': 'Returns all subcategories with all types, headers, and data.',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategories with all types, headers, and data. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategories exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/all/subcategory_headers' : {
      'get': {
        'tags': ['all'],
        'summary': 'Returns all subcategory headers with all data.',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategory headers with all data. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategory headers exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/auth/login': {
      'post': {
        'tags': ['auth'],
        'summary': 'Authenticates a user',
        'responses': {
          '200': { "description": "__Success__; assigns a JWT _access-token_ cookie to the user. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; email or password is incorrect, user doesn't exist, or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/auth/logout': {
      'post': {
        'tags': ['auth'],
        'summary': 'Deauthenticates a user',
        'responses': {
          '200': { "description": "__Success__; removes _access-token_ cookie from the user. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; user is not logged in or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/auth/register': {
      'post': {
        'tags': ['auth'],
        'summary': 'Registers a user',
        'responses': {
          '200': { "description": "__Success__; creates new _unverified_ user with the _user_ role. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; email is already taken, user already has assigned _access-token_ cookie, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` and `errorMessage`" }
        }
      }
    },

    '/categories': {
      'get': {
        'tags': ['categories'],
        'summary': 'Returns all categories',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all categories. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no categories exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['categories'],
        'summary': 'Creates a category',
        'responses': {
          '201': { "description": "__Success__; created category and returns new category and success message. __Returns__ `message` _string_ and `category` _object_." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/categories/{categoryUUID}': {
      'get': {
        'tags': ['categories'],
        'summary': 'Returns a specific category',
        'parameters': [{
          'name': 'categoryUUID',
          "in": "path",
          "description": "The UUID of the target category. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a category object with corresponding subcategories, type, headers, and data. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['categories'],
        'summary': 'Updates a category',
        'parameters': [{
          'name': 'categoryUUID',
          "in": "path",
          "description": "The UUID of the target category. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; updated category and returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['categories'],
        'summary': 'Deletes a category',
        'parameters': [{
          'name': 'categoryUUID',
          "in": "path",
          "description": "The UUID of the target category. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; deleted category and returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/feedback': {
      'get': {
        'tags': ['feedback'],
        'summary': 'Returns all feedback',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all feedback. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no feedback exists or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['feedback'],
        'summary': 'Creates feedback',
        'responses': {
          '201': { "description": "__Success__; returns new feedback and success message. __Returns__ `message` _string_ and `feedback` object." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/feedback/{feedbackUUID}': {
      'get': {
        'tags': ['feedback'],
        'summary': 'Returns specific feedback',
        'parameters': [{
          'name': 'feedbackUUID',
          "in": "path",
          "description": "The UUID of the target feedback. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a feedback object. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['feedback'],
        'summary': 'Updates feedback',
        'parameters': [{
          'name': 'feedbackUUID',
          "in": "path",
          "description": "The UUID of the target feedback. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['feedback'],
        'summary': 'Deletes feedback',
        'parameters': [{
          'name': 'feedbackUUID',
          "in": "path",
          "description": "The UUID of the target feedback. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/subcategories': {
      'get': {
        'tags': ['subcategories'],
        'summary': 'Returns all subcategories',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategories. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategories exists or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['subcategories'],
        'summary': 'Creates subcategory',
        'responses': {
          '201': { "description": "__Success__; returns new subcategory and success message. __Returns__ `message` _string_ and `subcategory` object." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/subcategories/{subcategoryUUID}': {
      'get': {
        'tags': ['subcategories'],
        'summary': 'Returns specific subcategory',
        'parameters': [{
          'name': 'subcategoryUUID',
          "in": "path",
          "description": "The UUID of the target subcategory. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a subcategory object with corresponding category, type, headers, and data. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['subcategories'],
        'summary': 'Updates subcategory',
        'parameters': [{
          'name': 'subcategoryUUID',
          "in": "path",
          "description": "The UUID of the target subcategory. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['subcategories'],
        'summary': 'Deletes subcategory',
        'parameters': [{
          'name': 'subcategoryUUID',
          "in": "path",
          "description": "The UUID of the target subcategory. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/subcategory_data': {
      'get': {
        'tags': ['subcategory_data'],
        'summary': 'Returns all subcategory data',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategory data. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategory data exists or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['subcategory_data'],
        'summary': 'Creates subcategory data',
        'responses': {
          '201': { "description": "__Success__; returns new subcategory data and success message. __Returns__ `message` _string_ and `subcategory_data` _object_." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/subcategory_data/{subcategoryDataUUID}': {
      'get': {
        'tags': ['subcategory_data'],
        'summary': 'Returns specific subcategory data',
        'parameters': [{
          'name': 'subcategoryDataUUID',
          "in": "path",
          "description": "The UUID of the target subcategory data. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a subcategory data object with corresponding header, subcategory, type, and category. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['subcategory_data'],
        'summary': 'Updates subcategory data',
        'parameters': [{
          'name': 'subcategoryDataUUID',
          "in": "path",
          "description": "The UUID of the target subcategory data. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['subcategory_data'],
        'summary': 'Deletes subcategory data',
        'parameters': [{
          'name': 'subcategoryDataUUID',
          "in": "path",
          "description": "The UUID of the target subcategory data. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/subcategory_headers': {
      'get': {
        'tags': ['subcategory_headers'],
        'summary': 'Returns all subcategory headers',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategory headers. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategory data exists or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['subcategory_headers'],
        'summary': 'Creates subcategory header',
        'responses': {
          '201': { "description": "__Success__; returns new subcategory header and success message. __Returns__ `message` _string_ and `subcategory_header` _object_." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/subcategory_headers/{subcategoryHeaderUUID}': {
      'get': {
        'tags': ['subcategory_headers'],
        'summary': 'Returns specific subcategory header',
        'parameters': [{
          'name': 'subcategoryHeaderUUID',
          "in": "path",
          "description": "The UUID of the target subcategory header. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a subcategory header object with corresponding data, subcategory, type, and category. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['subcategory_headers'],
        'summary': 'Updates subcategory header',
        'parameters': [{
          'name': 'subcategoryHeaderUUID',
          "in": "path",
          "description": "The UUID of the target subcategory header. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['subcategory_headers'],
        'summary': 'Deletes subcategory header',
        'parameters': [{
          'name': 'subcategoryHeaderUUID',
          "in": "path",
          "description": "The UUID of the target subcategory header. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/subcategory_types': {
      'get': {
        'tags': ['subcategory_types'],
        'summary': 'Returns all subcategory types',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all subcategory types. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no subcategory types exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['subcategory_types'],
        'summary': 'Creates subcategory type',
        'responses': {
          '201': { "description": "__Success__; returns new subcategory type and success message. __Returns__ `message` _string_ and `subcategory_type` _object_." },
          '400': { "description": "__Fail__; one or more values don't match the table constraints or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/subcategory_types/{subcategoryTypeUUID}': {
      'get': {
        'tags': ['subcategory_types'],
        'summary': 'Returns specific subcategory type',
        'parameters': [{
          'name': 'subcategoryTypeUUID',
          "in": "path",
          "description": "The UUID of the target subcategory type. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a subcategory type object with corresponding subcategories, headers, and data. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error.  __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['subcategory_types'],
        'summary': 'Updates subcategory type',
        'parameters': [{
          'name': 'subcategoryTypeUUID',
          "in": "path",
          "description": "The UUID of the target subcategory type. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['subcategory_types'],
        'summary': 'Deletes subcategory type',
        'parameters': [{
          'name': 'subcategoryTypeUUID',
          "in": "path",
          "description": "The UUID of the target subcategory type. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },

    '/users': {
      'get': {
        'tags': ['users'],
        'summary': 'Returns all users',
        'responses': {
          '200': { "description": "__Success__; returns an object array of all users. __Returns__ `message` _array_." },
          '400': { "description": "__Fail__; no users exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'post': {
        'tags': ['users'],
        'summary': 'Creates user',
        'responses': {
          '201': { "description": "__Success__; returns new user and success message. __Returns__ `message` _string_ and `user` _object_." },
          '400': { "description": "__Fail__; email is not unique, one or more values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    },
    '/users/{userUUID}': {
      'get': {
        'tags': ['users'],
        'summary': 'Returns specific user',
        'parameters': [{
          'name': 'userUUID',
          "in": "path",
          "description": "The UUID of the target user. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns a user object. __Returns__ `message` _object_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'put': {
        'tags': ['users'],
        'summary': 'Updates user',
        'parameters': [{
          'name': 'userUUID',
          "in": "path",
          "description": "The UUID of the target user. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist, one or more new values don't match the table constraints, or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      },
      'delete': {
        'tags': ['users'],
        'summary': 'Deletes user',
        'parameters': [{
          'name': 'userUUID',
          "in": "path",
          "description": "The UUID of the target user. (e.g., d68f9437-6d11-4a8b-bd32-760c2101c793)",
          "required": true,
          "type": "string",
        }],
        'responses': {
          '200': { "description": "__Success__; returns success message. __Returns__ `message` _string_." },
          '400': { "description": "__Fail__; UUID doesn't exist or database error. __Returns__ `error` _object_ and `errorMessage` _string_." },
          '5XX': { "description": "__Unexpected error__; database connection error or other error. __Returns__ `error` _object_ and `errorMessage` _string_." }
        }
      }
    }
  }
}

module.exports = swaggerDocument