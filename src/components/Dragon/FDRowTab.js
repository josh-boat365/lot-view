import React from 'react'

function FDRowTab({data}) {
  return (
    <div>
       <div className="current-row-tab">
        <b><p>Lucky 5D</p></b> 
        <p className="row">
          <p>{data.name}</p>
          <p>{data.row}</p>
          <p>{data.time}</p>
        </p>
      </div>
    </div>
  )
}

export default FDRowTab
