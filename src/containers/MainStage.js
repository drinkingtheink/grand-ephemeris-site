import React, { Component } from 'react';
import GELogo from '../components/GELogo';
import InstrumentPanel from '../components/InstrumentPanel';
import InstrumentWidgets from '../components/InstrumentWidgets';
import Accordion from '../components/Accordion';
import geImg from '../img/ge-group.jpg';
import lyrics from '../data/lyrics';
import InstagramEmbed from 'react-instagram-embed';

class MainStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1,
      y: 1
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

           <p className="ge-desc-quote">Psychedelia/Americana emanating from Austin, TX</p>
           <p className="ge-desc-quote">(30.2672° N, 97.7431° W)</p>

           <InstrumentPanel />
           <InstrumentWidgets />
        </section>

        <section className="main-panel">
          <p className="ge-description content-panel">
            <span className="ge-script">Grand Ephemeris</span> is a music collective from Austin, TX. Led by brothers Jason  and Joel Harrison, they explore the notions of Man vs Creator/Human vs Nature/Want vs Need through their Americana-tinged telescope accompanied by slide guitar, banjo, electronica, keys and raucous rhythms.
                  
             <a className="ge-contact" href="javascript:void( window.open( 'https://form.jotform.com/42165746848163', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Contact Grand Ephemeris</a>
          </p>        

          <h2>Discography</h2>

          <article className="content-panel atlassian-breaks" id="remeridian"> 
            <span className="new-release-badge">Latest Release</span>

            <h3>Remeridian</h3>
            
            <section className="album-info">
              <span>Releasing January 2021</span>
            </section>

            <a target="_blank" href="https://grandephemeris.bandcamp.com/"><img src="https://i.ibb.co/8sXy7VM/remeridian-promo-banner.jpg" alt="Grand Ephemeris present: Remeridian - their new collection of music" /></a>

            <h4>"Gemini Drift" from Remeridian</h4>
            <iframe class="gb-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3356015452/size=small/bgcol=ffffff/linkcol=0687f5/track=2127716486/transparent=true/" seamless><a href="https://grandephemeris.bandcamp.com/album/remeridian-2">Remeridian by Grand Ephemeris</a></iframe>

            <h4>Musicians:</h4>

            <article className="gallery">
              <p><strong>Jason M Harrison:</strong> vocals/guitar/bass/beats</p>
              <p><strong>Dalton Chamblee:</strong> bass on "Westheimer Waltz"</p>
              <p><strong>Dave Thompson:</strong> lead guitar on "Remeridian"</p>
            </article>

            <h4>Production:</h4>

            <article className="gallery">
              <p><strong>Recorded at:</strong> Pendragon Post - Austin, TX</p>
              <p><strong>Engineered by:</strong> Jason M Harrison</p>
            </article>

            <h4>Artwork:</h4>
            <article className="gallery">
              <p><strong>Background image by:</strong> YuanChuan / <a target="_blank" href="https://twitter.com/yuanchuan23" alt="The artist on Twitter">@yuanchuan23</a></p>
            </article>
          </article>

          <article className="content-panel atlassian-breaks" id="atlassian-breaks"> 
            <h3>Atlassian Breaks</h3>
            
            <section className="album-info">
              <span>Released August, 18th 2019</span>
            </section>

            <iframe title="Atlassian Breaks" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/845039828&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            <section className="stream">
              <h4>Stream:</h4>
              
              <article className="gallery">
                <a href="https://open.spotify.com/album/2ZThkRxu9Mz5E44Nte7LYN" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://soundcloud.com/grandephemeris/sets/atlassian-breaks" target="_blank" rel="noopener noreferrer">SoundCloud</a>
                <a href="https://grandephemeris.bandcamp.com/album/atlassian-breaks" target="_blank" rel="noopener noreferrer">Bandcamp</a>
                <a href="https://www.youtube.com/watch?v=kN6qfuCQ-50&list=OLAK5uy_l08-n9ifDQ6VtUTxKk7_yKlHV56KMOH08" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://music.apple.com/us/album/atlassian-breaks-ep/1476154940" target="_blank" rel="noopener noreferrer">iTunes</a>
                <a href="https://play.google.com/store/music/album/Grand_Ephemeris_Atlassian_Breaks?id=Bbrtynzam6pyiakd4tet6obmkou&hl=en" target="_blank" rel="noopener noreferrer">Google Play</a>
                <a href="https://www.amazon.com/dp/B07WH8LCZ1/ref=sr_1_1&qid=1566132499&s=dmusic&search-type=ss&sr=1-1" target="_blank" rel="noopener noreferrer">Amazon Music</a>
                <a href="https://www.iheart.com/artist/grand-ephemeris-30612128/albums/atlassian-breaks-78069011/" target="_blank" rel="noopener noreferrer">iHeartRadio</a>
              </article>
            </section>    

            <section className="videos">
              <h4>Video:</h4>
              <iframe 
                title="Grand Ephemeris live video - Performance of Men of the Cloth"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/H6ag4-VWXV0" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </section>

            <section className="lyrics">
              <h4>Lyrics:</h4>

              <Accordion 
                title="Atlassian Breaks"
                content={lyrics.ab.ab}
              />
              <Accordion 
                title="Hands So Sleight"
                content={lyrics.ab.hss}
              />
              <Accordion 
                title="Westport Hymn" 
                content={lyrics.ab.wh}
              />
              <Accordion 
                title="Men of the Cloth"
                content={lyrics.ab.motc}
              />
            </section>        

             <section className="credits">
              <h4>Musicians:</h4>

              <article className="gallery">
                <p><strong>Jason M Harrison:</strong> vocals/guitar</p>
                <p><strong>Dalton Chamblee:</strong> bass/drums/keys</p>
                <p><strong>Kyle Williams:</strong> keys</p>
                <p><strong>Sam Berniard:</strong> guitar</p>
                <p><strong>Joel Harrison:</strong> vocals</p>
              </article>

              <h4>Production:</h4>

              <article className="gallery">
                <p><strong>Recorded at:</strong> Dawsey Ray Studios - Austin, TX</p>
                <p><strong>Engineered by:</strong> Dalton Chamblee</p>
                <p><strong>Mastered by:</strong> <a href="http://dannystapleton.com/" target="_blank" rel="noopener noreferrer">Danny Stapleton</a></p>
              </article>
            </section>       
          </article>

          <article className="content-panel votive-viscera" id="votive-viscera">
            <h3>Votive Viscera</h3>
            
            <section className="album-info">
              <span>Released August, 1st 2014</span>
            </section>

            <iframe title="Votive Viscera" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/45125373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>            
            
            <section className="stream">
              <h4>Stream:</h4>
              
              <article className="gallery">
                <a href="https://open.spotify.com/album/6MST0N0G6JCLreMWWhL6Rc" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://soundcloud.com/grandephemeris/sets/votive-viscera" target="_blank" rel="noopener noreferrer">SoundCloud</a>
                <a href="https://grandephemeris.bandcamp.com/" target="_blank" rel="noopener noreferrer">Bandcamp</a>
                <a href="https://www.youtube.com/playlist?list=PLkwlX4LdnGNQTwQBvXWNh1I5L-_plTnIB" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://music.apple.com/gb/album/votive-viscera/904517173" target="_blank" rel="noopener noreferrer">iTunes</a>
                <a href="https://play.google.com/store/music/album?id=Bt7mxmuowerd6z4bp4ukiarvw6a&tid=song-Twf4szdzioobw5uxndcsqhiwf7e&hl=en" target="_blank" rel="noopener noreferrer">Google Play</a>
                <a href="https://music.amazon.com/albums/B07QW54XBJ" target="_blank" rel="noopener noreferrer">Amazon Music</a>
                <a href="https://www.iheart.com/artist/grand-ephemeris-30612128/albums/votive-viscera-72405128/" target="_blank" rel="noopener noreferrer">iHeartRadio</a>
              </article>
            </section>  

            <section className="videos">
              <h4>Video:</h4>
              <iframe 
                title="Less Superstitious from Votive Viscera" 
                src="https://player.vimeo.com/video/111038257" 
                width="640" 
                height="360" 
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen>
              </iframe>
            </section>

            <section className="lyrics">
              <h4>Lyrics:</h4>

              <Accordion 
                title="Real Page Turner" 
                content={lyrics.vv.rpt}
              />
              <Accordion 
                title="The Latent Psychic" 
                content={lyrics.vv.tlp} 
              />
              <Accordion 
                title="Less Superstitious" 
                content={lyrics.vv.ls}
              />
              <Accordion 
                title="Sweet Toothe" 
                content={lyrics.vv.st}
              />
              <Accordion 
                title="Nunca Jamas" 
                content={lyrics.vv.nj}
              />
              <Accordion 
                title="Pick Your Socket" 
                content={lyrics.vv.pys}
              />
              <Accordion 
                title="My Education in the Dark Arts" 
                content={lyrics.vv.me} 
              />
              <Accordion 
                title="XWhy"
                content={lyrics.vv.xw} 
              />
            </section>    

            <section className="credits">
              <h4>Musicians:</h4>
              
              <article className="gallery">
                <p><strong>Jason M Harrison:</strong> vocals/guitar/percussion</p>
                <p><strong>Joel Harrison:</strong> vocals/bass</p>
                <p><strong>Kyle Williams:</strong> keys</p>
                <p><strong>Chad Gowan:</strong> drums</p>
                <p><strong>Nathan Campbell:</strong> mandolin/slide guitar</p>
                <p><strong>Aaron Campbell:</strong> banjo/mandolin</p>
                <p><strong>Tim Aylsworth:</strong> guitar</p>
              </article>

              <h4>Production:</h4>
              
              <article className="gallery">
                <p><strong>Recorded at:</strong> On the Altar Studios - Austin, TX</p>
                <p><strong>Mastered by:</strong> Jeff Gudenrath - <a href="http://www.audiointegritymastering.com/" rel="noopener noreferrer" target="_blank">AudioIntegrity</a> - Austin, TX</p>
              </article>
            </section>
          </article>

          <article className="content-panel covers">
            <h3>Misc Covers</h3>
            <iframe title="ge-covers" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/821052595&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </article>

          <article className="content-panel covers">
            <h3>About/Contact</h3>
             <p>Grand Ephemeris is led by brothers Jason and Joel Harrison who ply their earthly trade in the fair city of Austin, TX. They are accompanied by many talented friends during this project. Please see albums notes for who helped where.</p>

             {/* eslint no-script-url: 0 */}                
             <a className="ge-contact" href="javascript:void( window.open( 'https://form.jotform.com/42165746848163', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Contact Grand Ephemeris</a>

             <InstagramEmbed
              url='https://www.instagram.com/p/B1VDPHoHc0K/'
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
             />

             <InstagramEmbed
              url='https://www.instagram.com/p/B1JVxHIFmOy/'
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
             />
             <img src={geImg} alt="The first incantation of Grand Ephemeris" />
                           
          </article>
        </section>
      </main>
    )
  }
}

export default MainStage;