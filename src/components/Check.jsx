import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingBox() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const guestsOptions = [
    { value: 1, label: "1 guest" },
    { value: 2, label: "2 guests" },
    { value: 3, label: "3 guests" },
    { value: 4, label: "4 guests" },
  ];
  const [selectedGuestsOption, setSelectedGuestsOption] = useState(null);

  return (
    <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-md p-4 w-80">
        <div>
        <span className="text-2xl font-bold mb-2">₹3,485</span>
      <span className="text-gray-600 mb-4">night</span>
        </div>
      
      <div className="flex items-center mb-4">
        <div className="text-gray-600 mr-1">4.85</div>
        <div className="text-yellow-500">·</div>
        <div className="text-gray-600 ml-1">41 reviews</div>
      </div>
      <div className="flex items-center mb-4">
        <div className="text-gray-600 mr-2">CHECK-IN</div>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          className="border border-gray-300 rounded p-2 w-36"
          placeholderText="Add date"
        />
      </div>
      <div className="flex items-center mb-4">
        <div className="text-gray-600 mr-2">CHECKOUT</div>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          className="border border-gray-300 rounded p-2 w-36"
          placeholderText="Add date"
        />
      </div>
      <div className="flex items-center mb-4">
        <div className="text-gray-600 mr-2">GUESTS</div>
        <Select
          options={guestsOptions}
          value={selectedGuestsOption}
          onChange={(option) => setSelectedGuestsOption(option)}
          className="w-24"
        />
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        Check Availability
      </button>
    </div>
  );
}
