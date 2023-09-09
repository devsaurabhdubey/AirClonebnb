import React from "react";
import logo from "../assets/logo/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./BasicMenu";

function Header() {
  return (
    <div className="navbar bg-white sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-12 py-4 border-b">
      <img src={logo} alt="logo" className="navbar-logo h-8" />
      <div className="search-bar flex flex-col md:flex-row justify-start items-center gap-4 md:gap-24 px-5 py-2 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
        <div className="search-bar-text font-semibold border-gray-300 pr-4">Start your search</div>
        <div className="search-icon-div bg-red-500 p-1 rounded-full text-white">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container flex justify-end items-center gap-1">
        <div className="airbnb-your-home px-4 font-semibold rounded-full cursor-pointer hover:bg-gray-200 text-sm">
          Airbnb your home
        </div>
        <div className="airbnb-your-home px-2 rounded-full cursor-pointer hover:bg-gray-200">
          <LanguageIcon style={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
