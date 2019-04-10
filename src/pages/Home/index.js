import React from 'react';
import Nav from 'components/Nav';
import DownloadButtonIOS from 'components/DownloadButtonIOS';
import Footer from 'components/Footer';
// import '../app.css';
import curveBg from './img/curve.svg';
import bottomBg from './img/bottom-bg.svg';
import heroImage from './img/hero.png';
import libraryImage from './img/library.png';
import num01 from './img/num01.svg';
import num02 from './img/num02.svg';
import num03 from './img/num03.svg';

const Home = () => (
  <>
    <div className="page-container">
      <img src={curveBg} alt="asd" className="curve" />
      <div className="contain-width">
        <Nav />

        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-h1">Take turns playing songs with friends</h1>
            {/* <p className="hero-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p> */}
            <DownloadButtonIOS />
          </div>
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src={heroImage}
              alt="Music player app screen"
            />
          </div>
        </div>

        <section className="how-it-works-section">
          <h2 className="how-it-works-h">How it Works</h2>

          <div className="how-it-works-content">
            <div className="how-it-works-item">
              <img src={num01} alt="01" className="how-it-works-number" />
              <h3>Join or Create a Listening Room</h3>
              <p>
                Browse popular rooms, create your own, or join one of your
                friends.s
              </p>
            </div>

            <div className="how-it-works-item">
              <img src={num02} alt="02" className="how-it-works-number" />
              <h3>Be a DJ and Add Songs to the Queue</h3>
              <p>
                Each room has up to five DJ spots where you can take turns
                playing your music.
              </p>
            </div>

            <div className="how-it-works-item">
              <img src={num03} alt="02" className="how-it-works-number" />
              <h3>Listen to Music and Chat with Friends</h3>
              <p>
                Chat and discuss what you're hearing with everyone else in the
                room.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div
      className="bottom-bg-container"
      style={{
        backgroundImage: `url(${bottomBg})`
      }}
    >
      <div className="page-container">
        <div className="contain-width">
          <section className="library-section">
            <div className="library-image-wrapper">
              <img src={libraryImage} alt="Music player app screen" />
            </div>
            <div className="library-col">
              <div className="library-text-wrapper">
                <h2 className="library-h">Powered by Spotify</h2>
                <p className="library-p">
                  Search for any song in Spotify's library or select from your
                  saved Spotify music.
                </p>
              </div>
            </div>
          </section>

          <section className="download-section">
            <h2>Available Now on iOS</h2>
            <p>Android Comming Soon</p>
            <DownloadButtonIOS />
          </section>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default Home;
