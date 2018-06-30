import React, {Component} from 'react'
import styled from 'styled-components'
import Time from '../components/Time'


class Header extends Component {
    render() {
        return (
            <Time/>
        )
    }
}

Header = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header