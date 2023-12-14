import { useState } from 'react';
import "../../index.css";
import CurrentPane  from './CurrentPane';
import CustomPane from './CustomPane';
import FDPane from './FDPane';
import Games from './Games';


function DragonPane() {

  const data = [
    { id: "1", tabTitle: "Current", tabContent: <CurrentPane /> },
    { id: "2", tabTitle: "5D", tabContent: <FDPane /> },
    { id: "3", tabTitle: "Custom", tabContent: <CustomPane /> },
    { id: "4", tabTitle: "Games 28", tabContent: <Games /> },
    { id: "5", tabTitle: "Row Data", tabContent: "Tab Content 4" },
  ];

  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title dragon-tab-title--active" : "dragon-tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = data.map((item) => (
    <div style={visibleTab === item.id ? {} : { display: "none" }}>
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
  )
}

export default DragonPane
