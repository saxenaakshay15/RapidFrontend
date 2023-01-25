import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="auth">
      <form
        action="mailto:saxenaakshay1773@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label>Enter your name:</label>
        <input
          type="text"
          name="Name"
          placeholder=""
          style={{ background: "#BBE1FA", color: "black" }}
        />
        <label>Enter your email:</label>
        <input
          type="text"
          name="Name"
          placeholder=""
          style={{ background: "#BBE1FA", color: "black" }}
        />
        <label>Type your Message:</label>
        <textarea
          name="Message"
          rows="8"
          cols="80"
          placeholder=""
          style={{ background: "#BBE1FA", color: "black" }}
        ></textarea>
        <button class="abcdef" type="submit">
          Submit
        </button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button class="abcdef">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Contact;
