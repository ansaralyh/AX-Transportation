"use client"


import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#282121] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo with radial gradient background */}
          <div className="relative w-[150px] sm:w-[200px] h-[200px] flex items-center">
            <div className="absolute w-[250px] sm:w-[300px] h-full left-[-50px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)]" />
            <img
              src="/assets/image 54.png"
              alt="AXT Transportation Logo"
              className="relative z-10 w-[120px] sm:w-[150px] h-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm text-gray-200 text-[20px]">
            <a href="#" className="hover:text-white transition-colors">
              Real-Time Tracking
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Driver Profiles
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Maintenance
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Reports
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2">
            <Link to="/sign-in">
  <button className="px-3 sm:px-4 py-1.5 bg-[#FF6B00] text-white text-sm font-medium rounded hover:bg-[#FF8533] transition-colors">
    Login
  </button>
</Link>
<Link to="/sign-up">
              <button className="px-3 sm:px-4 py-1.5 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors">
                Sign Up
              </button>
</Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            >
              <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
              <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
              <span className="block w-6 h-[2px] bg-[#FF6B00]"></span>
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 bottom-0 z-10 w-[75%] sm:w-[60%] bg-zinc-900 transform transition-transform duration-300 ease-in-out md:hidden`}
        >

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-4 w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#FF6B00] transform -translate-y-1/2 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-[#FF6B00] transform -translate-y-1/2 -rotate-45"></span>
            </div>
          </button>

          <div className="flex flex-col h-full pt-20 pb-6 px-4">
            <nav className="flex flex-col space-y-4 text-gray-200">
              <a href="#" className="hover:text-white transition-colors py-2">
                Real-Time Tracking
              </a>
              <a href="#" className="hover:text-white transition-colors py-2">
                Driver Profiles
              </a>
              <a href="#" className="hover:text-white transition-colors py-2">
                Maintenance
              </a>
              <a href="#" className="hover:text-white transition-colors py-2">
                Reports
              </a>
              <a href="#" className="hover:text-white transition-colors py-2">
                Contact
              </a>
            </nav>

            <div className="mt-auto flex flex-col space-y-2">
              <button className="w-full py-2 bg-[#FF6B00] text-white text-sm font-medium rounded hover:bg-[#FF8533] transition-colors">
                Login
              </button>
              <button className="w-full py-2 text-white text-sm font-medium rounded border border-white/20 hover:bg-white/10 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[5] md:hidden" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  )
}

export default Header

