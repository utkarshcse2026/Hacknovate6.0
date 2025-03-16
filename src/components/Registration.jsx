



//     import React from "react";
// import andSymbol from "../assets/and.png";

// const Registration = () => {
//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1 text-center md:text-left">
//       {/* Grey Box */}
//       <div className="bg-gray-300 w-full"></div>

//       {/* Register Button (Centered in Mobile) */}
//       <div className="relative bg-black p-2 rounded-xl shadow-lg flex justify-center items-center">
//         <div className="border-2 border-amber-500 rounded-xl p-4 flex justify-center items-center">
//           <p className="text-3xl md:text-5xl text-amber-500 font-bold tracking-wide uppercase">
//             REGISTER
//           </p>
//         </div>
//       </div>

//       {/* Date & Time Section (Centered in Mobile) */}
//       <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 text-center md:text-left">
//         {/* Date */}
//         <div className="flex flex-col justify-center items-center flex-1">
//           <h1 className="text-[32px] md:text-[42.8px] font-titan text-black leading-normal">
//             DATE
//           </h1>
//           <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
//             4th and 5th <br /> April, 2024
//           </h2>
//         </div>

//         {/* AND Symbol */}
//         <div className="mx-2 md:mx-4 flex-shrink-0">
//           <img
//             src={andSymbol}
//             alt="and"
//             className="w-[50px] md:w-[79.382px] h-[50px] md:h-[84px] object-contain"
//           />
//         </div>

//         {/* Time */}
//         <div className="flex flex-col justify-center items-center flex-1">
//           <h1 className="text-[32px] md:text-[42.8px] font-titan text-black leading-normal">
//             TIME
//           </h1>
//           <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
//             9:00 AM to <br /> 12:30 PM IST
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;



import React from "react";
import andSymbol from "../assets/and.png";

const Registration = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1 text-center md:text-left">
      {/* Grey Box */}
      <div className="bg-gray-300 w-full"></div>

      {/* Register Button (Now Dynamically Resizable) */}
      <div className="relative bg-black p-2 rounded-xl shadow-lg justify-center items-center">
              <div className="border-2 border-amber-500 rounded-xl p-4 flex justify-center items-center">
                <p className="text-3xl md:text-5xl text-amber-500 font-bold tracking-wide uppercase">
                  REGISTER
                </p>
              </div>
            </div>

      {/* Date & Time Section (Single Row in Mobile, Centered) */}
      <div className="flex flex-row justify-center items-center w-full gap-3">
        {/* Date */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
            DATE
          </h1>
          <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
            4th and 5th <br /> April, 2024
          </h2>
        </div>

        {/* AND Symbol */}
        <div className="w-[40px] md:w-[79.382px]">
          <img
            src={andSymbol}
            alt="and"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
            TIME
          </h1>
          <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
            9:00 AM to <br /> 12:30 PM IST
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Registration;
