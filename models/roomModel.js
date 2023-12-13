const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  building: {
    type: mongoose.Schema.ObjectId,
    ref: "Building",
  },
  roomNumber:{
    type: String,
    required: [true, "Please enter a room number"],

  },
  rent:{
    type: Number,
    required: [true, "Please enter a rent amount"],
  },
  security:{
    type: Number,
    required: [true, "Please enter a security amount"],
  },
  rentLeft:{
    type: Number,
  },
  // images:[
  //   {type: String}
  // ],
  // description:{
  //   type: String,
  // },
  securityLeft:{
    type: Number,
  },
  electricityBillLeft:{
    type: Number,
  },
  tenants:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
    
  //   passwordChangedAt: Date,
  // passwordResetToken: String,
  //   passwordResetExpires: Date,
  //   active: {
  //     type: Boolean,
  //     default: true,
  //     select: false,
  //   },
});


module.exports = mongoose.model("Room", roomSchema);
