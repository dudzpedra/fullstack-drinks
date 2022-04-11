const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  title: String,
  artist: String,
  vendor: String,
  average: Number,
  reviews: Number,
  ratings: Array,
});

drinkSchema.set("toJSON", {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model('Drink', drinkSchema)