import React from "react";

export default function Vehicleopen() {
  const vehicle_items = [
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png",
      name: "Model 3",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png",
      name: "Model S",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png",
      name: "Model X",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png",
      name: "Model Y",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png",
      name: "CyberTruck",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png",
      name: "Help Me Choose",
    },
  ];
  return (
    <>
      <div className="bg-white h-[30rem] w-screen z-20 flex">
        <div className="grid grid-cols-4 w-[70%] pt-[4%] h-[60%] pl-[10%]">
          {vehicle_items.map((props) => (
            <>
              <div className="flex flex-col items-center pt-[8%]">
                <a href="">
                  <img className="h-28 w-48" src={props.img} alt="" />
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
          <a href="">Inventory</a>
          <a href="">Used Cars</a>
          <a href="">Demo Drive</a>
          <a href="">Trade-in</a>
          <a href="">Compare</a>
          <a href="">Help Me Charge</a>
          <a href="">Fleet</a>
          <a href="">Semi</a>
          <a href="">Roadster</a>
        </div>
      </div>
    </>
  );
}
