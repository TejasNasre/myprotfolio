import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="bg-[#111111] w-full text-[#e7e7e7] relative">
        <div
          className={`w-full ${
            open
              ? `fixed top-0 left-0 h-screen bg-white z-[999] text-black flex flex-col justify-center items-center overflow-hidden`
              : "hidden"
          } md:flex flex-col gap-5 md:flex-row md:justify-center pt-10 md:gap-10`}
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
        <div
          className="px-5 w-full flex justify-end cursor-pointer absolute top-0 mt-6 md:hidden"
          onClick={() => {
            return setOpen(!open);
          }}
        >
          {open ? (
            <h1 className="flex text-black z-[9999] text-xl">
              <IoClose className="text-2xl" />
            </h1>
          ) : (
            <h1 className="text-xl">
              <GiHamburgerMenu className="text-xl" />
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
