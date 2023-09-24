const conn = require("./connection");
const multer = require("multer");
const bcrypt = require("bcrypt");
const registerSchema = require("./registerSchema"); //import registerSchema
const productSchema = require("./productschema"); //import registerSchema
const bodyParser = require("body-parser"); //to send a req from the frontend
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const router = express.Router();
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "somerandomstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 600000,
    },
  })
);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

// app.get("/menu", function (req, res) {
//   res.render("menu");
// });

app.get("/aboutus", function (req, res) {
  res.render("aboutus");
});

app.get("/gallery", function (req, res) {
  res.render("gallery");
});

app.get("/reservation", function (req, res) {
  res.render("reservation");
});

app.get("/menu", async (req, res) => {
  try {
    const menudata = await productSchema.find({});
    res.render("menu", {
      menudata: menudata,
    });
    console.log(menudata);
  } catch (err) {
    console.log(err);
  }
});
// app.get("/dashboard", function (req, res) {
//   if(req.session.user && req.cookies.user_sid){
//    res.render("dashboard/adminlogin")
//   }
//   else{
//     res.redirect("/dashboard")
//   }
//   res.render("dashboard/index2");
// });
app.get("/dashboard", (req,res)=>{
  res.render("dashboard/index2")
})
app.get("/contact", function (req, res) {
  res.render("contact");
});

// app.get("/adminlogin",(req,res)=>{
//   res.render("dashboard/adminlogin")
// })
// login api
app.post("/login", async (req, res) => {
   var email = req.body.email,
   password = req.body.password;

  try {
    var user = await registerSchema
      .findOne({ email: email })
      .exec();
    console.log(user);
    if (!user) {
      res.redirect("/");
    }
    user.comparePassword(password, (error , match) => {
      if (!match) {
        res.redirect("/");
      }
    });
    req.session.user = user;
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
});

//registration api
app.get("/registration", function (req, res) {
  res.render("registration");
});
app.post("/registration", (req, res) => {
  var register = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    password: req.body.password,
    address: req.body.address,
  };
  var regpost = new registerSchema(register);
  regpost
    .save()
    // .then(() => res.json("Register successfully"))
    .then(() => res.redirect("/registration"))
    .catch((err) => res.status(400).json("error:" + err));
});
// app.get("/viewregistration", function (req, res) {
//   res.render("dashboard/viewregistration");
// });
app.get("/viewregistration", async (req, res) => {
  try {
    const regdata = await registerSchema.find({});
    res.render("dashboard/viewregistration", {
      regdata: regdata,
    });
    console.log(regdata);
  } catch (err) {
    console.log(err);
  }
});
//delete api
// app.get("./delete/:id", function (req, res) {
//   registerSchema.findByIdAndRemove(req.params.id, function (err) {
//     if (err) {
//       res.redirect("dashboard/viewregistration");
//     } else {
//       res.redirect("dashboard/viewregistration");
//     }
//   });
// });

// app.get("/delete/:id", async (req, res) => {
//   try {
//     const del = await registerSchema.findByIdAndRemove(req.params.id);
//     res.redirect("/viewregistration");
//   } catch (err) {
//     console.log(err);
//   }
// });
app.get("/delete/:id", async (req, res) => {
  try {
    const del = await registerSchema.findByIdAndRemove(req.params.id);
    res.redirect("/viewregistration");
  } catch (err) {
    console.log(err);
  }
});
app.get("/edit/:id", async (req, res) => {
  try {
    const edit = await registerSchema.findById(req.params.id);
    res.render("dashboard/editregistration", { edit: edit });
  } catch (err) {
    console.log(err);
  }
});

// update registration data

// app.post("/edit/:id", async (req, res) => {
//   try {
//     var updatesignup = {
//       fname: req.body.fname,
//       lname: req.body.lname,
//       email: req.body.email,
//       phone: req.body.phone,
//       city: req.body.city,
//       password: req.body.password,
//       address: req.body.address,
//     };
//     registerSchema.findByIdAndUpdate(req.params.id, updatesignup);
//     res.redirect("/editregistration" + req+params.id);
//   } catch (err) {
//     console.log(err);
//   }
// });
// app.post('/edit/:id', function(req, res) {

//   var updatesignup = {
//           fname: req.body.fname,
//           lname: req.body.lname,
//           email: req.body.email,
//           phone: req.body.phone,
//           city: req.body.city,
//           password: req.body.password,
//           address: req.body.address,ord:req.body.password
//       };

//       registerSchema.findByIdAndUpdate(req.params.id, updatesignup,
//       function (err) {
//     if(err){
//       // req.flash('error_msg', 'Something went wrong! User could not updated.');
//       res.redirect('/viewregistration'+req.params.id);
//   } else {
//   //   req.flash('success_msg', 'Record Updated');
//     res.redirect('/viewregistration');
//   }
//   });
// });

app.post("/edit/:id", async (req, res) => {
  const itemId = req.params.id;
  var updatedData = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    password: req.body.password,
    address: req.body.address,
  }; // Data to update with

  try {
    const updatedItem = await registerSchema.findByIdAndUpdate(
      itemId,
      updatedData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // res.json(updatedItem);
    res.render("/edit/" + itemId);
    res.redirect("/viewregistration");
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// dashboard api


app.get("/addproduct", function (req, res) {
  res.render("dashboard/addproduct");
});

// fileupload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    //cb(null,uuidv4b()+ "-"+Date.now()+path.extname)
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/png", "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });

app.post("/addproduct", upload.single("image"), (req, res) => {
  var menu = {
    name: req.body.name,
    // newname: req.body.newname,
    price: req.body.price,
    about: req.body.about,
    image: req.file.filename,
  };
  var menupost = new productSchema(menu);
  menupost
    .save()
    .then(() => res.redirect("/addproduct"))
    .catch((err) => res.status(400).json("error:" + err));
  // res.redirect("/viewproduct");
});
app.get("/viewproduct", async (req, res) => {
  try {
    const menudata = await productSchema.find({});
    res.render("dashboard/viewproduct", {
      menudata: menudata,
    });
    console.log(menudata);
  } catch (err) {
    console.log(err);
  }
});
app.get("/delete1/:id", async (req, res) => {
  try {
    const delmenu = await productSchema.findByIdAndRemove(req.params.id);
    res.redirect("/viewproduct");
  } catch (err) {
    console.log(err);
  }
});
app.get("/edit1/:id", async (req, res) => {
  try {
    const editmenu = await productSchema.findById(req.params.id);
    res.render("dashboard/editproduct", { editmenu: editmenu });
  } catch (err) {
    console.log(err);
  }
});
app.post("/edit1/:id", async (req, res) => {
  const itemId1 = req.params.id;
  var updatedData1 = {
    name: req.body.name,
    // newname: req.body.newname,
    price: req.body.price,

    about: req.body.about,
  }; // Data to update with

  try {
    const updatedItem1 = await productSchema.findByIdAndUpdate(
      itemId1,
      updatedData1,
      { new: true }
    );

    if (!updatedItem1) {
      return res.status(404).json({ message: "Item not found" });
    }

    // res.json(updatedItem);
    res.render("/edit1/" + itemId1);
    res.redirect("/viewproduct");
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/details/:id", async (req, res) => {
  try {
    const editmenu = await productSchema.findById(req.params.id);
    res.render("productdetails", { editmenu: editmenu });
  } catch (err) {
    console.log(err);
  }
});

app.use("/", router);
app.use(express.static("views"));
app.use(express.static("upload"));
app.listen(3200);
