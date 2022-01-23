import { Button } from "@mui/material";
import React from "react";
import image2 from "../Assets/doctor.png";

const Home = () => {
  return (
    <div>
      <div className="h-[30rem] w-[80rem]  grid grid-cols-2 gap-2 	justify-items-center	 ml-[10.5rem] bg-[#6BCEF6] border-4 border-indigo-500/50  ">
        <section>
          <img className="h-[29rem]" src={image2} alt="img"></img>
        </section>
        <section>
          <p className="text-[3rem] text-[white] font-semibold p-5">
            Make a Health Plan For <br />{" "}
            <span className="text-[#9e9d99] text-6xl">You And</span> <br />{" "}
            <span className="text-[#2A4B94] text-6xl mt-2 font-extrabold">
              Your Family
            </span>
          </p>
          <small className="text-[black] font-sans">
            Health, according to the World Health Organization, is "a state of
            complete physical, mental and social well-being and not merely the
            absence of disease and infirmity". A variety of definitions have
            been used for different purposes over time. Health can be promoted
            by encouraging healthful activities, such as regular physical
            exercise and adequate sleep,and by reducing or avoiding unhealthful
            activities or situations, such as smoking or excessive stress.
          </small>{" "}
          <br />
          <Button variant="contained" color="error">
            Learn more
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Home;
