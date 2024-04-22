"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const permissions = require('../middlewares/permissions')
const purchase = require('../controllers/purchase')

// URL: /purchases

router.route('/')
    .get(permissions.isStaff, purchase.list)
    .post(permissions.isStaff, purchase.create)

router.route('/:id')
    .get(permissions.isStaff, purchase.read)
    .put(permissions.isStaff, purchase.update)
    .patch(permissions.isStaff, purchase.update)
    .delete(permissions.isStaff, purchase.delete)

/* ------------------------------------------------------- */
module.exports = router