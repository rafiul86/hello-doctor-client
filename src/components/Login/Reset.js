import React, { useState } from 'react';
import firebaseConfig from './firebase.config'
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router';



const Reset = () => {
  const history = useHistory()
    const [state,setState] = useState('')
    const handleReset = ()=>{
     const emailAddress = document.getElementById('mail').value 
     console.log(emailAddress)
     var auth = firebase.auth();
auth.sendPasswordResetEmail(emailAddress).then(function() {
  alert("Verification mail sent")
  history.push('/')
}).catch(function(error) {
  console.log(error)
  setState(error)
});
    }
    return (
        <div>
            <h1>Please input your email here</h1>
                <input type="text" name="email" id="mail"/>
                <button onClick={handleReset}>Submit</button>
                <p>{state.message}</p>
        </div>
    );
};

export default Reset;