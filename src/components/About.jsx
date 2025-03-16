import image from "../assets/image.png";
import abesitgif from "../assets/abesit hp.gif";
import hackno from "../assets/hackno.gif";
import A from "../assets/A.svg";
import M from "../assets/M.svg";
import "../styles/about.css";
import { FaAsterisk } from "react-icons/fa";

const About = () => {
  return (
    <div className=" border-t-4  w-full border-b-0 p-4 pb-4 mb-0 max-lg:m-0   max-lg:w-full md:pr-8" >
      <div className="w-full flex flex-col">
        <h1 className="text-xl md:text-6xl font-extrabold uppercase text-center mb-2 border-b-4 md:border-none font-serif max-lg:text-3xl  ">
          IS ABESIT THE HOGWARTS OF CODING?
        </h1>

        <div className="grid md:grid-cols-2">
          <div className=" relative  col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full">
            <img
              className="flex md:w-full md:h-full m-4"
              src={abesitgif}
              alt="abesit"
            />
            <div className="bg-black w-full text-amber-400 max-lg:relative max-lg:-top-5 text-xl flex justify-center items-center  gap-4 mt-4 lg:relative lg:-top-7 text-center">
              <FaAsterisk className="w-4 h-4 max-lg:hidden   " />
              <span className="text-lg max-lg:text-[15px] ">
                {" "}
                ABESIT Campus Road, NE 3, near Crossing Republik, Ghaziabad,
                Uttar Pradesh 201009
              </span>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-full m-0 text-justify justify-last md:pl-12  ">
            <div className="grid  md:grid-row-2 h-full">
              <div className="flex  md:w-full flex-col md:flex-row gap-8">
                <img className=" hidden md:inline" src={M} alt="m letter" />
                <div>
                  <p className="text-lg text-gray-800">
                    <span className="md:hidden">M</span>agic! At ABESIT, wands
                    are replaced with keyboards, spells with code, and
                    Hacknovate 6.0 is where young wizards of tech conjure, While
                    it may not have flying broomsticks or moving staircases like
                    it certainly fosters a magical environment for aspiring
                    coders.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-800 border-b-4 pb-2">
                  {" "}
                  Here, wands are replaced with keyboards, spells with code, and
                  Hacknovate 6.0 is where young tech wizards conjure innovation,
                  transforming from beginners into true coding masters. So, if
                  Hogwarts is the place where wizards hone their magic, ABESIT
                  is where tech enthusiasts master the art of coding!
                </p>
              </div>

              <div>
                <h1 className="text-center text-4xl md:text-7xl tracking-wide font-bold mb-2  pt-2">
                  Potter’s Sequel
                </h1>
                <div className="grid md:grid-cols-2 md:gap-8">
                  <div>
                    <p className="text-lg text-gray-800">
                      The wizarding world had its legendary battles, but the
                      magic of Hacknovate 6.0 is just beginning! As Harry once
                      stepped into Hogwarts to master spells, now coders step
                      into ABESIT to master the art of innovation.
                    </p>
                  </div>

                  <div>
                    <p className="text-lg text-gray-800">
                      Hacknovate 6.0 is more than just a hackathon; it’s a test
                      of bravery, skill, and teamwork. The coding cauldron is
                      bubbling, and challengers will embark on a 24-hour journey
                      where creativity, logic, and technology intertwine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 w-full">
          <div className="space-y-5">
            <img className=" hidden md:inline" src={A} alt="a letter" />
            <p className="text-lg text-gray-800 text-justify md:text-left">
              <span className="md:hidden">A</span>estled amidst the world of
              innovation and learning, ABESIT stands as the Hogwarts of
              Coding—where magic is not cast with wands but crafted with code.
              Within these grand halls,
            </p>
          </div>
          <div className="w-full">
            <p className=" text-lg text-gray-800 text-justify md:text-left md:pr-4 pb-4 max-lg:relative max-lg:-left-5 ">
            students transform into digital wizards.
              Here, logic is the ultimate spell, creativity the strongest
              potion, and knowledge the true source of power. So grab your wand
              (keyboard) Step into this realm of endless possibilities, where
              the magic of technology thrives, and let the journey to begin!
            </p>
          </div>
          <div className="w-full">
            <p className="text-lg text-gray-800 text-justify md:text-left border-b-4 pb-4 max-lg:relative max-lg:-left-5  ">
              Through sheer determination, teamwork, and an unbreakable spirit,
              these coding wizards will turn impossible problems into
              extraordinary solutions
            </p>
            <h1 className=" font-extrabold text-4xl pt-4 leading-tighter max-lg:leading-[55px] max-lg:relative max-lg:-left-5">
              Magic, Code and Achieve!!!!
            </h1>
          </div>
        </div>

        <div className="md:pl-4 col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full">
          
           <img
              className="flex md:w-full  m-4 border-0 h-[300px] max-lg:h-[230px]"
              src={hackno}
              alt="hacknovate"
            />

          <div className="bg-black w-full text-amber-400  gap-4 lg:relative text-xl flex justify-center items-center  text-center max-lg:text-[15px]">
            <FaAsterisk className="w-4 h-4 max-lg:hidden" />
            <span> HACKNOVATE: THE FLAGSHIP EVENT OF ABESIT GHAZIABAD </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
