import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import WeatherInfo from '../components/WeatherInfo'
import ForecastList from '../components/ForecastList'

import bgImg from '../image/bg.jpg'

class Section extends Component {
    render() {
        return (
            <section className={this.props.className}>
                <Nav/>
                <WeatherInfo/>
                <ForecastList/>
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
`


export default Section