import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center bg-black p-1 rounded-md shadow-lg w-[570px] h-[5.5rem] max-lg:w-[350px]  lg:h-[6.5rem]">
      <div className="text-white max-lg:relative max-lg:-left-3 text-sm font-bold px-1 lg:px-3 text-[25px] tracking-wide -rotate-90 writing-vertical-rl font-inter text-center lg:text-[17px] ">
        Starts in
      </div>
      <div className="pr-1 lg:pr-2 max-lg:pr-4 ">
        <TimeBox
          value={timeLeft.days}
          label="Days"
          width="w-[75px] "
          height="h-[69px] lg:w-[100px] lg:h-[80px] "
        />
      </div>
      <div className="flex bg-black text-black font-bold divide-x-[10px] divide-black  lg:pr-2 ">
        <TimeBox
          value={timeLeft.hours}
          label="Hrs"
          width="w-[75px] "
          height="h-[69px] lg:w-[100px] lg:h-[80px]  "
        />
        <TimeBox
          value={timeLeft.minutes}
          label="Mins"
          width="w-[75px]"
          height="h-[69px] lg:w-[100px] lg:h-[80px]"
        />
        <TimeBox
          value={timeLeft.seconds}
          label="Sec"
          width="w-[75px]"
          height="h-[69px] lg:w-[100px] lg:h-[80px] "
        />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label, width, height }) => {
  return (
    <div
      className={`pl-1 flex flex-col justify-center  bg-gray-300 border border-black rounded-lg  lg:${width} ${height}`}
    >
      <motion.div
        key={value}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-black text-[32px] font-extrabold leading-none font-inter"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="text-black text-[28px] font-bold leading-none font-inter">
        {label}
      </span>
    </div>
  );
};

export default Timer;
