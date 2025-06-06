import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold text-center text-gray-900">Login to your account</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">e-mail</label>
            <div className="relative">
              <input type="email" placeholder="Your e-mail" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m-4 8h16M4 8h16" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input type="password" placeholder="Your password" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m-4 8h16M4 8h16" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-500">Forgot password?</a>
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" className="w-full px-4 py-2 mr-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50">Register</button>
            <button type="submit" className="w-full px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;