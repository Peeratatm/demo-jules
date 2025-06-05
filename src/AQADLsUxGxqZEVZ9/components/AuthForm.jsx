import React from 'react';

const AuthForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-lg text-gray-600 mb-2">Please enter your details</h2>
        <h1 className="text-2xl font-bold mb-6">Welcome back</h1>
        <form>
          <input
            className="w-full p-3 mb-4 border rounded-md"
            type="email"
            placeholder="Email address"
          />
          <input
            className="w-full p-3 mb-4 border rounded-md"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2"/>
              Remember for 30 days
            </label>
            <a href="#" className="text-blue-600">Forgot password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded-md mb-4">
            Sign up
          </button>
          <button className="w-full bg-white text-black border flex justify-center items-center p-3 rounded-md">
            <img src="/path/to/google-logo.png" alt="Google" className="w-4 h-4 mr-2"/>
            Sign in with Google
          </button>
        </form>
        <div className="text-center mt-6">
          Don't have an account? <a href="#" className="text-blue-600">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;