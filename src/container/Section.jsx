import React, {Component} from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import WeatherInfo from '../components/WeatherInfo'
import ForecastList from '../components/ForecastList'

import getLocation from '../common/getLocation'
import getWeatherInfo from '../common/getWeatherInfo'
import bgImg from '../image/bg.jpg'


class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {},
            tips: '',
            forecastList: [],
        }
    }

    async componentDidMount() {
        let location = await getLocation()
        let weather = await getWeatherInfo(location.city)
        if (location && weather) {
            this.setState({
                location: {
                    country: weather.basic.cnty,
                    city: location.city,
                    province: location.province,
                },
                nowWeather: {
                    fl: weather.now.fl,
                    cond: weather.now.cond.txt,
                    wind: weather.now.wind.dir,
                    pcpn: weather.now.pcpn,
                    imgCode:weather.now.cond.code
                },
                tips: weather.suggestion.drsg.txt,
                forecastList: weather.daily_forecast,
            })
        }

    }


    render() {
        let {location, nowWeather, tips, forecastList} = this.state
        return (
            <section className={this.props.className}>
                <Nav {...location} />
                <WeatherInfo nowWeather={nowWeather} tips={tips}/>
                <ForecastList forecastList={forecastList}/>
            </section>
        )
    }
}

Section = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10vw ;
  border-top:30px;
  height: 91vh;
  background:url(${bgImg}) no-repeat center center;
  background-size:cover;
  color: #fff;
  @media screen and (max-width: 500px) {
    padding: 0 3vw;
  }
`


export default Section