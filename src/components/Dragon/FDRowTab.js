import React from "react";

function FDRowTab({ data }) {
  return (
    <div>
      <div className="fd-row-tab shadow-3">
        <div>
          <div>
            <b>
              <p>{data.title}</p>
            </b>
          </div>

          <div className="row">
            <p>{data.name}</p>
            <p>{data.row}</p>
            <p>{data.time}</p>
          </div>

          <div>
            <p>{data.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FDRowTab;
