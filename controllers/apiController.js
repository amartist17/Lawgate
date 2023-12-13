const Properties = require('../models/propertyModel')

exports.addProperty = async (req, res, next) => {
    let files = req.body.files
    delete req.body.images
    req.body.createdBy = req.user;
    let newProperty = await Properties.create(req.body)
    let combinedArray = req.body.roomNum.map((num, index) => {
        return {
            building: newProperty._id,
            roomNumber: num,
            rent: req.body.rent[index],
            security: req.body.security[index],
            createdBy: req.user
        };
    });
    newProperty.addRooms(combinedArray)
    // res.redirect("/dashboard/admin-dashboard/add-property")
    res.status(200).json({
        status:200,
        property:newProperty
    })
};

exports.deleteProperty = async (req, res, next) => {
    // console.log(req.body, req.files)
    await Properties.findByIdAndDelete(req.body.id)
    res.status(200).json({
        status:200,
    })
};

exports.deleteProperty = async (req, res, next) => {
    // console.log(req.body, req.files)
    const updatedProperty = await Properties.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    // await Properties.findByIdAndDelete(req.body.id)
    res.status(200).json({
        status:200,
        property: updatedProperty
    })
};

