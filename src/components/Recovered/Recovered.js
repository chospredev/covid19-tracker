import React from 'react'
import CountUp from 'react-countup'
import Moment from 'react-moment'

import './recovered.css'

const Recovered = ({ recovered, lastUpdate }) => {

    return (
        <div className="recovered-container">
            {recovered.map((item, index) => (
                <div key={index} className="header-recovered">
                    Recovered:
                    <div className="recovered">
                        <CountUp start={0} end={item.value} duration={2} />
                    </div>
                    <div className="date">
                        <Moment format="dddd/MMM/YYYY">{lastUpdate}</Moment>
                        <div className="recovered-text-heading">
                            <p className="heading-1">Number of recovered</p>
                            <div className="div-2">cases of COVID-19.</div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Recovered
