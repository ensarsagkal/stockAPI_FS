"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "name": "Firm 1",
    "phone": "999 88 77",
    "address": "Address",
    "image": "http://imageURL"
}
/* ------------------------------------------------------- */
// Firm Model:

const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        trim: true,
    },

    address: {
        type: String,
        trim: true,
    },

    image: { // URL
        type: String,
        trim: true,
        default: ''
    }

}, { collection: 'Firms', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Firm', FirmSchema)