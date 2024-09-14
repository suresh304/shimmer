import React, { useContext, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthProvider';


function SignIn() {
  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    const cacheUser = localStorage.getItem("user")

    if (cacheUser) {
      setUser(JSON.parse(cacheUser));
      return;
    }
  }, [])

  const login = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // ...
      });

  }

  
  const signout = () => {
    console.log("going to signout")
    signOut(auth).then(() => {
      setUser(null)
      localStorage.setItem("user", "")
      console.log("hello user sign out")
    }).catch((error) => {
      // An error happened.
      console.log(error, ">>>>>>>>>>>>>>")
    });

  }



  return (
    <div>
      {!user ? <button onClick={login} className='bg-green-500 text-white'>Login</button> : <button onClick={signout} className='bg-red-600 text-white'>Logout</button>}
    </div>
  )
}

export default SignIn
