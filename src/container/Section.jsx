import React, {Component} from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import WeatherInfo from '../components/WeatherInfo'
import ForecastList from '../components/ForecastList'

import getLocation from '../common/getLocation'
import getWeatherInfo from '../common/getWeatherInfo'
import bgImg from '../image/bg.jpg'
import store from '../store'

class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nowWeather: {
                fl: '',
                cond: '',
                wind: '',
                pcpn: '',
                imgCode: '',
                tips: '',
            },
            location: {
                city: '',
                province: '',
                leader: ''
            },
            forecastList: [],
        }
    }

    async componentDidMount() {
        let location = await getLocation()
        //定位
        if (!location) return alert('GPS定位失败！')

        this.setLocation(location)
        let weather = await getWeatherInfo(location.city)
        //获取天气数据

        if (!weather) return alert('该地区站暂不支持！')

        this.setWeatherInfo(weather)
        store.dispatch({
            type: 'changeLocation',
            location: location
        })
        store.subscribe(async () => {
            location = store.getState().location
            weather = await getWeatherInfo(location.city)
            this.setLocation(location)
            weather && this.setWeatherInfo(weather)
        })
    }

    setLocation(location) {
        this.setState({
            location: {
                leader: location.leader,
                city: location.city,
                province: location.province,
            }
        })
    }

    setWeatherInfo(weather) {
        this.setState({
            nowWeather: {
                fl: weather.now.fl,
                cond: weather.now.cond.txt,
                wind: weather.now.wind.dir,
                pcpn: weather.now.pcpn,
                imgCode: weather.now.cond.code,
                tips: weather.suggestion.drsg.txt,
            },
            forecastList: weather.daily_forecast,
        })
    }

    render() {
        let {location, nowWeather, forecastList} = this.state
        return (
            <section className={this.props.className}>
                <Nav {...location} />
                <WeatherInfo nowWeather={nowWeather}/>
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
  height: 91%;
  background:url(${bgImg}) no-repeat center center;
  background-size:cover;
  color: #fff;
  @media screen and (max-width: 500px) {
    padding: 0 3vw;
    
  }
`

export default Section