import React, {Component} from 'react'

class Time extends Component {
    constructor() {
        super()
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
            <span {...this.prop}>
                {this.state.time.toLocaleString()}
            </span>
        )
    }
}

export default Time