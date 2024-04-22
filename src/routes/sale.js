"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/sale:

const permissions = require('../middlewares/permissions')
const sale = require('../controllers/sale')

// URL: /sales

router.route('/')
    .get(permissions.isStaff, sale.list)
    .post(permissions.isStaff, sale.create)

router.route('/:id')
    .get(permissions.isStaff, sale.read)
    .put(permissions.isStaff, sale.update)
    .patch(permissions.isStaff, sale.update)
    .delete(permissions.isStaff, sale.delete)

/* ------------------------------------------------------- */
module.exports = router