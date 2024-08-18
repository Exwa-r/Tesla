import React, { useState } from "react";
import Vehicle_open from "./Vehicle_open";
import Energy_open from "./Energy_open";
import Charging_open from "./Charging_open";
import Discover_open from "./Discover_open";

export default function Scroll({ Togglemenu }) {
  const [sectionOpen, setSectionOpen] = useState(null);

  const handleMenuClick = (section) => {
    setSectionOpen(section);
    Togglemenu(); // Close mobile menu on section click
  };

  document.body.style.overflow = sectionOpen ? "hidden" : "unset";

  return (
    <div className="flex flex-col absolute bg-white h-screen w-screen">
      {/* Toggle Menu Button (Mobile) */}
      <button
        className="ml-auto bg-gray-100 p-1 mr-3 mt-3"
        onClick={() => {
          Togglemenu();
          document.body.style.overflow = "unset";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      {/* Mobile Menu Items */}
      <div className="mt-[15%]">
        <ul className="flex flex-col gap-4 md:gap-10 text-lg font-semibold text-gray-700">
          <li
            className={`flex justify-between ml-[7%] cursor-pointer`}
            onClick={() => handleMenuClick("vehicle")}
          >
            Vehicles <span className="mr-[7%]">&#62;</span>{" "}
          </li>
          <li
            className={`flex justify-between ml-[7%] cursor-pointer`}
            onClick={() => handleMenuClick("energy")}
          >
            Energy <span className="mr-[7%]">&#62;</span>{" "}
          </li>
          <li
            className={`flex justify-between ml-[7%] cursor-pointer`}
            onClick={() => handleMenuClick("charging")}
          >
            Charging <span className="mr-[7%]">&#62;</span>{" "}
          </li>
          <li
            className={`flex justify-between ml-[7%] cursor-pointer`}
            onClick={() => handleMenuClick("discover")}
          >
            Discover <span className="mr-[7%]">&#62;</span>{" "}
          </li>
          <li className="ml-[7%]">Shop </li>
          <li className="ml-[7%]">Support </li>
          <li className="flex ml-[7%]">
            <div className="flex pr-[30%]">
              <img
                src="flag.png"
                alt=" "
                className="size-15 rounded-md ml-[15%]"
              />
              <div className="text-xl">ES</div>
              <div className="text-xl pr-[15%]"> </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Section Components */}
      <div className="relative">
        {sectionOpen === "vehicle" && <Vehicle_open />}
        {sectionOpen === "energy" && <Energy_open />}
        {sectionOpen === "charging" && <Charging_open />}
        {sectionOpen === "discover" && <Discover_open />}
      </div>
    </div>
  );
}
