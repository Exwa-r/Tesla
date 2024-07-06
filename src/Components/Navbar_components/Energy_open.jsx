import React from "react";

export default function Energy_open() {
  const energy_items = [
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png",
      name: "Solar Panel",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png",
      name: "Solar Roof",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png",
      name: "Powerwall",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png",
      name: "Megapack",
    },
  ];
  return (
    <>
      <div className="bg-white h-[22rem] w-screen z-20 flex">
        <div className="grid grid-cols-4 w-[70%] pt-[4%] h-[60%] pl-[10%]">
          {energy_items.map((props) => (
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
        <div className="h-[70%] w-[0.01%] bg-gray-200 mt-[4%]"></div>
        <div className="flex flex-col pl-[4%] pt-[4%] gap-3 font-medium ">
          <a href="">Schedule a Consultation</a>
          <a href="">Why Solar</a>
          <a href="">Incentives</a>
          <a href="">Support</a>
          <a href="">Partner with Tesla</a>
          <a href="">Commercial</a>
          <a href="">Utilities</a>
        </div>
      </div>
    </>
  );
}
