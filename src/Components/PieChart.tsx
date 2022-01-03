import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Debit", "Credit"],
    datasets: [
      {
        label: "credit / debit ",
        data: [11, 9],
        backgroundColor: ["#ff6c6c", "#6cffba"],
      },
    ],
  };
  return (
    <div className="px-6 mt-12 py-2 mx-auto my-2">
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
