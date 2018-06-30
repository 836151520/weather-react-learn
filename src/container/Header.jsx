import React, {Component} from 'react'
import styled from 'styled-components'
import Time from '../components/Time'

class Header extends Component {
    render() {
        return (
            <header {...this.props}>
                    <div>占位置</div>
                    <Time/>
            </header>
        )
    }
}

Header = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  background: #000;
  color: white;
  padding: 0 10vw;
`

export default Header