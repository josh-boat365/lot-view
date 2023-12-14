import React from 'react'

function CurrentRowTab({data}) {
  return (
    <div>
       <div className="current-row-tab">
          <p>{data.name}</p>
          <p>{data.row}</p>
        </div>
    </div>
  )
}

export default CurrentRowTab
