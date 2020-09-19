import React from 'react'
import CountUp from 'react-countup'
import Moment from 'react-moment'

import './confirmed.css'

const Confirmed = ({ confirmed, lastUpdate }) => {
    return (
        <div className="confirmed-container">
            {confirmed.map((item, index) => (
                <div key={index} className="header-infected">
                    Infected:
                    <div className="confirmed">
                        <CountUp start={0} end={item.value} duration={2} />
                    </div>
                    <div className="date"><Moment format="dddd/MMM/YYYY">{lastUpdate}</Moment>
                        <div className="confirmed-text-heading">
                            <p className="heading-1">Number of infected</p>
                            <div className="div-2">cases of COVID-19.</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Confirmed
