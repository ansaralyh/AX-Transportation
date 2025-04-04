
import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row-reverse bg-gray-200">
      {/* Right Section - Image (Displayed on top in mobile view) */}
      <div className="w-full h-64 md:w-1/2 md:h-full">
        <img
          src="/assets/truck.jpg"
          alt="Truck"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Left Section - SignIn Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/image 54.png"
              alt="Logo"
              className="h-10"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter details to login to your account
          </p>
          <form>
            {/* Email/Phone Input */}
            <input
              type="text"
              placeholder="E-mail or phone number"
              className="w-full px-4 py-2 mb-4 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {/* Sign In Button */}
            <button className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600 transition">
              Sign In
            </button>
          </form>
          {/* Social Sign In Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition w-full">
              Sign in with Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition w-full">
              Sign in with Facebook
            </button>
          </div>
          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don't have an account? {" "}
            <Link to='/sign-up'>
            <a href="#" className="text-orange-500 hover:underline">
              Sign up
            </a>
            </Link>
          </p>
          {/* Register Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link to="/driver-dashboard">

            <button className="bg-orange-200 text-black py-2 px-4 rounded flex items-center justify-center gap-2 shadow-md hover:bg-orange-300 transition w-full">
              <FaUser className="text-black" /> Driver 
            </button>
            </Link>
            <Link to="/admin-dashboard">
            <button className="bg-orange-200 text-black py-2 px-4 rounded flex items-center justify-center gap-2 shadow-md hover:bg-orange-300 transition w-full">
              <FaUser className="text-black" /> Admin 
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
