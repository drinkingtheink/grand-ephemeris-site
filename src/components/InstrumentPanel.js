import React, { Component } from 'react';
import CountUp from 'react-countup';

const directions = [
  'N',
  'NW',
  'NE',
  'E',
  'S',
  'SW',
  'SE',
  'W'
]

class InstrumentPanel extends Component {
   constructor(props) {
    super(props);
    this.state = {};
    this.generateNewFigures = this.generateNewFigures.bind(this);
  }

  getCurrentDirection() {
    return directions[Math.floor(Math.random() * directions.length)];
  }

  getRandomNumber() {
    const precision = 100; // 2 decimals
    return Math.floor(Math.random() * (1000 * precision - 1 * precision) + 1 * precision) / (1*precision);
  }

  generateNewFigures() {
    let newFigures = {
      figureOne: this.getRandomNumber(),
      figureTwo: this.getRandomNumber(),
      figureThree: this.getRandomNumber()
    }

    this.setState({ ...newFigures });
  }

  componentDidMount() {
    this.generateNewFigures();
  }

  render() {
    let state = this.state || {};
    
    return (
      <section className="instrument-panel">
        <p><strong>πρ∧:</strong> <CountUp decimals={2} end={ state.figureOne ? state.figureOne : 0 } /></p>
        <p><strong>ψ∇≈:</strong> <CountUp decimals={2} end={ state.figureTwo ? state.figureTwo : 0 } /></p>
        <p><strong>ΣΦ:</strong> <CountUp decimals={2} end={ state.figureThree ? state.figureThree : 0 } /></p>
        <p><strong>⟨Ωα⟩:</strong> { this.getCurrentDirection() }</p>

        <button onClick={this.generateNewFigures}>Configure</button>
      </section>
    )
  }
}

export default InstrumentPanel;