"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Firm Controller:

const Firm = require('../models/firm')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "List Firms"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Firm)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Firm),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Create Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Firm 1",
                    "phone": "999 88 77",
                    "address": "Address",
                    "image": "http://imageURL"
                }
            }
        */

        const data = await Firm.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get Single Firm"
        */

        const data = await Firm.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Update Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Firm 1",
                    "phone": "999 88 77",
                    "address": "Address",
                    "image": "http://imageURL"
                }
            }
        */

        const data = await Firm.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Firm.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete Firm"
        */

        const data = await Firm.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}