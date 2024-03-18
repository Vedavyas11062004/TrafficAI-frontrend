import React from "react";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import '../styles/piechart.css';

export default function PieChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = document.getElementById("myChart2");

    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Hazratganj", "Gomti nagar", "Aliganj", "Golf city", "Aminabad"],
        datasets: [
          {
            label: "# of fines",
            data: [12, 19, 3, 5, 2],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Areawise Distribution",
          },
        },
      },
    });

    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, []);
  return (
    <div style={{ width: "500px", height: "400px" }} className="pieChart">
      <canvas id="myChart2"></canvas>
    </div>
  );
}
