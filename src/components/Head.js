import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center h-14 shadow-lg px-6">
      <div className="flex">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="">
          <img
            className="h-6 mx-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 h-8 px-1 py-2 focus:outline-none focus:border-blue-600 w-3/5 "
        />
        <button className="bg-gray-200 flex items-center justify-center h-8 w-16 border border-gray-400 border-l-0 hover:bg-gray-300 text-2xl">
          <AiOutlineSearch />
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <FaUserCircle className="text-3xl flex items-center justify-center" />
      </div>
    </div>
  );
};

export default Head;
