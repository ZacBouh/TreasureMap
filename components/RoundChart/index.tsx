"use client";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const RoundChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banques",
        data: [1250, 3000, 400],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Banque 1", "Banque 2", "Banque 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{ plugins: { legend: { display: false } } }}
    />
  );
};

export default RoundChart;
