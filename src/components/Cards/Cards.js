import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Chart from '../Chart/Chart'
import Countries from '../Countries/Countries'

import {
    Confirmed,
    Recovered,
    Deaths
} from '../'
import { API_URL } from '../../config/api'
import './cards.css'

const Cards = () => {

    const [confirmed, setConfirmed] = useState([])
    const [recovered, setRecovered] = useState([])
    const [deaths, setDeaths] = useState([])
    const [lastUpdate, setLastUpdate] = useState([])
    const [dailyData, setDailyData] = useState([])
    const [countries, setCountryData] = useState([])
    const [state, setState] = useState({
        data: {},
        country: ''
    })

    const getData = async (country) => {

        let changeableURL = API_URL

        if (country) {
            changeableURL = `${API_URL}/countries/${country}`
        }

        await axios.get(`${changeableURL}`)
            .then((response) => {
                const { data: { confirmed, recovered, deaths, lastUpdate } } = response
                setConfirmed([confirmed])
                setRecovered([recovered])
                setDeaths([deaths])
                setLastUpdate([lastUpdate])
            })
            .catch((err) => console.error(err))
    }

    const getDailyData = async () => {
        await axios.get(`${API_URL}/daily`)
            .then((response) => {
                const { data } = response

                const modifiedData = data.map((dailyData) => ({
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate
                }))

                setDailyData(modifiedData)

                return modifiedData

            })
            .catch((err) => console.error(err))
    }

    const getCountryData = async () => {
        await axios.get(`${API_URL}/countries`)
            .then((response) => {
                const { data: { countries } } = response
                setCountryData(countries.map((country) => country.name))
            })
            .catch((err) => console.error(err))
    }

    const handleCountryChange = async (country) => {
        const data = await getData(country)
        setState({ data, country })

    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getCountryData()
    }, [setCountryData])

    useEffect(() => {
        getDailyData()
    }, [])

    const { data, country } = state

    return (
        <section>
            <section className="cards">
                <Confirmed lastUpdate={lastUpdate} confirmed={confirmed} />
                <Recovered lastUpdate={lastUpdate} recovered={recovered} />
                <Deaths lastUpdate={lastUpdate} deaths={deaths} />
            </section>
            <Countries handleCountryChange={handleCountryChange} countries={countries} />
            <Chart
                confirmed={confirmed.map(({ value }) => value)}
                recovered={recovered.map(({ value }) => value)}
                deaths={deaths.map(({ value }) => value)}
                data={data}
                country={country}
                dailyData={dailyData}
            />
        </section>
    )
}

export default Cards
