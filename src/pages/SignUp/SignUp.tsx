import React from 'react';

const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Left Section - Signup Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-[540px] h-[703px] p-8 bg-[#FFFFFF] rounded-lg shadow-2xl">
          <div className="flex justify-center mb-6">
            <img src="/public/assets/image 54.png" alt="Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <p className="text-gray-600 text-center mb-6">Enter details to create your account</p>
          <form>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 mb-4 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {/* Email/Phone Input */}
            <input
              type="text"
              placeholder="E-mail or phone numbers"
              className="w-full px-4 py-2 mb-4 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {/* Password Inputs */}
            <div className="flex space-x-4">
              <input
                type="password"
                placeholder="Password"
                className="w-1/2 px-4 py-2 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-1/2 px-4 py-2 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
              />
            </div>
            {/* Sign Up Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600 transition">
              Sign up
            </button>
          </form>
          {/* Social Sign Up Buttons */}
          <div className="flex justify-between mt-4">
            {/* Google Sign Up */}
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded w-1/2 mr-2 hover:bg-gray-200 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5 mr-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign up with Google
            </button>
            {/* Facebook Sign Up */}
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded w-1/2 ml-2 hover:bg-gray-200 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5 mr-2"
              >
                <path
                  fill="#039BE5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                />
                <path
                  fill="#FFF"
                  d="M26.572 29.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119v-4.359c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729C22.089 42.905 23.032 43 24 43c.968 0 1.911-.095 2.807-.281V29.036z"
                />
              </svg>
              Sign up with Facebook
            </button>
          </div>
          {/* Sign In Link */}
          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="#" className="text-orange-500 hover:underline">
              Sign in
            </a>
          </p>
          {/* Driver Register Button */}
          <button className="w-full bg-gray-800 text-white py-2 rounded mt-4 hover:bg-gray-900 transition">
            Driver Register
          </button>
          {/* Admin Button */}
          <button className="w-full bg-gray-500 text-white py-2 rounded mt-2 hover:bg-gray-600 transition">
            Admin
          </button>
        </div>
      </div>
      {/* Right Section - Image */}
      <div className="w-1/2 h-full">
        <img src="/public/assets/truck.jpg" alt="Truck" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;