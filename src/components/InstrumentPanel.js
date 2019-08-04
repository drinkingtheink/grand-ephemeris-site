import React, { Component } from 'react';
import CountUp from 'react-countup';

const directions = [
  'septentrionalis',
  'aquilonius',
  'orientalis',
  'volturnalis',
  'australis',
  'africalis',
  'occidentalis'
]

class InstrumentPanel extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      currentDirection: null,
      figureOne: null,
      figureTwo: null,
      figureThree: null,
      interval: null
    };
    this.generateNewFigures = this.generateNewFigures.bind(this);
    this.generateRandomDirection = this.generateRandomDirection.bind(this);
  }

  getCurrentDirection() {
    return directions[Math.floor(Math.random() * directions.length)];
  }

  getRandomNumber() {
    const precision = 100; // 2 decimals
    return Math.floor(Math.random() * (1000 * precision - 1 * precision) + 1 * precision) / (1*precision);
  }

  generateRandomDirection() {
    let newDir = this.getCurrentDirection();
    this.setState({ currentDirection: newDir });
  }

  generateNewFigures() {
    let newFigures = {
      figureOne: this.getRandomNumber(),
      figureTwo: this.getRandomNumber(),
      figureThree: this.getRandomNumber()
    }

    this.setState({ figureOne: newFigures.figureOne, figureTwo: newFigures.figureTwo, figureThree: newFigures.figureThree });

    this.generateRandomDirection();
  }

  componentDidMount() {
    this.generateNewFigures();
    let app = this;
    setInterval(function(){
      app.generateNewFigures();
    }, 5000);
  }

  render() {
    let state = this.state || {};
    
    return (
      <section className="instrument-panel">
        <p className="panel-field"><strong>Ωα:</strong> { state.currentDirection }</p>
        <p className="panel-field"><strong>πρ∧:</strong> <CountUp decimals={2} end={ state.figureOne ? state.figureOne : 0 } />°</p>
        <p className="panel-field"><strong>ψ∇≈:</strong> <CountUp decimals={2} end={ state.figureTwo ? state.figureTwo : 0 } />°</p>
        <p className="panel-field"><strong>ΣΦ:</strong> <CountUp decimals={2} end={ state.figureThree ? state.figureThree : 0 } />°</p>
      </section>
    )
  }
}

export default InstrumentPanel;