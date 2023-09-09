import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BasicMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="cursor-pointer">
      <div
        id="basic-button"
        onClick={handleClick}
        className="flex items-center gap-0.25rem text-gray-500 border border-gray-300 px-2 py-1 rounded-full profile-menu-flex"
      >
        <MenuIcon className="h-5 w-5" />
        <AccountCircleIcon className="h-5 w-5" />
      </div>
      {isOpen && (
        <div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={handleClose}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Signup
            </button>
            <button
              onClick={handleClose}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Login
            </button>
            <hr className="my-1 border-gray-200" />
            <button
              onClick={handleClose}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Airbnb Your Home
            </button>
            <button
              onClick={handleClose}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Host an experience
            </button>
            <button
              onClick={handleClose}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Help
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
