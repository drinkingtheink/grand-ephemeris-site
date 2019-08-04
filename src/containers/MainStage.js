import React, { Component } from 'react';
import GELogo from '../components/GELogo';
import InstrumentPanel from '../components/InstrumentPanel';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import geImg from '../img/ge-group.jpg';

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
      <main className="grand-ephemeris-home" 
        onMouseMove={this.handleMouseMove}
        onScroll={this.handleScroll}
       >
        <section className="left-panel attribution">
          <GELogo />
           <h3 className="position-display">
             <span>λo:</span> { state.x }° | <span>ϕo:</span> { state.y }°
           </h3>

           <InstrumentPanel />

        </section>

        <section className="main-panel">
          <h2>Discography</h2>
          <div className="discog-menu">
            <AnchorLink href='#atlassian-breaks'>Atlassian Breaks</AnchorLink>
            <AnchorLink href='#votive-viscera'>Votive Viscera</AnchorLink>
          </div>

          <article className="content-panel atlassian-breaks" id="atlassian-breaks"> 
            <h3>Atlassian Breaks</h3>
            
            <section className="album-info">
              <span>Released August, 23rd 2019</span>
            </section>

            <iframe title="Atlassian Breaks" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/817825176&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>  

            <section className="lyrics">
              <h4>Lyrics:</h4>
            </section>        

             <section className="musicians">
              <h4>Production:</h4>
              <p><strong>Recorded at:</strong> Box Turtle Studios - Austin, TX</p>
              <p><strong>Mastered by:</strong> <a href="http://dannystapleton.com/" target="_blank" rel="noopener noreferrer">Danny Stapleton</a></p>
              <h4>Musicians:</h4>
              <p><strong>Jason M Harrison:</strong> vocals/guitar</p>
              <p><strong>Dalton Chamblee:</strong> bass/drums/keys</p>
              <p><strong>Kyle Williams:</strong> keys</p>
              <p><strong>Sam Berniard:</strong> guitar</p>
            </section>       
          </article>

          <article className="content-panel votive-viscera" id="votive-viscera">
            <h3>Votive Viscera</h3>
            
            <section className="album-info">
              <span>Released August, 1st 2014</span>
            </section>

            <iframe title="Votive Viscera" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/45125373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>            
            <section className="lyrics">
              <h4>Lyrics:</h4>
            </section>    

            <section className="musicians">
              <h4>Production:</h4>
              <p><strong>Recorded at:</strong> On the Altar Studios - Austin, TX</p>
              <p><strong>Mastered by:</strong> Jeff Gudenrath - <a href="http://www.audiointegritymastering.com/" rel="noopener noreferrer" target="_blank">AudioIntegrity</a> - Austin, TX</p>
              <h4>Musicians:</h4>
              <p><strong>Jason M Harrison:</strong> vocals/guitar/percussion</p>
              <p><strong>Joel Harrison:</strong> vocals/bass</p>
              <p><strong>Chad Gowan:</strong> drums</p>
              <p><strong>Nathan Campbell:</strong> mandolin/slide guitar</p>
              <p><strong>Aaron Campbell:</strong> banjo/mandolin</p>
              <p><strong>Tim Aylsworth:</strong> guitar</p>
            </section>
          </article>

          <article className="content-panel covers">
            <h3>Misc Covers</h3>
            <iframe title="ge-covers" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/821052595&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </article>

          <article className="content-panel covers">
            <h3>About</h3>
             <img src={geImg} alt="The first incantation of Grand Ephemeris" />
             <p>Grand Ephemeris is led by brothers Jason and Joel Harrison who ply their earthly trade in the fair city of Austin, TX. They are accompanied by many talented friends during this project. Please see albums notes for who helped where.</p>
          </article>
        </section>
      </main>
    )
  }
}

export default MainStage;