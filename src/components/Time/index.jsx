import React, {Component} from 'react'
import font from '../../common/font'

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
        return (
            <span {...this.props} id='time'>
                {this.state.time.toLocaleString()}
            </span>
        )
    }
}

font('#time')

export default Time