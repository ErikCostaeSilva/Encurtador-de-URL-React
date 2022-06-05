import './Main.css';
import ShortenLink from './ShortenLink';
import iconbrand from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';
function Main(){
    return(
        <main>
        <section className="topSection">
          <div className="contentMain">
            <h1>More than just shorter links</h1>
            <p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button type="button" id="getStarted">Get Started</button>
          </div>
        </section>
        <section className="bottomSection">
          <ShortenLink/>
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
    )
}
export default Main;