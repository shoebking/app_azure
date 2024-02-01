import React from "react";
import MainPage from "./MainPage";
import PieChart from "./PieChart";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const sentiment = location.state.sentiment;
  const obj = location.state.add;

  const chartData = {
    labels: Object.keys(obj),
    datasets: [
      {
        data: Object.values(obj),
        backgroundColor: [
          // "rgba(75,192,192,1)",
          "#65B741",
          "#280274",
          "#D80032",
          // "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const legendStyles = {
    position: 'absolute',
    right: 700,
    top: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
  };

  const sentimentBoxStyle = {
    backgroundColor: "#f1c40f",
    color: "black",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <MainPage>
      <h1>Result</h1>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ flex: 1 }}>
          {/* Use the modified PieChart component */}
          <PieChart chartData={chartData} />
        </div>
        <div style={legendStyles}>
          {Object.keys(obj).map((label, index) => (
            <div key={index} style={{ marginBottom: 5 }}>
              <span style={{ backgroundColor: chartData.datasets[0].backgroundColor[index], marginRight: 5, padding: '2px 8px', borderRadius: '4px' }}></span>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div style={sentimentBoxStyle}>{sentiment && <p>Sentiment: {sentiment}</p>}</div>
    </MainPage>
  );
};

export default Results;
