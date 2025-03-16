import logobg from "../assets/logoBg.png";
import redCircle from "../assets/redCircle.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import abesitlogo from "../assets/abesitlogo.png";

const NewspaperHeader = () => {
  return (
    
    
    <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20 max-lg:m-0 max-lg:relative">
      <div className="w-full mx-auto border-b-4 border-slate-800 max-lg:">
        <div
          className="text-center space-y-3 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Desktop Navbar */}
          <div
            id="navbar"
            className="flex items-center justify-center space-x-6 max-md:hidden"
          >
            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>

            {/* Navigation Links */}
            <Link
              to="/"
              className="font-bold font-inter hover:text-amber-500 text-[18px]"
            >
              About
            </Link>

            <Link
              to="/events"
              className="font-bold font-inter hover:text-amber-500 text-[18px]"
            >
              Events
            </Link>

            <Link
              to="/team"
              className="font-bold font-inter hover:text-amber-500 text-[18px]"
            >
              Team
            </Link>
            <Link
              to="/swags"
              className="font-bold font-inter hover:text-amber-500 text-[18px]"
            >
              Swags
            </Link>
            <Link
              to="/codeofconduct"
              className="font-bold font-inter hover:text-amber-500 text-[18px]"
            >
              COC
            </Link>

            <div className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
              <div className="relative w-[127px] h-auto">
                <img
                  src={redCircle}
                  alt="Red Circle"
                  className="absolute -top-4 w-full h-auto pointer-events-none"
                />
              </div>
                <a href="https://lu.ma/4phnzjrb"> 
                Sponsor US
                
                </a>
            </div>

            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>
          </div>

          {/* Mobile Navbar */}
          <div className="m-0 max-md:flex max-md:justify-end hidden relative">
            <div>
              <Navbar />
            </div>
            <div className="flex items-center ">
            <a href="https://www.hacknovate6.tech/">
              <img
                src={logobg}
                alt="Hacknovate Logo"
                className="absolute w-[50px] right-[330px] -bottom-[0px]"
              />
            </a>
            </div>
          </div>

          {/* Header Section */}
          <div className="flex justify-between max-md:justify-center items-center mb-0 md:px-10 ">
            {/* Logo - Adjusted Size for Mobile */}
            <a href="https://www.hacknovate6.tech/">
            <img
              src={logobg}
              alt="Hacknovate Logo"
              className="relative m-[-15px]  md:left-[30px] max-md:w-24 max-md:h-auto max-md:ml-0 w-[200px] h-auto -ml-12 z-10 max-lg:hidden  "
            />
            </a>

            <h1 className="text-2xl md:text-8xl max-lg:relative font-serif font-black tracking-wide  -right-1 -top-2">
              <span className="text-prophet-black tracking-wide max-md:text-4xl ">
                ABESIT{" "}
              </span>
              <span className="text-prophet-gold text-amber-500 tracking-wide max-md:text-4xl font-black max-lg:text-8xl">
                T
              </span>
              <span className="text-prophet-black tracking-wide max-md:text-4xl">
                IMES
              </span>
            </h1>

            {/* Group of Institutions (Hidden on Mobile) */}
            <div className="relative right-4 flex-col items-center text-center hidden md:inline mr-[-20px] max-md:hidden [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)] hover:text-white transition-colors duration-300">
              <a
                href="https://www.abesit.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] "
              >
                ABESIT
              </a>

              <div className="relative flex items-center justify-center mt-[-20px]">
                <div className="w-5 h-[2px] bg-[#D1D5DB]"></div>

                <a
                  href="https://www.abesit.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase"
                >
                  Group of Institutions
                </a>

                <div className="w-5 h-[2px] bg-[#D1D5DB]"></div>
              </div>
            </div>
          </div>

          {/* FLAGSHIP EVENT - Adjusted for Mobile */}
          <div className="flex items-center max-lg:relative justify-center gap-x-4  -top-2 ">
            <span className="font-inter text-2xl max-md:text-xs ">★</span>
            <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-md:text-xs text-[#3A3A3A]">
              Presents their FLAGSHIP EVENT
            </p>
            <span className="font-inter text-2xl max-md:text-xs">★</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewspaperHeader;
