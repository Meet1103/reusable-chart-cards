// React Charts Import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  aspectRatio: 5,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxWidth: 14,
        padding: 12,
        font: {
          size: 12,
        },
      },

      onHover: (event) => {
        event.native.target.style.cursor = "pointer";
      },

      onLeave: (event) => {
        event.native.target.style.cursor = "default";
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      display: false,
      stacked: true,
    },
    y: {
      display: false,
      stacked: true,
    },
  },
  onHover: (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
  },
};

function StackBarChart({ chartData }) {
  return <Bar data={chartData} options={options} />;
}

export default StackBarChart;
