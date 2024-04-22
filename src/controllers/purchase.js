"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Purchase Controller:

const Product = require('../models/product')
const Purchase = require('../models/purchase')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
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

        const data = await res.getModelList(Purchase, {}, ['firmId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Purchase),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "firmId": "65343222b67e9681f937f304",
                    "brandId": "65343222b67e9681f937f107",
                    "productId": "65343222b67e9681f937f422",
                    "quantity": 1,
                    "price": 9.99
                }
            }
        */

        // Auto add userId to req.body:
        req.body.userId = req.user?._id

        // Create:
        const data = await Purchase.create(req.body)

        // set product-quantity when Purchase process:
        const updateProduct = await Product.updateOne({ _id: data.productId }, { $inc: { quantity: +data.quantity } })

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */

        // Read:
        const data = await Purchase.findOne({ _id: req.params.id }).populate(['firmId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "firmId": "65343222b67e9681f937f304",
                    "brandId": "65343222b67e9681f937f107",
                    "productId": "65343222b67e9681f937f422",
                    "quantity": 1,
                    "price": 9.99
                }
            }
        */

        if (req.body?.quantity) {
            // get current product-quantity from the Purchase:
            const currentPurchase = await Purchase.findOne({ _id: req.params.id })
            // different:
            const quantity = req.body.quantity - currentPurchase.quantity
            // set product-quantity when Purchase process:
            const updateProduct = await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: +quantity } })
        }

        // Update:
        const data = await Purchase.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Purchase.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

        // get current product-quantity from the Purchase:
        const currentPurchase = await Purchase.findOne({ _id: req.params.id })
        // console.log(currentPurchase)

        // Delete:
        const data = await Purchase.deleteOne({ _id: req.params.id })

        // set product-quantity when Purchase process:
        const updateProduct = await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: -currentPurchase.quantity } })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}