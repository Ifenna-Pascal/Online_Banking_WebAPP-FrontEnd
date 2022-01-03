import React from "react";
import SideNav from "../Components/Dashboard_side";
import LatestTransactions from "../Components/LatestTransactions";
import SideCenter from "../Components/SideCenter";
import SideEnd from "../Components/SideEnd";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <SideCenter />
      <SideEnd />
    </div>
  );
}

export default Dashboard;
