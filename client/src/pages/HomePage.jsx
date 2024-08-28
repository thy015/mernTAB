import React from "react";
import Booking from "./Booking";

const HomePage = () => {
  return (
    <div>
      <div>
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/2880x868/363658458.jpeg?k=427a5cc2522eb3d80a76d232939725ec6cf76e03ef26ee846375709b3e9caf6f&o="
          alt="Cozy people sitting"
          className="h-96 object-cover w-full relative"
        />
      </div>
      <div className="flex top-[30%] left-[10%] absolute flex-col text-white ">
        <div className="font-lobster text-4xl">Find your next stay</div>
        <div className="text-lg mt-5">
          Search deals on hotels, homes, and much more...
        </div>
      </div>
      <Booking></Booking>
    </div>
  );
};

export default HomePage;
