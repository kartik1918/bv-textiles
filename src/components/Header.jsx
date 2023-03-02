import React, { useEffect } from "react";
import fabric2 from "../assets/imgs/fabric-2.jpg"

const Header = ({currentIndex, setCurrentIndex, headerImages}) => {

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? headerImages.length-1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === headerImages.length-1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <div className="shadow-lg h-20 bg-gradient-to-r from-green-200 via-green-500 to-pink-300">
        <h1 className="text-3xl font-bold m-auto text-white pt-5">B. V. Textiles</h1>
      </div>
      <div>
        <img src={headerImages[currentIndex].url} alt="green-fabric" className="h-[640px] w-full object-cover opacity-75 absolute"/>
        <button className="absolute text-6xl top-[49%] opacity-25 left-4 hover:top-20 hover:left-0 hover:bg-black hover:p-2 hover:opacity-25 hover:text-gray-50 hover:h-5/6" onClick={goToPrevious}>&laquo;</button>
        <button className="absolute text-6xl top-[49%] opacity-25 right-4 hover:top-20 hover:right-0 hover:bg-black hover:opacity-25 hover:p-2 hover:text-gray-50 hover:h-5/6" onClick={goToNext}>&raquo;</button>
        <h2 className="text-left relative top-48 left-20 text-white text-6xl font-semibold w-2/3">All your Fabric Needs</h2>
      </div>
    </div>
  );
};

export default Header;
