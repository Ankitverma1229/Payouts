import React from "react";
import "./multipleDashboards.css";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import notification from "../../Assets/notification.svg";
import { LuArrowDownUp, LuDownload } from "react-icons/lu";
import { BsExclamationCircle } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

const MultipleDashboards = () => {
  const renderRepeatedComponents = (count) => {
    const components = [];
    for (let i = 0; i < count; i++) {
      components.push(
        <div
          key={i}
          className="px-3 py-2 flex justify-between items-center  border-b-2"
        >
          <a
            href="#"
            className="flex-auto text-[#146EB4] hover:underline cursor-pointer"
          >
            #281209{" "}
          </a>
          <span className="flex-auto">7 July, 2023</span>
          <span className="flex-auto ">₹1,278.23</span>
          <span className="flex-auto">₹22</span>
        </div>
      );
    }
    return components;
  };

  const repeatCount = 20;
  return (
    <div className="w-[100%] flex flex-col gap-5">
      <div className="h-16 px-8 bg-white flex justify-between items-center">
        <div className="flex gap-3">
          <span className="text-xl ">Payments</span>
          <div className="flex gap-1 items-center text-[#4D4D4D]">
            <CiCircleQuestion className="pt-1 text-xl" />
            <span>How it works</span>
          </div>
        </div>
        <div className="bg-[#F2F2F2] py-1 pl-3 pr-32 gap-2 rounded-md flex justify-start items-center text-lg">
          <CiSearch className="text-[#808080]" />
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="border-0 bg-[#F2F2F2] text-[#808080] focus:outline-none"
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-[#F2F2F2]  rounded-full h-12 p-3">
            <img
              src={notification}
              alt="New notiffication"
              className="h-full w-full"
            />
          </div>
          <div className="bg-[#F2F2F2]  rounded-full h-12 w-12 flex justify-center items-center">
            <IoMdArrowDropdown className="text-5xl text-[#4D4D4D] rounded-full" />
          </div>
        </div>
      </div>

      <div className="px-8 mt-4 flex justify-between items-center">
        <div className="p-2 text-2xl font-normal">
          <span>Overview</span>
        </div>
        <div className="bg-white px-2 border-2  border-[#999999]  rounded-md">
          <select
            name="Date"
            id="date"
            className="px-2 py-1  flex items-center text-xl text-[#4D4D4D]"
          >
            <option value="Last Month">Last Month</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 px-8">
        <div className="flex-1 h-24 bg-white shadow-md rounded-md px-4 py-3 flex-col flex justify-around">
          <span className="text-[#4D4D4D]">Online orders</span>
          <span className="text-3xl font-medium">231</span>
        </div>
        <div className="flex-1 h-24 bg-white shadow-md rounded-md px-4 py-3 flex-col flex justify-around">
          <span className="text-[#4D4D4D]">Amount received</span>
          <span className="text-3xl font-medium">₹23,92,312.19</span>
        </div>
      </div>

      <div className="px-8">
        <p className="text-2xl font-medium">Transactions | This Month</p>
      </div>

      <div className="mx-8 px-3 py-2 rounded-md bg-white flex flex-col gap-3">
        <div className=" flex justify-between items-center">
          <div className="bg-[#FFFFFF] border-2  border-[rgb(153,153,153)]  py-1 px-3 gap-2 rounded-md flex justify-start items-center text-lg">
            <CiSearch className="text-[#808080]" />
            <input
              type="text"
              placeholder="Search by order ID..."
              className="border-0 bg-[#FFFFFF] text-[#808080] focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="bg-white border-2  border-[#999999] flex items-center rounded-md gap-2 px-2 py-1 text-[#4D4D4D]">
              <span>Sort</span>
              <LuArrowDownUp />
            </div>
            <div className="bg-white border-2  border-[#999999] flex items-center rounded-md gap-2 px-2 py-1 text-[#4D4D4D]">
              <LuDownload />
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] px-3 py-2 rounded-md ">
          <div className="text-[#4D4D4D] flex justify-between items-center">
            <div className="flex-1">Order ID</div>
            <div className="flex items-center flex-1">
              <span>Order Date</span>
              <IoMdArrowDropdown className="text-2xl pt-1" />
            </div>
            <div className="flex-1">Order Amount</div>
            <div className="flex items-center gap-1 flex-1">
              <span>Transaction fees</span>
              <BsExclamationCircle className="text-xl " />
            </div>
          </div>
        </div>
        {renderRepeatedComponents(repeatCount)}

        <Pagination />
      </div>
    </div>
  );
};

export default MultipleDashboards;
