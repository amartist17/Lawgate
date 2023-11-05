const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a security amount"],
  },
  // addressDetails:{
  //     address: {
  //       type: String,
  //     },
  //     postcode: {
  //       type: String,
  //     },
  //     country: {
  //       type: String,
  //     },
  // },
  address: {
    type: String,
  },
  images:[
    {type: String}
  ],
  // location:{
  //   lat: String,
  //   long: String
  // },
  description:{
    type: String,
  },
  owner: String,
  caretaker: String,
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
    
});


module.exports = mongoose.model("Property", propertySchema);
