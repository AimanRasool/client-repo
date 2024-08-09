import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      navigate('/register');
    }
  }, [navigate]);

  return (
    <div>
      {authenticated ? (
        <h2>Hello Home</h2>
      ) : (
        <p>Login first</p>
      )}
    </div>
  );
};

export default Home;

// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }
