import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import bgImg from '../image/bg.jpg'

class Section extends Component {
    render() {
        return (
            <section className={this.props.className}>
                <Nav/>
            </section>
        )
    }
}

Section = styled(Section)`
  padding: 3vh 10vw 0 10vw ;
  border-top:30px;
  margin: 0 auto;
  height: 91vh;
  background:url(${bgImg});
`


export default Section