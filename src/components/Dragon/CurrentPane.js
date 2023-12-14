import React from "react";
import "./CurrentPane.css";
import CurrentRowTab from "./CurrentRowTab";

function CurrentPane() {
  return (
    <div>
      <div className="current-pane">
       {[...Array(20)].map((_,index) => (
        <CurrentRowTab key={index} />
       ))

       }
      </div>
    </div>
  );
}

export default CurrentPane;
