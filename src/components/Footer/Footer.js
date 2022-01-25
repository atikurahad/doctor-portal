import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[black] grid grid-cols-2  ">
        <section>
          <article className="text-[gold] text-2xl m-2 p-4 font-thin border-amber-400">
            To serve the humanity as a whole with this noble vision the Ibn Sina
            Trust started its journey in June 1980. The trust has agreed upon to
            provide health care service to the people of Bangladesh with
            affordable cost.
          </article>
        </section>
        <section>
          <article className="text-white text-xl text-right mr-3 p-2">
            {" "}
            House 48, Road 9/A, Dhanmondi, Dhaka-1209
          </article>
          <article className="text-3xl text-white text-right mr-3 font-extrabold p-2  ">
            Hotline: +095 242623
          </article>
        </section>
      </div>
   <hr></hr>
      <section className="bg-black h-24 w-full p-2 ">
        <h2 className="text-[white] text-center text-2xl">
          {" "}
          &copy; All rights reserved by {new Date().getFullYear()
          }
          <span className="text-[gold] text-2xl font-mono">
             Doctor Portal
          </span>{" "}
        </h2>
        <p className="text-[white] text-center text-2xl"> Health is Welth</p>
        <i className="fab fa-twitter bg-[red]"> </i>
      </section>
    </div>
  );
};

export default Footer;
