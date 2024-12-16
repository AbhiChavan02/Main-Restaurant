const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import the models
const EmployeeModel = require("./models/Employees");
const Booking = require("./models/Booking");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://abhijeetchavan212002:Abhi%40212002@register.g6hj3.mongodb.net/?retryWrites=true&w=majority&appName=Register", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password == password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.status(500).json("Error in login: " + err));
});

// Register Route
app.post("/register", (req, res) => {
  // Log incoming request to check if data is being received properly
  console.log("Register data: ", req.body);

  EmployeeModel.create(req.body)
    .then((employee) => {
      console.log("New employee created: ", employee);
      res.json(employee);
    })
    .catch((err) => {
      console.log("Error creating employee: ", err);
      res.status(500).json(err);
    });
});

// Book Table Route
app.post("/api/book-table", (req, res) => {
  const { name, email, date, time, guests } = req.body;

  // Log the incoming data for debugging
  console.log("Book Table data: ", req.body);

  // Create a new booking instance
  const newBooking = new Booking({
    name,
    email,
    date,
    time,
    guests,
  });

  // Save to MongoDB
  newBooking
    .save()
    .then(() => {
      console.log("Booking saved successfully");
      res.json("Booking Successful");
    })
    .catch((err) => {
      console.log("Error saving booking: ", err);
      res.status(500).json("Error saving booking: " + err);
    });
});

// Start Server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
