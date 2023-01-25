import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD26D4VlLudDaG9foiK5bbEEbDqLKEbBjM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: Always succeeds!

      navigate("/");
    });
  };

  return (
    <section className={classes.auth}>
      <h1>Your Profile</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            minLength="7"
            ref={newPasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Change Password</button>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
