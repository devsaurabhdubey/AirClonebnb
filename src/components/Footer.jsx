import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

export default function Footer() {
  return (
    <footer className="px-12 py-4 border-t">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-600">
          <span className="mr-2">&copy; 2023 Airbnb, Inc.·</span>
          <a href="#" className="mr-2 hover:underline">Privacy</a>
          <a href="#" className="mr-2 hover:underline">Terms</a>
          <a href="#" className="mr-2 hover:underline">Sitemap</a>
          <a href="#" className="hover:underline">Company details</a>
        </div>
        <div className="flex items-center cursor-pointer">
        <LanguageIcon style={{ fontSize: "1.3rem" }} />
          <select className="m-2 border border-gray-300 rounded p-1">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <select className="m-2 border border-gray-300 rounded p-1">
            <option><CurrencyRupeeOutlinedIcon/> <b>INR</b></option>
            <option><AttachMoneyOutlinedIcon/> <b>AUD</b></option>
            <option><AttachMoneyOutlinedIcon/> <b>CAD</b></option>
          </select>
          <a href="#" className="text-gray-600 hover:text-gray-800 mr-2"><FaFacebook /></a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mr-2"><FaInstagram /></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
