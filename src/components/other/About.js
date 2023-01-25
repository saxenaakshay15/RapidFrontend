import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
      <section className="summary">
        <h2>About Us</h2>
        <p>
          RapidChat is a free online chat website that allows users to socialize with 
          others by registering on RapidChat. The service pairs users in same room into
          chat sessions where they chat.
        </p>
        <p>
          RapidChat is created to help people share broader and more diverse 
          perspectives with others from around the world. The users have to login
          or sign up to join any room they want. It pairs users in same 
          room into chat sessions where they chat.
        </p>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button className="asdfasdf" style={{fontSize:'1.2rem'}}>
            Back
          </button>
        </Link>
      </section>
    );
}

export default About;
