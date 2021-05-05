import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

const Login = () => {
    
    const [loggedIn, setLoggedIn] = useContext(UserContext);


    const history = useHistory();
    const location= useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
   
const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    const {displayName, email} = result.user;
    const signInUser = {name: displayName, email};
    setLoggedIn(signInUser);
    history.replace(from);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);

  });
    }
    return (
        <div className="text-center">
                <h2>Login</h2>
                <button className="btn btn-primary" onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;