import React from 'react'
import CountUp from 'react-countup'
import Moment from 'react-moment'

import './deaths.css'

const Deaths = ({ deaths, lastUpdate }) => {
    return (
        <div className="deaths-container">
            {deaths.map((item, index) => (
                <div key={index} className="header-deaths">
                    Deaths:
                    <div className="deaths">
                        <CountUp start={0} end={item.value} duration={2} />
                    </div>
                    <div className="date" ><Moment format="dddd/MMM/YYYY">{lastUpdate}</Moment>
                        <div className="deaths-text-heading">
                            <p className="heading-1">Number of death</p>
                            <div className="div-2">cases of COVID-19.</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Deaths
