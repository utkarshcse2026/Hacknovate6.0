import ImageTicker from "./Ticker";

import bff from "../assets/community/bff.png";
import bpit from "../assets/community/bpit.png";
import devsphere from "../assets/community/devsphere.png";
import gdgc from "../assets/community/gdgc.png";
import lme from "../assets/community/lme.png";
import newbie from "../assets/community/newbie.png";
import techholics from "../assets/community/techholics.png";
import technovators from "../assets/community/technovators.png";

import msc from "../assets/community/msc.png";
import iee from "../assets/community/IEEE_white.png";
import itclub from "../assets/community/itclub.jpeg";
import ecell from "../assets/community/ecell.png";
import gdgcabesit from "../assets/community/gdgcabesit.png";


const CommunityPartner = () => {
  const images = [
  gdgcabesit,
  iee,
  itclub,
  ecell,
  msc,   
  ];

  return (
    <div className="border-slate-800 w-full border-t-0 border-b-0 p-4 pb-4 mb-0">
      <div className="flex flex-col lg:flex-row items-center w-full lg:ml-6">
        {/* Left Section - Title */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 ">
          <div className="text-center lg:text-left">
            <h1 className="text-[clamp(3rem,8vw,5rem)] lg:text-[80px] font-bold flex items-center justify-center lg:justify-start">
              <span className="relative inline-block text-black">
                C<span className="absolute left-1 text-yellow-500 z-0">C</span>
              </span>
              <span>ommunity</span>
            </h1>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] lg:relative lg:text-[80px] font-semibold lg:-top-16   ">
              Partners
            </h2>
          </div>
        </div>

        {/* Right Section - Description */}
        <div className="w-full lg:w-1/2 text-[#393939] font-semibold px-6 lg:pr-16 lg:p-10 text-lg lg:text-xl font-serif text-center lg:text-left">
          <p>
            In the spirit of Harry Potter, where teamwork, knowledge, and
            strategy shape the greatest wizards, our Community Partner for
            Hacknovate 6.0 plays the role of Hogwarts itself—a place where
            bright minds gather, collaborate, and create spells of innovation.
            Just like Dumbledore’s unwavering support for young wizards, our
            Community Partner empowers participants by fostering connections,
            providing resources, and ensuring every innovator finds their
            platform to shine.
          </p>
        </div>
      </div>

      {/* Image Scrolling Ticker */}
      <div className=" rounded-xl w-full h-54 max-lg:mt-8 max-lg:h-36  overflow-hidden">
        <ImageTicker images={images} speed={20} />
      </div>
    </div>
  );
};

export default CommunityPartner;
