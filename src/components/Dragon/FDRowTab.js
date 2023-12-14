import React from 'react'

function FDRowTab({data}) {
  return (
    <div>
       <div className="fd-row-tab">
        <b><p>{data.title}</p></b> 
        <p className="row">
          <p>{data.name}</p>
          <p>{data.row}</p>
          <p>{data.time}</p>
        </p>
        <p>{data.type}</p>
      </div>
    </div>
  )
}

export default FDRowTab
