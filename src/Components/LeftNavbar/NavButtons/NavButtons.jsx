import React from "react";

const NavButtons = (props) => {
  return (
    <div className="flex items-center px-3 gap-7 text-[#c4c3c3] text-lg cursor-pointer hover:underline hover:text-white">
      <div className="">{props.navIcon}</div>
      <span>{props.buttonDetail.buttonName}</span>
    </div>
  );
};

export default NavButtons;
