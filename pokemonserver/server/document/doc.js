const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon API',
      version: '1.0.0',
      description: 'A RESTful API for managing Pokemon, Trainers, and Zones',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'Username for login',
              example: 'ashketchum',
            },
            password: {
              type: 'string',
              description: 'Password for login',
              example: 'P@ssw0rd!',
            },
          },
        }, 
        Pokemon: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Pokemon unique identifier',
              example: '507f1f77bcf86cd799439011',
            },
            number: {
              type: 'number',
              description: 'Pokemon number',
              example: 25,
            },
            name: {
              type: 'string',
              description: 'Pokemon name',
              example: 'Pikachu',
            },
            types: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Pokemon types',
              example: ['Electric'],
            },
            imageUrl: {
              type: 'string',
              description: 'Pokemon image URL',
              example: 'https://example.com/pikachu.png',
            },
            trainer: {
              type: 'string',
              description: 'Trainer ID reference',
              example: '507f1f77bcf86cd799439012',
            },
            zone: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Zone ID references',
              example: ['507f1f77bcf86cd799439013'],
            },
          },
          required: ['number', 'name'],
        },
        Trainer: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Trainer unique identifier',
              example: '507f1f77bcf86cd799439012',
            },
            name: {
              type: 'string',
              description: 'Trainer name',
              example: 'Ash Ketchum',
            },
            age: {
              type: 'number',
              description: 'Trainer age',
              example: 15,
            },
          },
          required: ['name', 'age'],
        },
        Zone: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Zone unique identifier',
              example: '507f1f77bcf86cd799439013',
            },
            name: {
              type: 'string',
              description: 'Zone name',
              example: 'Viridian Forest',
            },
            region: {
              type: 'string',
              description: 'Zone region',
              example: 'Kanto',
            },
            pokemons: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Pokemon ID references',
              example: ['507f1f77bcf86cd799439011'],
            },
          },
          required: ['name', 'region'],
        },
      },
    },
  },
  apis: ['./server/document/routeDocs/*.js'], // paths to files containing OpenAPI definitions
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;