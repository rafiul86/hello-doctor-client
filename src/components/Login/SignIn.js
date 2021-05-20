import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import "./Form.css";
import { GlobalContext } from "../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const SignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(GlobalContext);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const handleBlurForm = (e) => {
    let validAuth = true;
    if (e.target.name === "email") {
      const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
      validAuth = validEmail;
    }
    if (e.target.name === "password") {
      const checkPass = /\d/.test(e.target.value);
      const checkLength = e.target.value.length > 3;
      validAuth = checkPass && checkLength;
    }
    if (validAuth) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  const handleSubmitForm = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUser = { ...user };
          newUser.success = true;
          newUser.error = "";
          setUser(newUser);
          setLoggedInUser(newUser);
          firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
              sessionStorage.setItem("token", idToken);
            })
            .catch(function (error) {
              console.log(error);
            });
          history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
        });
    }
    e.preventDefault();
  };

  return (
    <div>
      <h3>
        Don't have an account ? <Link to="/login">Signup here</Link>{" "}
      </h3>
      <form onSubmit={handleSubmitForm}>
        <input
          className="input"
          type="email"
          name="email"
          onBlur={handleBlurForm}
          placeholder="Email"
          required
        />
        <br />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          onBlur={handleBlurForm}
          placeholder="password"
          required
        />
        <br />
        <input className="submit-b" type="submit" />
        <h3 style={{ color: "red" }}>{user.error}</h3>
        {user.success && (
          <h3 style={{ color: "green" }}>Logged in successfully !!</h3>
        )}
      </form>
      <Link to="/reset">Forgot/Reset password ?</Link>
    </div>
  );
};

export default SignIn;
