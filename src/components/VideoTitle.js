import React from "react";
import { Link } from "react-router-dom";
const VideoTitle = ({ title, description, movieId }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-12   absolute bg-gradient-to-r from-black">
      <h1 className=" font-bold text-6xl text-white">{title}</h1>
      <p className=" font-bold w-1/2 pt-1 text-white">{description}</p>
      <div className="flex mt-3">
        <button className="bg-white text-black rounded-md font-bold w-32  hover:bg-gray-300">
          <Link to={"/watch/" + movieId} > Play</Link>
        </button>
        <button className="bg-[#7c6142] text-white font-bold p-3 rounded-md w-32 ml-4 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
