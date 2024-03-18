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
      heading: "Number of fines",
      value: "721",
      percentage: "11.1%",
      imageUrl: IconSet,
      colour: "#e3f5ff",
    },
    {
      heading: "Number of fines cleared",
      value: "521",
      percentage: "8.2%",
      imageUrl: IconSet,
      colour: "#E5ECF6",
    },
    {
      heading: "Number of Pending fines",
      value: "200",
      percentage: "5.1%",
      imageUrl: IconSet,
      colour: "#e3f5ff",
    },
    {
      heading: "Area with more fines",
      value: "Hazrtganj",
      percentage: "9.1%",
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
