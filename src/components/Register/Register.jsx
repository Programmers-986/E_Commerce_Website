import React, { useState } from 'react';
import '../Register/Register.css';
import { FaTimes } from 'react-icons/fa';

const Register = ({ onClose, handleToggleLogin, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmpassword || !address) {
      alert("Please fill in all fields!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      setEmail('');
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match!", { position: "top-center", autoClose: 1000 });
      setConfirmPassword('');
    } else {
      // Perform registration logic here
      // For demonstration, let's simulate successful registration
      setTimeout(() => {
        setRegistered(true); 
        setIsLoggedIn(true);
        // Update registration status to true
      }, 1000);
    }
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal'>
        <FaTimes className='close-icon' onClick={onClose} />
        {!registered ? (
          <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
              <input type='text' placeholder='Username' required value={username} onChange={(event) => { setUsername(event.target.value) }} />
            </div>
            <div className='input-box'>
              <input type='email' placeholder='E-mail' required value={email} onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required value={password} onChange={(event) => { setPassword(event.target.value) }} />
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Confirm password' required value={confirmpassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Address' required value={address} onChange={(event) => { setAddress(event.target.value) }} />
            </div>
            <button onClick={handleRegister} type='submit'>Register</button>
            <div className='register-link'>
              <p>
                Have an account?<a href='#' onClick={handleToggleLogin}> Login</a>
              </p>
            </div>
          </form>
        ) : (
          <div className='t3'>
            <h1>You registered successfully!</h1>
            {/* Add any content or redirection logic here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
