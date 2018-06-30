import React, {Component} from 'react'
import styled from 'styled-components'
import Time from '../components/Time'

class Header extends Component {
    render() {
        console.log({...this.props});
        return (
            <header {...this.props}>
                <section>
                    <div>占位置</div>
                    <Time/>
                </section>
            </header>
        )
    }
}

Header = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 9vh;
  background: #000;
  color: white;
  >section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
  }
`

export default Header