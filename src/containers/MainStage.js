import React, { Component } from 'react';
import GELogo from '../components/GELogo';

class MainStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    let state = this.state || {};
    return (
      <main className="grand-ephemeris-home" onMouseMove={this.handleMouseMove}>
        <section className="left-panel attribution">
          <GELogo />
           <h3>Your Location in Space:</h3>
           <h3 className="position-display">λo: { state.x } | ϕo: { state.y }</h3>
        </section>

        <section className="main-panel">
          <h2>Stuff goes here...</h2>
        </section>
      </main>
    )
  }
}

export default MainStage;