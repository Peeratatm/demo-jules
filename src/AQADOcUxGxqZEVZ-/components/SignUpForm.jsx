import React from 'react';

const SignUpForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <form>
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                placeholder="Please enter your first name" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input 
                type="text" 
                placeholder="Please enter your last name" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <input 
                type="text" 
                placeholder="MM/DD/YY" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <input 
                type="text" 
                placeholder="e.g., Male" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Create Your Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input 
                type="text" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input 
                type="password" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Preferred Language</label>
              <select className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md">
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Receive Email Notifications</label>
              <input 
                type="text" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Profile Picture</label>
              <input 
                type="text" 
                className="mt-1 px-3 py-2 border border-gray-300 w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2"/>
            <label className="text-gray-700">I have read and understood the terms and conditions</label>
          </div>
        </section>

        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;