import React from "react";

function Experience() {
  return (
    <>
      <div>
        <section>
          <div className="bg-[#111111] text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="text-3xl md:text-4xl text-yellow-300 uppercase tracking-loose mb-2">
                  Work Experience
                </p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  here's my technical as well as non-technical work experience
                  throughout the journey
                </p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  Enjoy Happy Coding 👩‍💻
                </p>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden md:p-10 h-full">
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        right: "50%",
                        border: "2px solid #FFC100",
                        borderRadius: "1%",
                      }}
                    ></div>
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        left: "50%",
                        border: "2px solid #FFC100",
                        borderRadius: "1%",
                      }}
                    ></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">
                          1 July - 30 Sep, 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Fullstack Devloper,IIT Madras
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ">
                          Worked as a Full Stack Developer, creating a carbon
                          credit platform using Next.js and exploring blockchain
                          technology.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-around items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12  text-left">
                        <p className="mb-3 text-base text-yellow-300">
                          1 Apr - 31 Jul, 2024
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Web3 Student Advocate,Outdefine
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Serve as a campus-level community lead, educating
                          fellow students about Outdefine and the world of
                          blockchain.
                        </p>
                      </div>
                    </div>

                    <div className="mb-24 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>

                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-yellow-300">
                          1 Aug - 31 July, 2024
                        </p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Event Manager,GHRCEM
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Event Manager at GHRCEM, responsible for organizing
                          and managing various technical events at the
                          departmental level.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="mx-auto -mt-36 md:-mt-36"
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;
