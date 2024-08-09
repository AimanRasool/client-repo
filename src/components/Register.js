import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://server-repo-tan.vercel.app/api',
         { username,
           email, 
           password });
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'> 
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
           <div className='mb-3'>
           <label><strong>Username</strong></label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label><strong>Email</strong></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label><strong>Password</strong></label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button><br></br>
              </form>
              <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' >Login</Link>
     </div>
    </div>

  );

}
export default Register;
