import './App.css';
import person from './images/my_photo.jpg';
import {linkedin,email} from './buttons.js';
import linkdin_icon from './images/linkedin_icon.png';
import 'font-awesome/css/font-awesome.min.css';
import email_icon from './images/email-icon.jpg';



function App() {
  return (
    <div className="App-body">
      <section className="App-flexbox">
        <img src={person} alt="" className="styled-image"/>
        <section className="App-content">
          <header className="name">Delina Kiflom</header>
          <h4 className='title'>Software Engineer</h4>
          <a className='website' href="https://github.com/delinak">delinakiflom.website </a>
          <br />
          <button onClick={email} className="emailbutton"><img src={email_icon} alt="" className="email_icon"/>Email</button>
          <button onClick={linkedin} className="linkedinbutton"><img src={linkdin_icon} alt="" className="linkedin_icon"/>Linkedin</button>
          <h4 className="about">About</h4>
          <p className="abtcontent"> I am a recent computer science graduate, looking to learn new skill and build cool projects. I also want to make money so please employ me.</p>
          <h4 className="interests">Interests</h4>
          <p className="intcontent">Full stack development. UX/UI design. Good food. Nature. Art. Color. Pretty Songs. Pretty Things.</p>
          <br />
        </section>
        <div className="footbar">
        </div>
      </section>
    </div>
  );
}

export default App;
