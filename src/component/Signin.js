import React, { useContext, useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthProvider';
import { json } from 'react-router-dom';


function SignIn() {
const {user,setUser} = useContext(AuthContext)

useEffect(()=>{
  const cacheUser = localStorage.getItem("user")

if(cacheUser){
  setUser(JSON.parse(cacheUser));
  return;
}
},[])

    const login=()=>{
const provider= new GoogleAuthProvider()
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
console.log(credential,"+++++++")
	  const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setUser(user)
    localStorage.setItem("user",JSON.stringify(user))
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }
    const signout=()=>{
    console.log("going to signout")
        signOut(auth).then(() => {
          setUser(null)
localStorage.setItem("user","")
          console.log("hello user sign out")
        }).catch((error) => {
          // An error happened.
          console.log(error,">>>>>>>>>>>>>>")
        });
                
        }
    


  return (
    <div>
        {!user?<button onClick={login} className='bg-green-500 text-white'>Login</button>:<button onClick={signout} className='bg-red-600 text-white'>Logout</button>}
    </div>
  )
}

export default SignIn
