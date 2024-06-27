import React from "react";

export default function Footer() {
  const items = [
    { price: "$47,490," },
    { price: "$44,990," },
    { price: "$77,990," },
    { price: "$72,990," },
  ];
  return (
    <>
      <div className="text-center bg-black text-white">
        <footer>
          <div className="py-14 font-medium text-sm ">
            {items.map((props) => (
              <>
                <p>
                  1 Price before estimated savings is {props.price} excluding
                  taxes and fees. Subject to change.
                </p>
                <p className="pb-6 underline underline-offset-2">
                  Learn about est. gas savings.
                </p>
              </>
            ))}
          </div>
          <div className="flex gap-4 list-none w-full justify-center font-medium text-sm pb-3 -mt-5">
            <li>
              <a href="">Tesla © 2024</a>
            </li>
            <li>
              <a href="">Privacy & Legal</a>
            </li>
            <li>
              <a href="">Vehicle Recalls</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Get Updates</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
          </div>
        </footer>
      </div>
    </>
  );
}
