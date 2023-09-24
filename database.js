var mongoose = require("mongoose");
mongoose
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

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whether_student: {
    active: Boolean,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
//A mongoose model is a wrapper on the mongoose schema
// mongoose model provides an interface to the database for creating , querying, updating

//collection creation
//imp when we pass const variable its called class
// so it should be starting with caps

const Playlist = new mongoose.model("Playlist", listSchema);
// playlist parameter is a name of collection name and its only define singular form

// create document or insert
const createDocument = async () => {
  try {
    const productList2 = new Playlist({
      name: "Sita",
      email: "@gmail.com",
    });

    //first method of saving data
    // productList2.save()
    const productList3 = new Playlist({
      name: "Tanuj",
      email: "<EMAIL>",
    });
    const productList4 = new Playlist({
      name: "Rahul",
      email: "<EMAIL>",
    });
    const result = await Playlist.insertMany([
      productList2,
      productList3,
      productList4,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
