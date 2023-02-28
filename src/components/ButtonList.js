import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const button_list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "React",
    "News",
    "Live",
    "Cricket",
    "React",
    "News",
  ];

  return (
    <div className="flex">
      {button_list.map((value, index) => {
        return <Button name={value} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
