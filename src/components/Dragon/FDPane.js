import React from "react";
import FDRowTab from "./FDRowTab";

function FDPane() {

    const data = [
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        time: '00:00:00'
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        time: '00:00:00'
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        time: '00:00:00'
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        time: '00:00:00'
        },
    ]
  return (
    <div className="fd-pane">
     {data.map((item,index) => (
        <FDRowTab key={index} data={item}/>
     ))}
    </div>
  );
}

export default FDPane;
