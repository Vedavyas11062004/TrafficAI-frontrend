import * as React from "react";
import SideBar from "../components/SideBar";
import Charts from "../components/Charts";
import PieChart from "../components/PieChart";
import '../styles/LandingPageStyles.css'

export default function LandingPage() {
  return (
    <div>
      <SideBar />
      <div className="chartsContainer">
        <Charts />
        <PieChart />
      </div>
    </div>
  );
}
