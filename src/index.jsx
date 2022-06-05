import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import logo from'./images/logo.svg';
import iconbrand from './images/icon-brand-recognition.svg';
import detailedRecords from './images/icon-detailed-records.svg';
import customizable from './images/icon-fully-customizable.svg';
import facebookIcon from './images/icon-facebook.svg';
import twitterIcon from './images/icon-twitter.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instagramIcon from './images/icon-instagram.svg';
import ShortenLink from './components/ShortenLink';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <main>
      <section className="topSection">
        <div className="contentMain">
          <h1>More than just shorter links</h1>
          <p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button type="button" id="getStarted">Get Started</button>
        </div>
      </section>
      <section className="bottomSection">
        <ShortenLink>

        </ShortenLink>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <div className="infoBlock">
          <div className="contentBlock">
            <img src={iconbrand} alt="icon-Brand"/>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className="contentBlock" id="detailedRecords">
            <img src={detailedRecords} alt="icon-Records"/>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className="contentBlock" id="fullyCustomizable">
            <img src={customizable} alt="icon-Customizable"/>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <aside className="footerStarted">
        <h2>Boost your links today</h2>
        <button type="button" id="getStarted">Get Started</button>
      </aside>
      <div className="footerNavegation">
        <img src={logo} alt="Logo-svg" id="white-logo"/>
        <div className="linksFooter">
          <ul>
            <li><strong>Features</strong></li>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
  
          <ul>
            <li><strong>Resources</strong></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
  
          <ul>
            <li><strong>Company</strong></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="socialLogos">
          <a href="#"><img src={facebookIcon} alt="icon-facebook"/></a>
          <a href="#"><img src={twitterIcon} alt="icon-twitter"/></a>
          <a href="#"><img src={pinterestIcon} alt="icon-pinterest"/></a>
          <a href="#"><img src={instagramIcon} alt="icon-instagram"/></a>
        </div>
      </div>
    </footer>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Erik Costa e Silva</a>.
    </div>
    <App />
  </React.StrictMode>
);