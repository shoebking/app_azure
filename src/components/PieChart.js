// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
// import React from "react";
// import { Pie } from "react-chartjs-2";

// function PieChart({ chartData }) {
//   // Update the chart options to hide the legend
//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return <Pie data={chartData} options={options} />;
// }

// export default PieChart;
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  // Adjust the size of the canvas
  const canvasSize = 300; // Set your desired size

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: canvasSize, height: canvasSize }}>
      <Pie data={chartData} options={options} />
    </div>
  );
}

export default PieChart;
