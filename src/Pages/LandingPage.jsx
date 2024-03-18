import * as React from "react";
import SideBar from "../components/SideBar";
import Charts from "../components/Charts";
import PieChart from "../components/PieChart";
import "../styles/LandingPageStyles.css";
import Widgets from "../components/Widget";
import IconSet from "../assets/IconSet.svg";

export default function LandingPage() {
  const data = [
    {
      heading: "Number of cases",
      value: "721",
      percentage: "11.1%",
      imageUrl: IconSet,
      colour :"#e3f5ff",
    },
    {
      heading: "Number of cases",
      value: "721",
      percentage: "11.1%",
      imageUrl: IconSet,
      colour: "#E5ECF6",
    },
  ];
  return (
    <div>
      <SideBar />
      <div className="widgets">
        {data.map((item) => {
          return (
            <Widgets
              heading={item.heading}
              value={item.value}
              percentage={item.percentage}
              imageUrl={item.imageUrl}
              key={item.heading}
              colour={item.colour}
            />
          );
        })}
      </div>
      <div className="chartsContainer">
        <Charts />
        <PieChart />
      </div>
    </div>
  );
}
