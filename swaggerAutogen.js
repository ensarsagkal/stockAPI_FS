"use strict"
/* -------------------------------------------------------
	EXPRESS - Personnel API
------------------------------------------------------- */
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com/#",
		contact: { name: packageJson.author, email: "qadir@clarusway.com" },
		license: { name: packageJson.license, },
	},
	host: 'stock-api-js.fullstack.clarusway.com',
	basePath: '/',
	schemes: ['https'],
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
		Token: {
			in: 'header',
			type: 'apiKey',
			name: 'Authorization',
			description: 'Token Authentication * Example: <b>Token ...tokenKey...</b>'
		},
		Bearer: {
			in: 'header',
			type: 'apiKey',
			name: 'Authorization',
			description: 'JWT Authentication * Example: <b>Bearer ...accessToken...</b>'
		},
	},
	security: [{ Token: [] }, { Bearer: [] }],
	definitions: {
		// Models:
		"User": require('./src/models/user').schema.obj,
		"Brand": require('./src/models/brand').schema.obj,
		"Category": require('./src/models/category').schema.obj,
		"Firm": require('./src/models/firm').schema.obj,
		"Product": require('./src/models/product').schema.obj,
		"Purchase": require('./src/models/purchase').schema.obj,
		"Sale": require('./src/models/sale').schema.obj,
	}
}

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)