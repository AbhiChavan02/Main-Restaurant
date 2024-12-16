import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure email and password are provided before making the request
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter both email and password!',
      });
      return;
    }

    // Send the login request to the server
    axios.post('http://localhost:3005/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          // Navigate to the New page if login is successful
          navigate('/New');
        } else {
          // Show an error alert if login failed
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password!',
          });
        }
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred, please try again later.',
        });
      });
  };

  return (
    <div className="main_class">
      <div className="ast">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/" className="btn">
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default Login;
