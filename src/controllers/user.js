"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// User Controller:

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
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

        const filters = (req.user?.isAdmin) ? {} : { _id: req.user._id }

        const data = await res.getModelList(User, filters)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

        // Disallow setting admin/staff:
        req.body.isStaff = false
        req.body.isAdmin = false

        const data = await User.create(req.body)

        // Create token for auto-login:
        const tokenData = await Token.create({
            userId: data._id,
            token: passwordEncrypt(data._id + Date.now())
        })

        res.status(201).send({
            error: false,
            token: tokenData.token,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

        const filters = (req.user?.isAdmin) ? { _id: req.params.id } : { _id: req.user._id }

        const data = await User.findOne(filters)

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

        const filters = (req.user?.isAdmin) ? { _id: req.params.id } : { _id: req.user._id }
        req.body.isAdmin = (req.user?.isAdmin) ? req.body.isAdmin : false

        const data = await User.updateOne(filters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await User.findOne(filters)
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        const filters = (req.user?.isAdmin) ? { _id: req.params.id } : { _id: req.user._id }

        const data = await User.deleteOne(filters)

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}