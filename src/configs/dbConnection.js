"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')

const dbConnection = function () {
    // Connect:
    mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log('* DB Connected * ')
            // Syncronization (must be in commentLine):
            // require('./sync')() // !!! It clear database.
        })
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 