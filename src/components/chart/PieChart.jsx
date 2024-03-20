// React Charts Import
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
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
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const {
              labels: { pointStyle },
            } = chart.legend.options;

            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);

              return {
                text: `${label}: ${data["datasets"][0].data[i]}`,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i,
              };
            });
          }
          return [];
        },
      },

      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      },

      onHover: (event) => {
        event.native.target.style.cursor = "pointer";
      },

      onLeave: (event) => {
        event.native.target.style.cursor = "default";
      },
    },
  },
  onHover: (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
  },
};

const PieChart = ({ chartData }) => {
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
