import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onRandomNumberGen = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumberGen}
          >
            Generate
          </button>
          <p className="random-number">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
