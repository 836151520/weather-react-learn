import React, {Component} from 'react'
// import font from '../../common/font'
import styled from 'styled-components'

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({
                time: new Date()
            }),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        let {className} = this.props
        let time = this.state.time.toLocaleString()
        return (
            <span className={className}
                  id='time'>
                {time}
            </span>
        )
    }
}

//有字库等宽字体
// font('#time')

Time = styled(Time)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export default Time