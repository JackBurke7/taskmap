// Signup.js
import React, { useState } from 'react';
import authService from '../authService';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Call signup method from authService
      await authService.signup(username, password);
      // Redirect or perform any other action upon successful signup
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup failure (show error message, etc.)
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
