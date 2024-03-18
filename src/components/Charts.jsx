import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import "../styles/piechart.css";

export default function Charts() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
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
    <div style={{ width: "500px", height: "400px" }} className="charts">
      <canvas id="myChart"></canvas>
    </div>
  );
}
