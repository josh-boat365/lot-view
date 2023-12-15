import React, { useState } from "react";
import CurrentTrendPane from './CurrentTrendPane';
import TrendFiveDPane from "./TrendFiveDPane";
import CustomTrendPane from "../Trend/CustomTrendPane";

function TrendPane() {
  const data = [
    { id: 1, tabTitle: "Current", tabContent: <CurrentTrendPane /> },
    { id: 2, tabTitle: "5D", tabContent: <TrendFiveDPane /> },
    { id: 3, tabTitle: "Custom", tabContent: <CustomTrendPane />  },
    { id: 4, tabTitle: "Games 28", tabContent: <CurrentTrendPane /> },
    { id: 5, tabTitle: "Row Data", tabContent: <CurrentTrendPane /> },
  ];

  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item, index) => (
    <li
      onClick={() => setVisibleTab(item.id)} key={index}
      className={
        visibleTab === item.id
          ? "tab-title dragon-tab-title--active"
          : "dragon-tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = data.map((item, index) => (
    <div style={visibleTab === item.id ? {} : { display: "none" }} key={index}>
      {item.tabContent}
    </div>
  ));

  return (
    <div>
      <div className="tabs-container">
        <div className="tabs-titles">{listTitles}</div>
      </div>
      <div className="tab-content">{listContent}</div>
    </div>
  );
}

export default TrendPane;
