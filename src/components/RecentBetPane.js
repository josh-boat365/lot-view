import React from "react";
import TableRow  from "./TableRow";

function RecentBetPane() {
  return (
    <div className="pane">
      <div className="table-header">
        <li className="col">Draw</li>
        <li className="col">Wining No.</li>
        <ul className="table-header-group">
          <div>All 5 Group</div>
          <div className="sub-header-group">
            <div className="">G120</div>
            <div className="">G60</div>
            <div className="">G30</div>
            <div className="">G20</div>
            <div className="">G10</div>
            <div className="">G5</div>
          </div>
        </ul>
      </div>
      <div className="row-tab">
      {[...Array(20)].map((_, index) => (
        <TableRow key={index} />
      ))}
      </div>

    </div>
  );
}

export default RecentBetPane;
