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
    '/categories': {
      'get': {
        'tags': ['categories'],
        'summary': 'Returns an array of all category',
        'responses': {
          '200': { "description": "Successful operation. Returns an array of all categories and success message.", },
          '400': { "description": "Database error; no categories exist.", },
          '5XX': { "description": "Database connection error or unexpected error.", }
        }
      },
      'post': {
        'tags': ['categories'],
        'summary': 'Creates a category',
        'responses': {
          '201': { "description": "Successful operation. Returns new category and success message.", },
          '400': { "description": "Database error; one or more values don't match the table constraints.", },
          '5XX': { "description": "Database connection error or unexpected error.", }
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
          '200': { "description": "Successful operation. Returns category and success message.", },
          '400': { "description": "Database error; UUID doesn't exist.", },
          '5XX': { "description": "Database connection error or unexpected error.", }
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
          '200': { "description": "Successful operation. Returns success message." },
          '400': { "description": "Database error; UUID doesn't exist, or one or more new values don't match the table constraints.", },
          '5XX': { "description": "Database connection error or unexpected error.", }
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
          '200': { "description": "Successful operation. Returns success message." },
          '400': { "description": "Database error; UUID doesn't exist.", },
          '5XX': { "description": "Database connection error or unexpected error.", }
        }
      }
    }

  }
}

module.exports = swaggerDocument