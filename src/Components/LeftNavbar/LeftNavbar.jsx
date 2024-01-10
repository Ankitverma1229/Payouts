import React, { useState } from "react";
import nishyan from "../../Assets/nishyan.svg";
import { IoIosArrowDown } from "react-icons/io";
import { ButtonData } from "../../Assets/data.jsx";
import NavButtons from "./NavButtons/NavButtons.jsx";

const LeftNavbar = () => {
  const [navIcons, setNavIcons] = useState(ButtonData);

  return (
    <div className="py-3 px-4 flex flex-col gap-7">
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-36">
          <div className="h-16 w-14">
            <img
              src={nishyan}
              alt="Company Logo"
              className="h-full w-full cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-xl fw-bold">Nishyan</span>
            <span className="underline decoration-solid  text-[#c4c3c3] cursor-pointer text-sm fw-lighter">
              Visit store
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <IoIosArrowDown className="text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {navIcons.map((items, index) => (
          <NavButtons
            key={index}
            buttonDetail={items}
            navIcon={<items.buttonIcon />}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
