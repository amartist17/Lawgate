const Properties = require('../models/propertyModel')

exports.addProperty = async (req, res, next) => {
    console.log(req.body, req.files)
    let files = req.body.files
    delete req.body.images
    let newProperty = await Properties.create(req.body)
    res.redirect("/dashboard/admin-dashboard/add-property")
};


