const mongoose = require("mongoose");
const Rooms = require('./roomModel')
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
  rooms:[{
    type: mongoose.Schema.ObjectId,
    ref: "Room",
    default: []
  }],
  revenue:{
    type: Number,
    default:0

},
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
    
});

propertySchema.methods.addRooms = async function (rooms) {
  try {
    // Insert new rooms and directly get the result
    const insertedDocuments = await Rooms.insertMany(rooms);
    let revenue=0
    // Extract the _id fields from the inserted documents
    const roomIds = insertedDocuments.map(doc =>{ 
      revenue+= doc.rent
      return doc._id.toString()});

    // Update the rooms property of the current document
    this.rooms = [...this.rooms, ...roomIds];
    this.revenue= revenue  
    // Save the updated document
    await this.save();

    return roomIds; // Optionally return the new room IDs
  } catch (error) {
    console.error('Error in addRooms:', error);
    throw error; // or handle the error as needed
  }
};


// async function calculateTotalRevenue(rooms) {
//   let totalRevenue = 0;
//   for (const roomId of rooms) {
//     const room = await Rooms.findById(roomId);
//     if (room) {
//       totalRevenue += room.rent; // Assuming 'rent' is a field in your Room model
//     }
//   }
//   return totalRevenue;
// }

// // Merged post middleware for find and findOne operations
// propertySchema.post(/^find/, async function(result) {
//   if (Array.isArray(result)) {
//     // If the result is an array (from 'find'), process each document
//     for (const doc of result) {
//       doc._doc.revenue = await calculateTotalRevenue(doc.rooms);
//     }
//   } else if (result) {
//     // If the result is a single document (from 'findOne' or 'findById'), process it
//     result._doc.revenue = await calculateTotalRevenue(result.rooms);
//   }
// });


module.exports = mongoose.model("Property", propertySchema);
