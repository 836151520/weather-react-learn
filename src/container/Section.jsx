import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import WeatherInfo from '../components/WeatherInfo'
import bgImg from '../image/bg.jpg'

class Section extends Component {
    render() {
        return (
            <section className={this.props.className}>
                <Nav/>
                <WeatherInfo/>
            </section>
        )
    }
}

Section = styled(Section)`
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  padding: 3vh 10vw ;
  border-top:30px;
  margin: 0 auto;
  height: 91vh;
  background:url(${bgImg}) no-repeat center center;
  background-size:cover;
  color: #fff;
`


export default Section