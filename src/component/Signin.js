import React, { useContext } from 'react'
import GoogleButton from 'react-google-button'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthProvider';


function SignIn() {
const {user,setUser} = useContext(AuthContext)

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
    
        signOut(auth).then(() => {
          console.log("hello user sign out")
        }).catch((error) => {
          // An error happened.
        });
                
        }
    


  return (
    <div>
        {/* {!user?<button onClick={login}/>:<GoogleButton label='Logout' onClick={signout}/>} */}
        {!user?<button onClick={login}>Login</button>:<button onClick={signout}>Logout</button>}
    </div>
  )
}

export default SignIn
