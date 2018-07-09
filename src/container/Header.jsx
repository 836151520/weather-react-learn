import React, {Component} from 'react'
import styled from 'styled-components'


import Time from '../components/Time'
import SearchCity from '../components/SearchCity'

class Header extends Component {
    render() {
        let {className} = this.props
        return (
            <header className={className}>
                <SearchCity />
                <Time/>
            </header>
        )
    }
}

Header = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9%;
  background: #000;
  color: white;
  padding: 0 10vw;
  @media screen and (max-width: 500px) {
    padding: 0 3vw;
  }
`

export default Header