import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';
import Swal from 'sweetalert2';
import './Booktable.css'; // Make sure this CSS file is linked

function BookTable() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [meridian, setMeridian] = useState('AM');
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show confirmation dialog using SweetAlert2
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to confirm this booking?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, book it!',
      cancelButtonText: 'No, cancel',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        // Send booking data to the server
        const response = await axios.post('http://localhost:3005/api/book-table', {
          name,
          email,
          date,
          time: `${time} ${meridian}`,
          guests,
        });

        // Show success alert
        Swal.fire('Booked!', response.data.message, 'success');

        // Redirect to Thank You page
        navigate('/thank-you');
      } catch (err) {
        // Show error alert
        Swal.fire('Error!', 'Something went wrong while booking. Please try again.', 'error');
      }
    }
  };

  return (
    <div className="main_class">
      <div className="pb">
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date">
              <strong>Date</strong>
            </label>
            <input
              type="date"
              name="date"
              className="form-control rounded-0"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="time-section">
            <div className="mb-3">
              <label htmlFor="time">
                <strong>Time</strong>
              </label>
              <input
                type="time"
                name="time"
                className="form-control rounded-0"
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="meridian">
                <strong>AM/PM</strong>
              </label>
              <select
                name="meridian"
                className="form-control rounded-0"
                onChange={(e) => setMeridian(e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="guests">
              <strong>Number of Guests</strong>
            </label>
            <select
              name="guests"
              className="form-control rounded-0"
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="" disabled selected>Select Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
              <option value="9">9 Guests</option>
              <option value="10">10+ Guests</option>
            </select>
          </div>

          <button type="submit" className="btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTable;
