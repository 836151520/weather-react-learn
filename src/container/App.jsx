import React, {Component, Fragment} from 'react'
import Header from '../container/Header'
import Section from '../container/Section'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Section/>
            </Fragment>
        )
    }
}

export default App