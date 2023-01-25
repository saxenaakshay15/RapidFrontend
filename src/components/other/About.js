import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
      <section className="summary">
        <h2>About Us</h2>
        <p>
          The Movie Junkie is a authoritative source for movie, TV and celebrity
          content, designed to help fans explore the world of movies and shows
          and decide what to watch.
        </p>
        <p>
          Our searchable database includes millions of movies, TV and
          entertainment programs and cast and crew members. The Movie Junkie can
          help you in jogging your memory about a movie, show, or person on the
          tip of your tongue and finding the best movie or show to watch next.
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
