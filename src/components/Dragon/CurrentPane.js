import React from "react";
import "./CurrentPane.css";
import CurrentRowTab from "./CurrentRowTab";

function CurrentPane() {

    const data = [
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
    
        },
        {id:1,
        name:'B/S 2nd - Big',
        row: 'Row 7 Draw',
        },
    ]

  return (
    <div>
      <div className="current-pane">
       {data.map((item,index) => (
        <CurrentRowTab key={index} data={item}/>
       ))

       }
      </div>
    </div>
  );
}

export default CurrentPane;
