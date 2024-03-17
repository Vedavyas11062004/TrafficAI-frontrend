import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

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
    <div style={{ width: "500px", marginLeft: "150px", height: "500px" }}>
      <canvas id="myChart"></canvas>
    </div>
  );
}
