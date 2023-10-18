const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const roomSchema = new mongoose.Schema({
  pg: {
    type: mongoose.Schema.ObjectId,
    ref: "PG",
  },
  rent:{
    type: Number,
    required: [true, "Please enter a rent amount"],
  },
  securityAmount:{
    type: Number,
    required: [true, "Please enter a rent amount"],
  },
  rentLeft:{
    type: Number,
  },
  images:[
    {type: String}
  ],
  description:{
    type: String,
  },
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
  owner: 
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
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
