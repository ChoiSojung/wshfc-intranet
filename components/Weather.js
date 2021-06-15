import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import {Card} from 'semantic-ui-react'
import moment from 'moment'

class Weather extends React.Component {
    state = {
        currently: 'loading',
        forecast: {}
    }


    componentDidMount() {

        const success = (position) => {
            const {latitude, longitude} = position.coords
            fetch(`${process.env.WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.WEATHER_API_KEY}`)
                .then((res) => res.json())
                .then((forecast) => this.setState({ forecast, currently: 'success' }))
                .catch(()=> this.setState({currently: 'error'}))
        }

        const error = ()=> {
            alert('Unable to retrieve your location for weather')
        }

        navigator.geolocation.getCurrentPosition(success, error)
    } 
   
        
    render(){
        const { currently, forecast } = this.state
        return(
            <div>
                {currently === 'success' ? (
                    <>
                        <Card className="p-2 text-center w-full">
                            <Card.Content>
                                <Card.Header className="font-serif text-gray-700 text-2xl">{forecast.name}</Card.Header>
                                <p className="text-gray-700 text-xl">{forecast.weather[0].main}</p>
                                <p className="font-gray-700">{moment().format('dddd')}, {moment().format('LL')}</p>
                                <p className="font-gray-700 text-sm">Currently: {forecast.main.temp} &deg;F</p>
                                <p className="font-gray-700 text-sm"> Sunrise: {new Date(forecast.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p className="font-gray-700 text-sm">Sunset: {new Date(forecast.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                <p className="font-gray-700 text-sm">Humidity: {forecast.main.humidity} %</p>
                            </Card.Content>
                        </Card>  
                    </>     
                ) : currently === 'error' ? (
                    <p>Error</p>
                ) : (
                    <p>Loading..</p>
                )}   
            </div>
        )
    }     
}

export default Weather;