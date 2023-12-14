import { useState } from "react";
import RecentBetPane from "./components/RecentBetPane";
import DragonPane from "./components/Dragon/DragonPane";

function App() {
  const data = [
    { id: "1", tabTitle: "Recent Draw", tabContent: <RecentBetPane /> },
    { id: "2", tabTitle: "Dragon", tabContent: <DragonPane />},
    { id: "3", tabTitle: "Trend", tabContent: "Tab Content 3" },
    { id: "4", tabTitle: "Recent Bet", tabContent: "Tab Content 4" },
  ];

  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title shadow-2 tab-title--active" : "tab-title"
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
    <div className="App shadow">
      <div className="card">
        <div className="card-content">
          <div className="tabs-container">
            <div className="tabs-titles">{listTitles}</div>
            <div className="tabs-bottom"></div>
          </div>
          <div className="tab-content shadow">{listContent}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
