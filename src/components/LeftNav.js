import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div>
      <div className="w-[85px] py-4 pl-[2px] my-2 sticky top-16">
        <div className="flex flex-col hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
          <Link to="/">
            <AiOutlineHome className="text-2xl inline-block ml-5" />
            <p className="text-xs mt-1 inline-block ml-4">Home</p>
          </Link>
        </div>
        <div className="hover:bg-gray-100 rounded-lg my-5 p-2">
          <CiYoutube className="text-2xl ml-5" />
          <p className="text-xs mt-1 ml-4">Shorts</p>
        </div>
        <div className="hover:bg-gray-100 rounded-lg my-5 p-2">
          <MdOutlineSubscriptions className="text-2xl ml-5" />
          <p className="text-xs mt-1">Subscriptions</p>
        </div>
        <div className="hover:bg-gray-100 rounded-lg my-5 p-2">
          <MdOutlineVideoLibrary className="text-2xl ml-5" />
          <p className="text-xs mt-1 ml-4">Library</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
