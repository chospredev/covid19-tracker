import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import './chart.css'

const Chart = (
    {
        data,
        dailyData,
        confirmed,
        recovered,
        deaths,
        country,
    }
) => {

    const lineChart = (
        dailyData.length ?
            (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'rgba(255, 153, 0, 0.7)',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }
                        ],
                    }}
                />
            ) : null
    )

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(255, 153, 0, 0.7)', 'rgba(22, 224, 0, 0.7)', 'rgba(252, 3, 3, 0.7)'],
                        data: [
                            confirmed.map(({ value }) => value),
                            recovered.map(({ value }) => value),
                            deaths.map(({ value }) => value),
                        ]
                    }],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    )

    return (
        <div className="chart-container">
            <div className="line-chart">
                <section>{!country ? lineChart : barChart}</section>
            </div>
        </div>
    )
}

export default Chart
