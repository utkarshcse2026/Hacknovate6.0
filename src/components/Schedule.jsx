import map3 from "../assets/schedule/bg2.svg";
import finalschedule from "../assets/finalschedule.png";

const Schedule = () => {
  return (
    <div className="border-t-4 border-slate-800 w-full  p-4 pb-4 mb-0 text-center border-b-0">
      <h1 className="themetitle text-2xl md:text-5xl font-bold mb-6 text-center border-b-4 mx-auto border-black inline-block  mt-8 max-lg:hidden">
        The Hackwarts TimeTable
      </h1>
      <img
        src={map3}
        alt="schedule map"
        className="mx-auto border-4 max-lg:hidden"
        style={{
          width: "90%",
          //   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', // Equal shadow effect in all directions
          borderRadius: "0px", // Rounded corners
        }}
      />
      <img
        src={finalschedule}
        alt="schedule map"
        className=" w-full hidden max-lg:block  "
      />
    </div>
  );
};

export default Schedule;
