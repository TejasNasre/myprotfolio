import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#111111] w-full text-[#e7e7e7] pt-10 relative">
        <div
          className="px-5 flex justify-end cursor-pointer md:hidden"
          onClick={() => {
            return setOpen(!open);
          }}
        >
          {open ? (
            <h1 className="flex text-black z-[999] text-xl">
              &lt;&lt;&lt;&lt;
            </h1>
          ) : (
            <h1 className="text-xl">&gt;&gt;&gt;&gt;</h1>
          )}
        </div>
        <div
          className={`w-full ${
            open
              ? `flex absolute h-screen top-0 bg-white text-black flex-col justify-center items-center overflow-hidden`
              : "hidden"
          } md:flex flex-col gap-5 md:flex-row md:justify-center md:gap-10`}
        >
          <Link
            to="/"
            className="border border-white rounded-lg text-[1rem] md:px-4 py-2 flex justify-center items-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border border-white rounded-lg text-[1rem] md:px-4 py-2 flex justify-center items-center"
          >
            About Me
          </Link>
          <Link
            to="/experience"
            className="border border-white rounded-lg text-[1rem] md:px-4 py-2 flex justify-center items-center"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className="border border-white rounded-lg text-[1rem] md:px-4 py-2 flex justify-center items-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
