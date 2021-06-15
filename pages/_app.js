import '../styles/tailwind.css'
import React, { useEffect, useState } from 'react'
import {Card} from 'semantic-ui-react'
import moment from 'moment'

function MyApp({ Component, pageProps }) {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchData= async() => { 
        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

        await fetch(`${process.env.WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
        })
    } 
    fetchData()
  }, [lat, long])

  return <Component {...pageProps} />
}

export default MyApp
