var mongoose = require("mongoose");
var connection = mongoose
  .connect(
    "mongodb+srv://tanu2308:tanu2002@cluster0.udqpck0.mongodb.net/testing?retryWrites=true&w=majority",
    // "mongodb://localhost:27017/",
    // "mongodb://localhost:27017/",
    // "mongodb+srv://tanu2308:tanu2002@cluster0.udqpck0.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// const listSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   whether_student: {
//     active: Boolean,
//   },
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
// });

module.exports = connection;
