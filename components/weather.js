import React, { useEffect, useState } from 'react'
import {Card} from 'semantic-ui-react'
import moment from 'moment'

export default function Weather(){
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })

        console.log('Latitude is: ', lat)
        console.log('Longitude is: ', long)
    }, [lat, long])

    async function getWeather() {
        await fetch(`${process.env.WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&AAPID=${process.env.WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
        })
         
    }
    getWeather()
        
    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.header className="font-serif">{data.name}</Card.header>
                    <p>Temperature: {data.main.temp}</p>
                    <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Description: {data.weather[0].description}</p>
                    <p>Day: {moment().format('dddd')}</p>
                    <p>Date: {moment().format('LL')}</p>
                </Card.Content>
            </Card>       
        </div>
        
    )
       
}
