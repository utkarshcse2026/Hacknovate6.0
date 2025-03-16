import React, { useEffect } from "react";
import Timer from "./Timer";
import { FaDiscord } from "react-icons/fa";
import owl from "../assets/owl-wizard.png";
import devfolio from "../assets/devfolio.png";

import Tt from "../assets/Tt.gif";

const Header = () => {
  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0));


  return (
    <div className="m-0 p-0 pr-2 md:pr-8">
      <div className="flex w-full h-[450px] pb-6 space-x-4 max-lg:hidden">
        <div className=" w-1/2 p-2 rounded-xl">
          <img src={Tt} alt="" />
        </div>
        <div className=" w-1/2 flex flex-col  items-center">
          <div className="flex w-full">
            <Timer targetDate={targetDate} />
            <div className=" ml-1 w-[180px] h-full">
              <img src={owl} alt="" className="w-[110px] ml-7" />
            </div>
          </div>
          <div className=" w-full h-screen mt-1 ">
            {/* First row with two columns */}
            <div className="flex space-x-4 h-[70%] mb-1">
              {/* Column 1 */}
              <div className="w-[70%]   flex flex-col space-y-4 items-center justify-center h-full">
                <div className="w-full h-full pt-4">
                <a href="https://hacknovate6.devfolio.co/"> 
                  <button className="w-full h-[90px] flex justify-center items-center font-semibold text-2xl font-sans bg-slate-800 text-white rounded-xl">
                      
                        <span> <img className="w-16 h-16" src={devfolio} alt="devfolio" /> </span> Apply with Devfolio  
                  </button>
                      </a>
                </div>
                <div className="w-full h-full">
                  <button
                    className="w-full h-[90px] text-4xl font-serif font-bold bg-black text-amber-400 rounded-xl"
                    onClick={() =>
                      window.open(
                        "https://discord.com/invite/kaGJwHqW8t",
                        "_blank"
                      )
                    }
                  >
                    <FaDiscord className="inline-block m-2 w-14" />
                    JOIN DISCORD
                  </button>
                </div>
              </div>

              {/* Column 2 */}
              <div className="w-[30%]  text-lg p-2 text-justify flex items-center font-serif break-all justify-center">
                <h1>
                  Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT,
                  returns in 2025 with its 6th edition, themed around Harry
                  Potter. Get ready to hack the world.
                </h1>
              </div>
            </div>

            {/* Second row - Full width */}
            <div className="h-[29%] flex items-center text-sm  justify-center">
              <p>
                Structure of the competition. First, all participants must
                register individually. Once registered, they can either create a
                team or join an existing one. After forming teams, participants
                will work on their project ideas and submit a detailed proposal
                along with a PPT. Based on these submissions, the best projects
                will be selected for the next phase—some teams will be invited
                for an offline hackathon, while others will be shortlisted for
                the online hackathon.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile View */}
      <div className="p-2 hidden max-lg:block ">
        <h1 className="font-bold text-center">
          Hacknovate, the 24-hour hybrid hackathon of ABESIT, returns in 2025
          with its 6th edition, themed around Harry Potter.
        </h1>
        <button className="w-full mx-auto h-[100px] mt-2 mb-2   text-white  rounded-xl ">
          
            <div className="w-full h-full pt-2">
                <a href="https://hacknovate6.devfolio.co/"> 
                  <button className="w-full h-[60px] flex justify-center items-center font-semibold text-xl font-sans bg-slate-800 text-white rounded-xl">
                        <span> <img className="w-12 h-12" src={devfolio} alt="devfolio" /> </span> Apply with Devfolio  
                  </button>
                      </a>
            </div>

        </button>
        <h1 className="text-center  font-serif">
          Structure of the competition. First, all participants must register
          individually. Once registered, they can either create a team or join
          an existing one.
        </h1>
        <div className="p-2 rounded-xl">
          <img src={Tt} alt="" className="rounded-xl" />
        </div>

        
        <button
          className="w-full h-[120px] text-4xl font-serif font-bold bg-black text-amber-400 rounded-xl"
          onClick={() =>
            window.open("https://discord.com/invite/kaGJwHqW8t", "_blank")
          }
        >
          <FaDiscord className="inline-block m-2 w-14" />
          JOIN DISCORD
        </button>

        <p className="font-serif text-justify pt-2 mb-2">
          Hacknovate 6.0 brings the magic of Harry Potter to coding! Code like a
          wizard, innovate with spells of technology, and achieve greatness in
          this 24-hour hybrid hackathon at ABESIT
        </p>
        <Timer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Header;
