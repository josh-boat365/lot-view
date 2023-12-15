import React from 'react'

function CurrentRowTab({data}) {
  return (
    <div>
      <div className="current-row-tab shadow-3">
        <div>
          <p>{data.name}</p>
          <p>{data.row}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentRowTab
