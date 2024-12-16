import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div>
      <h1>Thank you for booking!</h1>
      <Link to="/">Return to Home</Link>
      <br />
      <Link to="/view-bookings">View Bookings</Link> {/* Link to view bookings */}
    </div>
  );
}

export default ThankYou;
