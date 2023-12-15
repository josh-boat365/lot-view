import React from "react";
import FDRowTab from "./FDRowTab";

function FiveDPane() {
  const data = [
    {
      id: 1,
      title: "Lucky 5D",
      name: "B/S 2nd - Big",
      row: "Row 7 Draw",
      time: "00:00:00",
    },
    {
      id: 2,
      title: "Lucky 5D",
      name: "B/S 2nd - Big",
      row: "Row 7 Draw",
      time: "00:00:00",
    },
    {
      id: 3,
      title: "Lucky 5D",
      name: "B/S 2nd - Big",
      row: "Row 7 Draw",
      time: "00:00:00",
    },
    {
      id: 4,
      title: "Lucky 5D",
      name: "B/S 2nd - Big",
      row: "Row 7 Draw",
      time: "00:00:00",
    },
  ];
  return (
    <div className="fd-pane">
      {data.map((item, index) => (
        <FDRowTab key={index} data={item} />
      ))}
    </div>
  );
}

export default FiveDPane;
