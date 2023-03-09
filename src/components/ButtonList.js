import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const ButtonList = () => {
  const button_list = [
    "All",
    "Mixes",
    "Music",
    // "Recently uploaded",
    "JavaScript",
    "React",
    // "Meditation music",
    "Live",
    // "Lo-fi",
    "Motivation",
    "Bollywood",
    "Tollywood",
    "Cricket",
    "News",
    // "Dramedy",
    // "Podcast",
    "Guitar",
    // "Watched",
    // "New to you",
  ];

  return (
    <div className="flex border-b sticky top-14 bg-white ">
      {button_list.map((value, index) => {
        return <Button name={value} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
