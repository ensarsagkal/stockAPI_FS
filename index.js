"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const express = require('express')
const path= require("path")
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config({ path: __dirname + '/.env' })
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

app.use(express.static(path.join(__dirname, "public")));

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Cors:
app.use(require('cors')())

// Check Authentication:
app.use(require('./src/middlewares/authentication'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/api/v1/documents', (req, res) => {
    
    res.send(`
        <h3>Stock Management API Service</h3>
        <hr>
        <p>
            Documents:
            <ul> 
                <li><a href="/api/v1/documents/swagger">SWAGGER</a></li>
                <li><a href="/api/v1/documents/redoc">REDOC</a></li>
                <li><a href="/api/v1/documents/json">JSON</a></li>
            </ul>
        </p>
    `)
})

// Routes:
app.use("/api/v1",require('./src/routes'))

/* ------------------------------------------------------- */
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
  });

  app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
})

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`))

if(process.env.NODE_ENV=="development"){
require("./src/configs/sync")()
}