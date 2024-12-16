const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const BookingModel = require('./models/Booking');

const app = express();

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors());

// Serve static files for React
app.use(express.static(path.join(__dirname, 'client/build')));

// MongoDB connection setup
mongoose
  // .connect('mongodb://localhost:27017/restaurant', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .connect('mongodb+srv://abhijeetchavan212002:Abhi%40212002@register.g6hj3.mongodb.net/?retryWrites=true&w=majority&appName=Register', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Route: Handle table booking
app.post('/api/book-table', (req, res) => {
  const { name, email, date, time, guests } = req.body;

  console.log('Received booking request:', req.body); // Debugging log

  // Check if all fields are provided
  if (!name || !email || !date || !time || !guests) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Create a new booking document
  const newBooking = new BookingModel({
    name,
    email,
    date,
    time,
    guests,
  });

  // Save the new booking to the database
  newBooking
    .save()
    .then((savedBooking) => {
      console.log('Booking saved:', savedBooking);
      res.json({ message: 'Booking successful', booking: savedBooking });
    })
    .catch((err) => {
      console.error('Error saving booking:', err);
      res
        .status(500)
        .json({ message: 'Error occurred while booking. Please try again.', error: err });
    });
});

// Route: Get all bookings
app.get('/api/bookings', (req, res) => {
  BookingModel.find()
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => {
      console.error('Error fetching bookings:', err);
      res.status(500).json({ message: 'Failed to fetch bookings.', error: err });
    });
});

// Serve the React app (ensure you've built the React app using `npm run build` in the frontend folder)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(3005, () => {
  console.log('Server is running on http://localhost:3005');
});



// Abhi@212002
// abhijeetchavan212002