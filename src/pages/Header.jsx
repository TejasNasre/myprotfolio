import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-[#111111] w-full text-[#e7e7e7] py-10">
        <h1 className="text-center py-4 px-2 md:px-0 text-[1.2rem] md:text-[2rem] font-bold">
          &lt; &lt; &lt; TEJAS NASRE &gt; &gt; &gt;
        </h1>
        <div className="w-full flex flex-row justify-center gap-10 my-10">
          <Link to="/" className="border border-white rounded-lg px-4 py-2 flex justify-center items-center">
            Home
          </Link>
          <Link
            to="/about"
            className="border border-white rounded-lg px-4 py-2 flex justify-center items-center"
          >
            About Me
          </Link>
          <Link
            to="/experience"
            className="border border-white rounded-lg px-4 py-2 flex justify-center items-center"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className="border border-white rounded-lg px-4 py-2 flex justify-center items-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
