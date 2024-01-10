import React from "react";
import LeftNavbar from "../../Components/LeftNavbar/LeftNavbar";
import MultipleDashboards from "../../Components/MultipleDashboards/MultipleDashboards";

const PayementsDashboard = () => {
  return (
    <div className="flex w-full">
      <div className="w-[20%] min-h-[100vh] bg-[#1E2640] text-white">
        <LeftNavbar />
      </div>
      <div className="w-[80%]">
        <MultipleDashboards />
      </div>
    </div>
  );
};

export default PayementsDashboard;
