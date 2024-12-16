const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Route to get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings from MongoDB
    res.json(bookings); // Send the bookings as JSON
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Route to create a new booking
router.post('/book-table', async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  if (!name || !email || !date || !time || !guests) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newBooking = new Booking({ name, email, date, time, guests });
    await newBooking.save(); // Save the new booking to MongoDB
    res.json({ message: 'Booking successful', booking: newBooking });
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).json({ message: 'Error occurred while booking. Please try again.' });
  }
});

module.exports = router;
