import './Footer.css'
import logo from '../images/logo.svg'
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';
function Footer(){
    return (
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
    )
}
export default Footer;