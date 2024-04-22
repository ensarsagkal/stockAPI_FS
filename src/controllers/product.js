"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Product Controller:

const Product = require('../models/product')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "List Products"
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

        const data = await res.getModelList(Product, {}, ['categoryId', 'brandId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Product),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "categoryId": "65343222b67e9681f937f203",
                    "brandId": "65343222b67e9681f937f107",
                    "name": "Product 1"
                }
            }
        */

        const data = await Product.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get Single Product"
        */

        const data = await Product.findOne({ _id: req.params.id }).populate(['categoryId', 'brandId'])

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "categoryId": "65343222b67e9681f937f203",
                    "brandId": "65343222b67e9681f937f107",
                    "name": "Product 1"
                }
            }
        */

        const data = await Product.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Product.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Delete Product"
        */

        const data = await Product.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}