"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(upload.array('fieldName'))

const multer = require('multer')

module.exports = multer({
    storage: multer.diskStorage({
        destination: './upload/',
        filename: function(req, file, returnCallback) {
            returnCallback(null, file.originalname)
        }
    })
})