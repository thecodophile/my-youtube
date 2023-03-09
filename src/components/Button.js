import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 m-3 bg-gray-200 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
