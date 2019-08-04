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
           <h3 className="position-display">λo: { state.x } | ϕo: { state.y }</h3>
        </section>

        <section className="main-panel">
          <h2>Discography</h2>
          <div className="discog-menu">
            <ul>
              <li><a href="#atlassian-breaks">Atlassian Breaks</a></li>
              <li><a href="#votive-viscera">Votive Viscera</a></li>
            </ul>
          </div>

          <article className="album atlassian-breaks"> 
            <a name="#atlassian-breaks"></a>
            <h3>Atlassian Breaks - Released August, 23rd 2019</h3>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/817825176&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>  

            <section className="lyrics">
              <h4>Lyrics:</h4>
            </section>        
          </article>

          <article className="album votive-viscera">
            <a name="#votive-viscera"></a>
            <h3>Votive Viscera - Released August, 1st 2014</h3>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/45125373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>            
            <section className="lyrics">
              <h4>Lyrics:</h4>
            </section>    
          </article>
        </section>
      </main>
    )
  }
}

export default MainStage;