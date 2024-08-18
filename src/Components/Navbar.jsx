import React, { useState } from "react";
import Menu_open from "./Navbar_components/Menu_open";
import Vehicle_open from "./Navbar_components/Vehicle_open";
import Energy_open from "./Navbar_components/Energy_open";
import Charging_open from "./Navbar_components/Charging_open";
import Discover_open from "./Navbar_components/Discover_open";
import Shop_open from "./Navbar_components/Shop_open";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuopen, setMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <nav
        className={`flex flex-col absolute z-20 ${
          activeMenu ? "bg-white rounded-b-3xl" : "bg-none"
        }`}
        onMouseLeave={closeMenu}
      >
        <div className="flex">
          <div className="-my-[25%] sm:-my-[6.5%] pl-[10%] sm:pl-[3%] pt-[4%]">
            <button href="#">
              <svg
                className="size-32"
                viewBox="0 0 342 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="sm:hidden ml-[100%] mt-[4%] rounded-lg p-2 px-4 bg-[#4590c6] text-sm font-semibold flex">
            <button onClick={() => setMenuOpen(!menuopen)}>Menu</button>
          </div>
          <div className="list-none gap-6 text-gray-900 pl-[24rem] pt-[1%] font-semibold text-sm hidden sm:flex">
            <li
              className="p-1 hover:bg-slate-100 hover:rounded-md cursor-pointer"
              onMouseEnter={() => handleMenuClick("vehicle")}
            >
              Vehicles
            </li>
            <li
              className="p-1 hover:bg-slate-100 hover:rounded-md cursor-pointer"
              onMouseEnter={() => handleMenuClick("energy")}
            >
              Energy
            </li>
            <li
              className="p-1 hover:bg-slate-100 hover:rounded-md cursor-pointer"
              onMouseEnter={() => handleMenuClick("charging")}
            >
              Charging
            </li>
            <li
              className="p-1 hover:bg-slate-100 hover:rounded-md cursor-pointer"
              onMouseEnter={() => handleMenuClick("discover")}
            >
              Discover
            </li>
            <li
              className="p-1 hover:bg-slate-100 hover:rounded-md cursor-pointer"
              onMouseEnter={() => handleMenuClick("shop")}
            >
              Shop
            </li>
          </div>
          <div className="sm:flex hidden list-none gap-2 pl-[28rem] pt-5">
            <li>
              <a href="">
                <svg
                  class="size-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17m0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m.053-3.533a8 8 0 0 1 .92-.767 7 7 0 0 0 .746-.61 2.3 2.3 0 0 0 .468-.635q.189-.38.188-.883 0-.56-.246-1.048-.237-.486-.771-.792-.534-.305-1.362-.305-.862 0-1.411.347a2 2 0 0 0-.788.89q-.09.201-.148.413c-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772q.106-.61.386-1.15.452-.875 1.37-1.394Q10.742 6 12.07 6q1.395 0 2.273.544.885.536 1.271 1.337T16 9.489q0 .817-.254 1.403-.255.577-.616.94-.353.363-.943.817-.468.372-.747.635-.27.264-.451.627-.075.149-.113.302c-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.95 2.95 0 0 1 .797-1.743"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="size-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9.254 20.047a8 8 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.53 8.53 0 0 0 5.003 4.547m.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501s.658-.137 1.04-.5c.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12q.001 1.038.103 2h6.294q.102-.962.103-2-.001-1.038-.103-2H8.853q-.102.962-.103 2m-1.405-2H3.737a8.5 8.5 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a21 21 0 0 1 0-4m1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5s-.658.137-1.04.5c-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56m7.577 1.5a20.7 20.7 0 0 1 0 4h3.61a8.5 8.5 0 0 0 .236-2 8.5 8.5 0 0 0-.237-2zm3.094-1.5a8.53 8.53 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.53 8.53 0 0 0 4.252 8.5zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.53 8.53 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  class="size-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24s4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748m11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.46 8.46 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5a8.46 8.46 0 0 1-2.173 5.657M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
                  ></path>
                </svg>
              </a>
            </li>
          </div>
        </div>
        {activeMenu === "vehicle" && <Vehicle_open />}
        {activeMenu === "energy" && <Energy_open />}
        {activeMenu === "charging" && <Charging_open />}
        {activeMenu === "discover" && <Discover_open />}
        {activeMenu === "shop" && <Shop_open />}
        {menuopen && <Menu_open />}
      </nav>
    </>
  );
}
