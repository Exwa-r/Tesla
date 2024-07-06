import React from "react";

export default function Charging_open() {
  const charging_items = [
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png",
      name: "Charging",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png",
      name: "Home Charging",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png",
      name: "Supercharging",
    },
  ];
  return (
    <>
      <div className="bg-white h-[22rem] w-screen z-20 flex pl-[10%]">
        <div className="grid grid-cols-4 w-[70%] pt-[4%] h-[60%] pl-[10%]">
          {charging_items.map((props) => (
            <>
              <div className="flex flex-col items-center pt-[8%]">
                <a href="">
                  <img className="h-32 w-56" src={props.img} alt="" />
                </a>
                <div>
                  <h3 className="font-semibold">{props.name}</h3>
                </div>
                <div className="flex gap-3 underline">
                  <a href="">Learn</a>
                  <a href="">Order</a>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="h-[70%] w-[0.01%] bg-gray-200 mt-[4%] -ml-[10%]"></div>
        <div className="flex flex-col pl-[4%] pt-[4%] gap-3 font-medium ">
          <a href="">Help Me Charge</a>
          <a href="">Charging Calculator</a>
          <a href="">Charging With NACS</a>
          <a href="">Supercharger Voting</a>
          <a href="">Host a Supercharger</a>
          <a href="">Commercial Charging</a>
          <a href="">Host Wall Connectors</a>
        </div>
      </div>
    </>
  );
}
