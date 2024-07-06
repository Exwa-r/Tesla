import React, { useState } from "react";
import Vehicle_open from "./Vehicle_open";

export default function Scroll({ Togglemenu }) {
  const [vehicleopen, setvehicleopen] = useState(false);
  const [energyopen, setenergyopen] = useState(false);
  const [chargingopen, setchargingopen] = useState(false);
  const [discoveropen, setdiscoveropen] = useState(false);
  const [shopopen, setshopopen] = useState(false);

  function energy() {
    setenergyopen(true);
    setvehicleopen(false);
    setchargingopen(false);
    setshopopen(false);
    setdiscoveropen(false);
  }
  function vehicle() {
    setenergyopen(false);
    setvehicleopen(true);
    setchargingopen(false);
    setshopopen(false);
    setdiscoveropen(false);
  }
  function discover() {
    setenergyopen(false);
    setvehicleopen(false);
    setchargingopen(false);
    setshopopen(false);
    setdiscoveropen(true);
  }
  function charging() {
    setenergyopen(false);
    setvehicleopen(false);
    setchargingopen(true);
    setshopopen(false);
    setdiscoveropen(false);
  }

  document.body.style.overflow = "hidden";
  return (
    <div className="flex flex-col absolute bg-white  h-screen w-screen ">
      <button
        className="ml-auto bg-gray-100 p-1 mr-3 mt-3"
        onClick={() => Togglemenu()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer "
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      <div className="mt-[15%]">
        <ul className="flex flex-col gap-10 text-lg font-semibold text-gray-700">
          <a href="">
            <li
              className="flex justify-between ml-[7%]"
              onClick={() => vehicle()}
            >
              Vehicles <span className="mr-[7%]">&#62;</span>{" "}
            </li>
          </a>
          <a href="">
            <li
              className="flex justify-between ml-[7%]"
              onClick={() => energy()}
            >
              Energy <span className="mr-[7%]">&#62;</span>{" "}
            </li>
          </a>
          <a href="">
            <li
              className="flex justify-between ml-[7%]"
              onClick={() => charging()}
            >
              Charging <span className="mr-[7%]">&#62;</span>{" "}
            </li>
          </a>
          <a href="">
            <li
              className="flex justify-between ml-[7%]"
              onClick={() => discover()}
            >
              Discover <span className="mr-[7%]">&#62;</span>{" "}
            </li>
          </a>
          <a href="">
            <li className="ml-[7%]">Shop </li>
          </a>
          <a href="">
            <li className="ml-[7%]">Support </li>
          </a>
          <a href="">
            <li className="flex ml-[7%]">
              <div className="flex pr-[30%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-world"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <div className="flex flex-col w-[100%]">
                  <div className="ml-[10%] ">United States </div>
                  <div className="text-sm">English</div>
                </div>
              </div>
              <div className="mr-[7%]"> &#62;</div>{" "}
            </li>
          </a>
          <a href="">
            <li className="ml-[7%]">Account </li>
          </a>
        </ul>
      </div>
      {vehicleopen && <Vehicle_open />}
    </div>
  );
}
