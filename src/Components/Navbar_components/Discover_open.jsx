import React from "react";

export default function Discover_open() {
  return (
    <>
      <div className="bg-white h-[25rem] w-screen z-20  ">
        <div className="flex gap-[10%] justify-center pt-[3%] font-medium ">
          <div className="flex flex-col ">
            <p className="text-gray-500">Resources</p>
            <a className="pt-[20%]" href="">
              Demo Drive
            </a>
            <a className="pt-[10%]" href="">
              Insurance
            </a>
            <a className="pt-[10%]" href="">
              Military Purchase Program
            </a>
            <a className="pt-[10%]" href="">
              Video Guides
            </a>
            <a className="pt-[10%]" href="">
              Customer Stories
            </a>
            <a className="pt-[10%]" href="">
              Events
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Location Services</p>
            <a className="pt-[20%]" href="">
              Find Us
            </a>
            <a className="pt-[10%]" href="">
              Find a Collision Center
            </a>
            <a className="pt-[10%]" href="">
              Find a Certified Installer
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Company</p>
            <a className="pt-[20%]" href="">
              About
            </a>
            <a className="pt-[10%]" href="">
              Careers
            </a>
            <a className="pt-[10%]" href="">
              Investor Relations
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
