import React from 'react'
import TrendCard from './TrendCard'

function CustomTrendPane() {
  return (
    <div>
      {
        [...Array(3)].map((_,index) => (
            <TrendCard key={index} />
        ))
      }
    </div>
  )
}

export default CustomTrendPane
