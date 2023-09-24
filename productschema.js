var mongoose = require("./connection");
var mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // newname: {
  //   type: String,
  //   required: true,
  // },

  price: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  //   date: {
  //     type: Date,
  //     default: Date.now(),
  //   },
});

const productSchema1 = new mongoose.model("productSchema", productSchema);
module.exports = productSchema1;
