"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Sale Controller:

const Product = require('../models/product')
const Sale = require('../models/sale')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
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

        const data = await res.getModelList(Sale, {}, ['brandId', 'productId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Sale),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "brandId": "65343222b67e9681f937f107",
                    "productId": "65343222b67e9681f937f422",
                    "quantity": 1,
                    "price": 9.99
                }
            }
        */

        // Auto add userId to req.body:
        req.body.userId = req.user?._id

        // get product info:
        const currentProduct = await Product.findOne({ _id: req.body.productId })

        if (currentProduct.quantity >= req.body.quantity) { // Check Limit

            // Create:
            const data = await Sale.create(req.body)

            // set product-quantity when Sale process:
            const updateProduct = await Product.updateOne({ _id: data.productId }, { $inc: { quantity: -data.quantity } })

            res.status(201).send({
                error: false,
                data,
            })

        } else {

            res.errorStatusCode = 422
            throw new Error('There is not enough product-quantity for this sale.', { cause: { currentProduct } })
        }
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */

        // Read:
        const data = await Sale.findOne({ _id: req.params.id }).populate(['brandId', 'productId'])

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "brandId": "65343222b67e9681f937f107",
                    "productId": "65343222b67e9681f937f422",
                    "quantity": 1,
                    "price": 9.99
                }
            }
        */

        if (req.body?.quantity) {
            // get current product-quantity from the Sale:
            const currentSale = await Sale.findOne({ _id: req.params.id })
            // different:
            const quantity = req.body.quantity - currentSale.quantity
            // console.log(quantity)
            // set product-quantity when Sale process:
            const updateProduct = await Product.updateOne({ _id: currentSale.productId, quantity: { $gte: quantity } }, { $inc: { quantity: -quantity } })
            // console.log(updateProduct)
            
            // if product-quantity limit not enough:
            if (updateProduct.modifiedCount == 0) { // Check Limit
                res.errorStatusCode = 422
                throw new Error('There is not enough product-quantity for this sale.')
            }
        }

        // Update:
        const data = await Sale.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Sale.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

        // get current product-quantity from the Sale:
        const currentSale = await Sale.findOne({ _id: req.params.id })
        // console.log(currentSale)

        // Delete:
        const data = await Sale.deleteOne({ _id: req.params.id })

        // set product-quantity when Sale process:
        const updateProduct = await Product.updateOne({ _id: currentSale.productId }, { $inc: { quantity: +currentSale.quantity } })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}