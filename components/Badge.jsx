'use client'
import CountUp from 'react-countup'

import React from 'react'

const Badge = ({
    containerStyles,
    endCountNum,
    endCountText
}) => {
  return (
    <div className={`${containerStyles}`}>
        <div>
            <div>
                <CountUp end={endCountNum} delay={1} duration={4}/>
                {endCountText}
            </div>
        </div>
    </div>
  )
}

export default Badge