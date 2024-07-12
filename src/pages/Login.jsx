import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'roshni' && password === 'aspen223') {
      localStorage.setItem('authenticated', 'true');
      navigate('/roshni');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="sm:px-20 sm:py-5 sm:m-10 mt-10 py-24 px-10">
      <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-6 border rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-custom-green text-white p-2 rounded hover:bg-red-300 transition duration-1000"
          >
            Login
          </button>
        </div>
      </div>

    </div>
  );
}

export default Login;