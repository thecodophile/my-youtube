import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-cols-12 h-14 pl-1 items-center shadow-lg sticky top-0 bg-white z-50">
      <div className="col-span-2 flex justify-center">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-6 mx-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="col-span-8 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-3/5 h-10 px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none focus:border-blue-600"
        />
        <button className="h-10 w-16 text-2xl flex items-center justify-center bg-gray-200 border rounded-r-full border-gray-400 border-l-0 hover:bg-gray-300">
          <AiOutlineSearch />
        </button>
      </div>

      <div className="col-span-2 flex justify-center">
        <FaUserCircle className=" text-3xl" />
      </div>
    </div>
  );
};

export default Head;
