import React from "react";

function Home() {
  return (
    <div className="bg-[#111111] w-full text-[#e7e7e7] h-screen flex flex-col justify-start items-center gap-24 md:gap-32">
      <h1 className="text-center py-4 px-2 md:px-0 text-[1.2rem] md:text-[2rem] font-bold mt-10">
        &lt; &lt; &lt; TEJAS NASRE &gt; &gt; &gt;
      </h1>
      <h1 className="text-center text-5xl font-extrabold px-2">
        WELCOME TO MY PORTFOLIO
      </h1>
      <div class="w-full">
        <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>PYTHON</li>
            <li>NEXT JS</li>
            <li>REACT JS</li>
          </ul>
          <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>PYTHON</li>
            <li>NEXT JS</li>
            <li>REACT JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
