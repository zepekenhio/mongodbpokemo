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
        Pokemon: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            type: { type: 'string' },
            level: { type: 'number' },
            trainer: { type: 'string' },
            zone: { type: 'string' },
          },
        },
        Trainer: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            age: { type: 'number' },
            pokemons: { type: 'array', items: { type: 'string' } },
          },
        },
        Zone: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            type: { type: 'string' },
            pokemons: { type: 'array', items: { type: 'string' } },
          },
        },
      },
    },
  },
  apis: ['./document/routeDocs/*.js'], // paths to files containing OpenAPI definitions
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;