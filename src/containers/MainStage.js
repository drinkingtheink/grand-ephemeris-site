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
             <span>λo:</span> <p className="dash-val">{ state.x }°</p>  <span className="symbol">ϕo:</span> <p className="dash-val">{ state.y }°</p>
           </h3>

           <p className="ge-desc-quote">Psychedelia/Americana emanating from Austin, TX</p>
           <p className="ge-desc-quote">(30.2672° N, 97.7431° W)</p>

           <InstrumentPanel />
           <InstrumentWidgets />

           <p><a href="https://github.com/drinkingtheink/grand-ephemeris-site" target="_blank">About this site</a></p>
        </section>

        <section className="main-panel">
          {/*<p className="ge-description content-panel">
            <span className="ge-script">Grand Ephemeris</span> is a music collective from Austin, TX. Led by brothers Jason  and Joel Harrison, they explore the notions of Man vs Creator/Human vs Nature/Want vs Need through their Americana-tinged telescope accompanied by slide guitar, banjo, electronica, keys and raucous rhythms.
                  
             <a className="ge-contact" href="javascript:void( window.open( 'https://form.jotform.com/42165746848163', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">Contact Grand Ephemeris</a>
          </p>  */}      

          <article className="content-panel equinoxical" id="equinoxical"> 
            <span className="new-release-badge">Latest Release</span>

            <h3>Equinoxical</h3>
            
            <section className="album-info">
              <span>Released March 20th 2022</span>
            </section>
            
            <iframe width="100%" height="300" scrolling="no" frameBorder="0" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1401761539&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>

            <h4>Bandcamp</h4>
            <iframe width="100%" frameBorder="0" height="120" src="https://bandcamp.com/EmbeddedPlayer/album=26499060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://grandephemeris.bandcamp.com/album/equinoxical">Equinoxical by Grand Ephemeris</a></iframe>

            <section className="stream">
              <h4>Stream:</h4>
              
              <article className="gallery">
                <a href="https://open.spotify.com/album/4ucAglG0p1tLyOlKxU659T?si=Nj4vuP3fSpSCwQkvoWNpCw" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://soundcloud.com/grandephemeris/sets/equinoxical" target="_blank" rel="noopener noreferrer">SoundCloud</a>
                <a href="https://grandephemeris.bandcamp.com/album/equinoxical" target="_blank" rel="noopener noreferrer">Bandcamp</a>
                <a href="https://youtube.com/playlist?list=OLAK5uy_mPfQrmh-j-C67ZKOxXbqPYL09PgOy2o-I" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://music.apple.com/us/album/equinoxical-ep/1613971647" target="_blank" rel="noopener noreferrer">iTunes</a>
                <a href="https://amazon.com/music/player/albums/B09VCM9X93?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_e3ylpoqbtOgPTJExPloPsW1Yv" target="_blank" rel="noopener noreferrer">Amazon Music</a>
                <a href="https://www.iheart.com/artist/grand-ephemeris-30612128/albums/equinoxical-162128490/" target="_blank" rel="noopener noreferrer">iHeartRadio</a>
              </article>
            </section>

            <h4>Video:</h4>
            <p>Long Way From Olympus:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4v62x_t-3mw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <p>Equinoxical Promo #1:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9AJkPHccDrg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <section className="lyrics">
              <h4>Lyrics:</h4>

              <Accordion 
                title="Equinoxical"
                content={lyrics.equi.nox}
              />
              <Accordion 
                title="Sal Valotile"
                content={lyrics.equi.sv}
              />
              <Accordion 
                title="Tumult, Etc." 
                content={lyrics.equi.te}
              />
              <Accordion 
                title="Lazy Bones"
                content={lyrics.equi.lb}
              />
              <Accordion 
                title="Equiluxical"
                content={lyrics.equi.lux}
              />
              <Accordion 
                title="Long Way From Olympus"
                content={lyrics.equi.lwfo}
              />
            </section>  

            <h4>Musicians:</h4>

            <article className="gallery">
              <p><strong>Jason M Harrison:</strong> vocals/guitar/bass/beats</p>
              <p><strong>Jaret Harrison:</strong> bass/guitar/vocals</p>
              <p><strong>Eric Blount:</strong> lead guitar</p>
              <p><strong>Sam Berniard:</strong> background vocals on "Sal Valotile"</p>
              <p><strong>Larry Hooper:</strong> co-writer on "Long Way From Olympus"</p>
            </article>

            <h4>Production:</h4>

            <article className="gallery">
              <p><strong>Recorded at:</strong> Pendragon Press - Austin, TX</p>
              <p><strong>Engineered by:</strong> Jason M Harrison</p>
            </article>

            <h4>Artwork:</h4>
            <article className="gallery">
              <p><strong>Background artwork by:</strong> <a target="_blank" href="https://www.instagram.com/spencerjtullos/" alt="The artist, Spencer Tullos, on Instagram">Spencer Tullos</a></p>
            </article>
          </article>

          <article className="content-panel remeridian" id="remeridian"> 
            <h3>Remeridian</h3>
            
            <section className="album-info">
              <span>Released December 31st 2020</span>
            </section>

            <iframe title="Remeridian - SoundCloud" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1191576760&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            <h4>Bandcamp</h4>
            <iframe title="Remeridian - Bandcamp" className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3356015452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://grandephemeris.bandcamp.com/album/remeridian-2">Remeridian by Grand Ephemeris</a></iframe>

            <section className="stream">
              <h4>Stream:</h4>
              
              <article className="gallery">
                <a href="https://open.spotify.com/album/1UYsqqOikff3gISzTL3X4g?si=oGYJxxVLQ2GFT9z83gm0IA" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://soundcloud.com/grandephemeris/sets/remeridian" target="_blank" rel="noopener noreferrer">SoundCloud</a>
                <a href="https://grandephemeris.bandcamp.com/album/remeridian-2" target="_blank" rel="noopener noreferrer">Bandcamp</a>
                <a href="https://youtu.be/1Q7S1q5Bn44" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://music.apple.com/us/album/remeridian-ep/1547479785" target="_blank" rel="noopener noreferrer">iTunes</a>
                <a href="https://music.amazon.com/albums/B08S7194F6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US" target="_blank" rel="noopener noreferrer">Amazon Music</a>
                <a href="https://www.iheart.com/artist/grand-ephemeris-30612128/albums/remeridian-122335840/" target="_blank" rel="noopener noreferrer">iHeartRadio</a>
              </article>
            </section>

            <h4>Video:</h4>

            <p>Entire "Remeridian":</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1Q7S1q5Bn44" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <section className="lyrics">
              <h4>Lyrics:</h4>

              <Accordion 
                title="Westheimer Waltz"
                content={lyrics.r.ww}
              />
              <Accordion 
                title="Gemini Drift"
                content={lyrics.r.gd}
              />
              <Accordion 
                title="Remeridian" 
                content={lyrics.r.r}
              />
              <Accordion 
                title="Force Fields"
                content={lyrics.r.ff}
              />
            </section>  

            <h4>Musicians:</h4>

            <article className="gallery">
              <p><strong>Jason M Harrison:</strong> vocals/guitar/bass/beats</p>
              <p><strong>Dalton Chamblee:</strong> bass on "Westheimer Waltz"</p>
              <p><strong>Dave Thompson:</strong> lead guitar on "Remeridian"</p>
            </article>

            <h4>Production:</h4>

            <article className="gallery">
              <p><strong>Recorded at:</strong> Pendragon Press - Austin, TX</p>
              <p><strong>Engineered by:</strong> Jason M Harrison</p>
            </article>

            <h4>Artwork:</h4>
            <article className="gallery">
              <p><strong>Background artwork by:</strong> YuanChuan / <a target="_blank" href="https://twitter.com/yuanchuan23" alt="The artist on Twitter">@yuanchuan23</a></p>
            </article>
          </article>

          <article className="content-panel atlassian-breaks" id="atlassian-breaks"> 
            <h3>Atlassian Breaks</h3>
            
            <section className="album-info">
              <span>Released August, 18th 2019</span>
            </section>

            <iframe title="Atlassian Breaks" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/845039828&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            <h4>Bandcamp</h4>
            <iframe title="Atlassian Breaks - Bandcamp" className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3730474485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://grandephemeris.bandcamp.com/album/atlassian-breaks">Atlassian Breaks by Grand Ephemeris</a></iframe>

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
              <p>Entire "Atlassian Breaks":</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/kN6qfuCQ-50" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              <p>"Men of the Cloth" - Live - August 28th, 2019:</p>
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
            
            <h4>Bandcamp</h4>
            <iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3885287866/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://grandephemeris.bandcamp.com/album/votive-viscera">Votive Viscera by Grand Ephemeris</a></iframe>
            
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

              <p>Video for "Less Superstitious":</p>
              <iframe 
                title="Less Superstitious from Votive Viscera" 
                src="https://player.vimeo.com/video/111038257" 
                width="640" 
                height="360" 
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen>
              </iframe>

              <p>Entire "Votive Viscera":</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CGh_Vur2OTA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
             <p>Grand Ephemeris is led by brothers Jason and Joel Harrison who ply their earthly trade in the fair city of Austin, TX. They are accompanied by many talented friends during this project. Please see album notes for who helped where.</p>

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