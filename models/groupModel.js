const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({

  properties:[
    {
        type: mongoose.Schema.ObjectId,
        ref: "Building",
      }
  ],
  colorCode: {type: String},
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
    
});


module.exports = mongoose.model("Group", groupSchema);
