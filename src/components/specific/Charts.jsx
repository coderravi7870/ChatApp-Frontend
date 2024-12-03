import React from "react";

import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend,
  plugins,
  scales,
} from "chart.js";
import { orange, orangeLight, purple, purpleLight } from "../../constant/color";
import { getLast7Days } from "../../lib/features";

ChartJs.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChat = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Messages",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        fill: true,
        backgroundColor: [purpleLight, orangeLight],
        borderColor: [purple, orange],
        hoverBackgroundColor: [purple, orange],
        offset: 10,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { LineChat, DoughnutChart };