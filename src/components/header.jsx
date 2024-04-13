import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="bg-white shadow flex items-center justify-between px-4 py-6">
      <div>
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-pink-500">Dribble</h1>
          <div className="hidden md:flex items-center space-x-4">
          <Link to="/find-work" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold">Inspiration</Link>
            <Link to="/find-work" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold">Find work</Link>
            <Link to="/find-work" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold">Learn Design</Link>
            <Link to="/find-work" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold">Go pro</Link>
            <Link to="/find-work" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base font-semibold">Hire Designers</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="bg-gray-200 focus:outline-none focus:bg-white border-transparent focus:border-gray-300 px-3 py-3 rounded-md text-sm font-medium text-gray-700" />
        </div>
        <div className="flex items-center">
          <img src="/images/user.jpeg" alt="Profile" className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex items-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-3 rounded-md text-sm font-medium">Upload</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
