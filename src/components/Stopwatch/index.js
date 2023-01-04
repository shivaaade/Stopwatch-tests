// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {sec: 0, newMin: 0}

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {sec, newMin} = this.state
    const secs = newMin * 60 + 1 + sec
    const m = Math.floor(secs / 60)
    const s = secs % 60
    this.setState({sec: s, newMin: m})
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({sec: 0, newMin: 0})
  }

  render() {
    const {sec, newMin} = this.state
    let result
    if (sec < 10 && newMin < 10) {
      result = `0${newMin}:0${sec}`
    } else if (sec < 10) {
      result = `${newMin}:0${sec}`
    } else if (newMin < 10) {
      result = `0${newMin}:${sec}`
    } else {
      result = `${newMin}:${sec}`
    }

    return (
      <div className="back">
        <h1>Stopwatch</h1>
        <div>
          <img
            alt="stopwatch"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          />
          <h1>{result}</h1>
          <button onClick={this.onStart} type="button">
            Start
          </button>
          <button onClick={this.onStop} type="button">
            Stop
          </button>
          <button onClick={this.onReset} type="button">
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
