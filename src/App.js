import React, {useState, Component} from 'react'
import Form from './Form'
class App extends Component {
    state = {
        totalSeconds : 0,
        timerId : null
    }

    startTimer = (totalSecondsInput) => {
        if (this.state.timerId) {
            clearTimeout(this.state.timerId)
        }
        this.setState({totalSeconds : totalSecondsInput})

        const timer = setInterval(() => {
            if (this.state.totalSeconds != 0) {
                this.setState({totalSeconds : this.state.totalSeconds - 1})
            }
        }, 1000);
        this.setState({timerId : timer})
    }

    stopTimer = () => {
        clearTimeout(this.state.timerId)
    }

    render() {
        return (
            <div>
                {this.state.totalSeconds}
                <Form totalSeconds={this.state.totalSeconds} onStartButtonClick={this.startTimer} onStopButtonClick={this.stopTimer}/>
            </div>
        )
    }
}

export default App