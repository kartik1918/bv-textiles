import React from "react";
import fabric2 from "../assets/imgs/fabric-2.jpg"

const Header = () => {
  return (
    <div>
      <div className="shadow-lg h-20 m- bg-gradient-to-r from-green-200 via-green-500 to-pink-300">
        <h1 className="text-3xl font-bold m-auto text-white pt-5">B. V. Textiles</h1>
      </div>
      <div>
        <button className="absolute text-6xl top-72 left-4">&laquo;</button>
        <img src={fabric2} alt="green-fabric" className="h-[650px] w-full object-cover opacity-75 absolute"/>
        <button className="absolute text-6xl top-72 right-4 opacity-30">&raquo;</button>
        <h2 className="text-left relative top-48 left-20 text-white text-6xl font-semibold w-2/3">All your Fabric Needs</h2>
      </div>
    </div>
  );
};

export default Header;
