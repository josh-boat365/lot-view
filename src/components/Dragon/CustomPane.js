import React from 'react';
import FDRowTab from './FDRowTab';

function CustomPane() {
  const data = [
    {
      id: 1,
      title: "TGL",
      name: "FDRowTab",
      row: "FDRowTab",
      time: "00:00:00",
      type: " Composite",
    },
    {
      id: 2,
      title: "TGL",
      name: "FDRowTab",
      row: "FDRowTab",
      time: "00:00:00",
      type: " Composite",
    }
  ];
  return (
    <div>
      <div className="fd-pane">
     {data.map((item,index) => (
        <FDRowTab key={index} data={item}/>
     ))}
    </div>
    </div>
  )
}

export default CustomPane
