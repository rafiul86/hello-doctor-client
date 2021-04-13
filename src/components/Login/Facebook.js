import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import './Form.css';
import { useHistory, useLocation } from 'react-router';
import { GlobalContext } from '../../App';




if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
 }

const Facebook = () => {
    const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
    const history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [user,setUser] = useState({
        isSignedIn : false,
        name : '',
        email : '',
        photo : ''
    })
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookIn = () =>{
        firebase.auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    const {displayName,email,photoURL} = result.user;
    const newUser = {...user}
    newUser.isSignedIn = true
    newUser.name = displayName;
    newUser.email = email;
    newUser.photo = photoURL
    setLoggedInUser(newUser)
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token' ,idToken)
      }).catch(function(error) {
        console.log(error)
      });
    history.replace(from)
  }).catch((error) => {
    
  });
    }
    const handleFacebookOut = () => {
        firebase.auth().signOut().then(() => {
            const newUser = {...user}
            newUser.isSignedIn = false
            newUser.name = ''
            newUser.email = ''
            newUser.photo = ''
            setUser(newUser)
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>{
            user.isSignedIn ? <button className="btn-f"  onClick={handleFacebookOut}>Logout</button> : <button  className="btn-f" onClick={handleFacebookIn}>Login with Facebook</button>
            }
           {
               user.isSignedIn &&  <div><h3>{user.name}</h3>
                <p>{user.email}</p>
                <img src={user.photo} alt=""/>
               </div>
           } 
        </div>
    );
};

export default Facebook;