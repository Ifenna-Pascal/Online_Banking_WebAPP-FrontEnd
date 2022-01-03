import React from "react";
import LatestTransactions from "./LatestTransactions";
import PieChart from "./PieChart";

function SideEnd() {
  return (
    <div className="shadow-md my-10">
      <LatestTransactions />
      <PieChart />
    </div>
  );
}

export default SideEnd;
