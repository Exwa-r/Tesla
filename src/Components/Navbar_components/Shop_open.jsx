import React from "react";

export default function Shop_open() {
  const shop_items = [
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png",
      name: "Charging",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
      name: "Vehicle Accessories",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
      name: "Apparel",
    },
    {
      img: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
      name: "Lifestyle",
    },
  ];

  return (
    <>
      <div className="bg-white h-[18rem] w-screen z-20 flex pl-[10%]">
        <div className="grid grid-cols-4 w-[70%] pt-[2.5%] h-[60%] pl-[10%]">
          {shop_items.map((props) => (
            <>
              <div className="flex flex-col items-center pt-[8%]">
                <a href="">
                  <img className="h-[100%] w-[100%]" src={props.img} alt="" />
                </a>
                <div>
                  <h3 className="font-semibold text-lg pt-[9%] ">
                    {props.name}
                  </h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
