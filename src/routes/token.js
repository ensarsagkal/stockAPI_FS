"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/token:

const { isAdmin } = require('../middlewares/permissions')
const token = require('../controllers/token')

// URL: /tokens

router.use(isAdmin)

router.route('/')
    .get(token.list)
    .post(token.create)

router.route('/:id')
    .get(token.read)
    .put(token.update)
    .patch(token.update)
    .delete(token.delete)

/* ------------------------------------------------------- */
module.exports = router