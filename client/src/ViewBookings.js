import { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBookings.css';


function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch bookings from the backend
    axios
      .get('http://localhost:3005/api/bookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        setError('Error fetching bookings');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>View Bookings</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBookings;
