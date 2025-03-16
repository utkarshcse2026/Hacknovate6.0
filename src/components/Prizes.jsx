import offline_prize_Bg1 from "../assets/offline_prize_Bg1.png";
import offline_prize_Bg2 from "../assets/offline_prize_Bg2.png";
import offline_prize_Bgcover1 from "../assets/offline_prize_Bgcover1.png";
import  offline_prize_Bgcover2 from "../assets/offline_prize_Bgcover2.png";
import online_prize_Bgcover2 from "../assets/online_prizes.jpg";
import { FaAsterisk } from "react-icons/fa";

const Prizes = () => {
  return (
    <div className="border-t-4 pr-8 md:pl-4 border-slate-800 w-full  pt-0 overflow-hidden">
      {/* Title Section */}
      <div className="w-full m-2 h-16 flex justify-center items-center max-lg:text-xl ">
        <h1 className="themetitle text-xl md:text-5xl font-bold mb-6 text-center mt-4 border-black inline-block ">
          Goblet of Rewards: HACKNOVATE 6.0 PRIZES
        </h1>
      </div>

      {/* Prize Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Offline Prizes */}
        <div className="max-lg:relative max-lg:-top-14">
          <div className="border-b-4 border-black mt-4">
            <h1 className="font-extrabold mt-16 md:mt-0  font-serif text-3xl  md:text-4xl border-b-2 text-center pb-2">
              Offline Prizes
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row justify-evenly items-center pt-4 gap-4 ">
            {/* Prize Box 1 with Background and Overlay */}
            <div
              className=" relative md:w-full h-60 bg-cover max-lg:w-96 bg-center rounded-lg shadow-lg flex justify-center items-center"
              style={{ 
                backgroundImage: `url(${offline_prize_Bg1})`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="z-10 text-center">
                <h1 className="z-10 font-sans text-4xl font-extrabold text-yellow-500 drop-shadow-4xl max-lg:text-6xl ">
                  WINNER
                </h1>
                <h1 className="z-10 font-sans text-4xl font-extrabold text-white drop-shadow-4xl max-lg:text-6xl">
                  30,000
                </h1>
              </div>

              <img
                src={offline_prize_Bgcover1}
                alt="Prize 1"
                className="absolute w-54 h-54 object-contain"
              />
            </div>

            {/* Prize Box 2 with Background and Overlay */}
            <div
              className="relative w-full h-60 bg-cover bg-center rounded-lg shadow-lg max-lg:w-96 flex justify-center items-center"
              style={{ 
                backgroundImage: `url(${offline_prize_Bg2})`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="z-10 text-center">
                <h1 className="z-10 font-sans text-4xl font-extrabold text-yellow-500 drop-shadow-4xl max-lg:text-6xl">
                  RUNNER-UP
                </h1>
                <h1 className="z-10 font-sans text-4xl font-extrabold text-white drop-shadow-4xl max-lg:text-6xl">
                  20,000
                </h1>
              </div>

              <img
                src={offline_prize_Bgcover2}
                alt="Prize 2"
                className="absolute w-54 h-54 object-contain"
              />
            </div>
          </div>
          <div className="bg-black text-amber-400 text-xl flex justify-center items-center  gap-4 mt-4  text-center">
            <FaAsterisk className="w-4 h-4" />
            <span> TOTAL OFFLINE PRIZE: 50,000</span>
          </div>
          <div className="flex  items-start mt-6">
            {/* Vertical Text "capabilities" */}
            {/* <div className="flex flex-col justify-center items-center mr-4 mt-6 text-sm">
              <span className="text-white text-lg font-serif tracking-widest rotate-180 [writing-mode:vertical-rl]">
                capabilities
              </span>
            </div> */}

            {/* Large Styled "I" */}
            <div className="relative text-[146px] font-extrabold font-serif leading-none hidden md:inline">
              <span className="relative left-1 z-10 text-black">I</span>
              <span className="absolute top-1 left-2 text-yellow-500 z-0">
                I
              </span>
            </div>

            {/* Text Content */}
            <p className="ml-6 text-gray-800 text-lg hidden md:inline">
              ver the shadows of the Forbidden Forest, only the most brilliant
              digital sorcerers shall emerge victorious! The champion of the
              online realm shall claim a treasure of <strong>10,000</strong>{" "}
              Galleons, while the runner-up, proving their magical prowess,
              shall be rewarded with <strong>5,000</strong> Galleons. The
              virtual battleground is set—will you rise as a legend?
            </p>
          </div>
          <div>
            <div className="border-b-4 border-black mt-4 max-lg:relative max-lg:-top-16">
              <h1 className="font-extrabold mt-16 md:mt-0  font-serif text-3xl  md:text-4xl border-b-2 text-center pb-2">
                Consolation Prizes
              </h1>
            </div>
            <div className="flex flex-col flex-center align-center justify-center md:flex-row gap-4 max-lg:relative max-lg:-top-14 ">
              <div 
                className="bg-black w-full md:w-[50%] md:h-[128px] mt-2 mx-auto flex justify-center align-center items-center max-lg:w-96"
                style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex flex-col absolute text-center">
                  <h1 className="z-10 font-sans text-yellow-500 font-extrabold text-2xl drop-shadow-4xl"> BEST BEGINNER TEAM </h1>
                  <h1 className="z-10 font-sans  font-extrabold text-2xl text-white drop-shadow-4xl"> 3,000</h1>
                </div>
                <img
                  src={online_prize_Bgcover2}
                  className="w-full h-full"
                  alt="online prices"
                />
              </div>
              <div 
                className="bg-black w-full md:w-[50%] md:h-[128px] mt-2 mx-auto flex justify-center align-center items-center"
                style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex flex-col absolute text-center">
                    <h1 className="z-10 font-sans text-yellow-500 font-extrabold text-2xl  drop-shadow-4xl"> BEST GIRLS TEAM </h1>
                    <h1 className="z-10 font-sans  font-extrabold text-2xl text-white drop-shadow-4xl"> 3,000</h1>
                  </div>
                <img src={online_prize_Bgcover2} className="w-full h-full" alt="online prices" />
              </div>
            </div>
            <div className="bg-black text-amber-400 text-xl flex justify-center items-center max-lg:relative max-lg:-top-12  gap-4 mt-2  text-center">
              <FaAsterisk className="w-4 h-4" />
              <span> TOTAL CONSOLATION PRIZE: 6,000</span>
            </div>
          </div>
        </div>

        <div className="  rounded-lg relative bottom-32 md:inline md:bottom-0 ">
          {/* Three column newspaper layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 text-lg font-serif">
            {/* First Column with Drop Cap */}
            <div>
              <div className="float-left  text-left mt-3 mr-0 mb-1 hidden md:inline">
                <div className="text-[146px] text-left float-left font-extrabold font-serif relative">
                  <span className="relative top-8 left-0 z-10 text-black">
                    G
                  </span>
                  <span className="absolute top-7 left-0 text-yellow-500 z-0">
                    G
                  </span>
                </div>
              </div>
              <p className="text-justify tracking-[-0.07em ] mt-8 break-all hidden md:inline">
                <br /> <br /> <br /> <br /> <br/> loble and most brilliant
                tech-wizards who dare to compete in the enchanted halls of
                Hacknovate 6.0 shall lay their hands on the ultimate treasures!
              </p>
            </div>

            {/* Second Column */}
            <div>
              <p className="text-justify tracking-[-0.07em ]  break-all hidden md:inline">
                The Forbidden Forest to the Great Hall (Offline), the champions
                claim their legendary grand prize of{" "}
                <span className="font-bold">30,000</span> Galleons. The valiant
                runners-up shall be rewarded with{" "}
                <span className="font-bold">20,000</span> Galleons 
                The Goblet of Hacknovate has been lit - do you
                have what it takes to seize the magic?
              </p>
            </div>

            {/* Third Column */}
            <div>
              <p className="text-justify tracking-[-0.07em ] break-all hidden md:inline">
                But beware, for this journey is not for the faint-hearted!
                Participants must wield their coding wands with precision,
                conjure spells of logic, and battle through a maze of challenges
                designed to test their wit, skill, and endurance. The enchanted
                mentors shall guide those who seek wisdom. Only the finest tech
                sorcerers shall claim the Hall of Fame.
              </p>
            </div>
          </div>
          <div className="border-b-4 border-black max-lg:relative -top-7 ">
            <h1 className="font-extrabold  md:mt-0  font-serif text-3xl  md:text-4xl border-b-2 text-center pb-2">
              Online Prizes
            </h1>
          </div>
          <div className="flex flex-col flex-center align-center justify-center md:flex-row gap-4 max-lg:relative max-lg:-top-6">
            <div 
              className="bg-black w-full md:w-[50%] md:h-[128px] mt-2 mx-auto flex justify-center align-center items-center"
              style={{ 
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="flex flex-col absolute text-center">
                <h1 className="z-10 font-sans text-yellow-500 font-extrabold text-2xl  drop-shadow-4xl">
                  {" "}
                  WINNER{" "}
                </h1>
                <h1 className="z-10 font-sans  font-extrabold text-2xl text-white drop-shadow-4xl">
                  {" "}
                  10,000
                </h1>
              </div>
              <img
                src={online_prize_Bgcover2}
                className="w-full h-full"
                alt="online prices"
              />
            </div>
            <div 
              className="bg-black w-full md:w-[50%] md:h-[128px] mt-2 mx-auto flex justify-center align-center items-center"
              style={{ 
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="flex flex-col absolute text-center">
                <h1 className="z-10 font-sans text-yellow-500 font-extrabold text-2xl  drop-shadow-4xl">
                  {" "}
                  RUNNER-UP{" "}
                </h1>
                <h1 className="z-10 font-sans  font-extrabold text-2xl text-white drop-shadow-4xl">
                  {" "}
                  5,000
                </h1>
              </div>
              <img
                src={online_prize_Bgcover2}
                className="w-full h-full"
                alt="online prices"
              />
            </div>
          </div>
          <div className="bg-black text-amber-400 text-xl flex justify-center items-center  gap-4 mt-2  text-center max-lg:relative max-lg:-top-3">
            <FaAsterisk className="w-4 h-4" />
            <span> TOTAL ONLINE PRIZE: 15,000</span>
          </div>

          <div className="relative">
            {/* "C" Graphic with Float */}
            <div className="text-[120px] font-bold leading-[90px] float-left mr-3 relative hidden md:inline">
              <span className="text-black relative z-10">C</span>
              <span className="text-yellow-500 absolute top-1 left-1 z-0">
                C
              </span>
            </div>

            {/* Wrapping Text */}
            <p className="text-gray-800 text-justify font-serif hidden md:inline">
              elebrating talent, recognizing potential, and rewarding
              excellence. Valiant wizards-in-the-making shall not go unnoticed!
              Hacknovate 6.0 recognizes and celebrates emerging talent with two
              special honors. The Best Beginner, proving their potential in the
              wizarding world of tech, and the Best Girls' Team, showcasing
              brilliance and resilience, shall each be rewarded with 3,000
              Galleons for their exceptional skill and perseverance. This is
              more than just a prize—it's a mark of true potential and future
              greatness. Magic favors the bold, and those who dare to step into
              the arena shall leave with more than just Galleons— they shall
              earn glory, recognition, and the spark to ignite even greater
              feats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;