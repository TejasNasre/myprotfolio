import React from "react";

function About() {
  return (
    <>
      <div className="bg-[#111111] w-full text-[#e7e7e7] h-screen">
        <div className="w-full flex justify-center items-center py-10">
          <img
            src="https://imgs.search.brave.com/gpyA6z0GSbz__p922if_Pk9XuUQDayLz1fuRzy9NlrM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWph/c25hc3JlLnRlY2gv/YXNzZXRzL2ltYWdl/cy9teS1hdmF0YXIu/anBn"
            alt="Tejas Nasre"
            className="w-[250px] h-[250px] border-2 border-white rounded-lg"
          />
        </div>
        <div className="px-10">
          <h1>Hey I Am Tejas Nasre.</h1>
        </div>
      </div>
    </>
  );
}

export default About;
