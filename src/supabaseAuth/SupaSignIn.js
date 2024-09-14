// import React, { useContext, useEffect } from 'react'
// import { supabase } from './client';
// import { AuthContext } from '../context/AuthProvider';

// const SupaSignIn =  () => {
//     const { user, setUser } = useContext(AuthContext)
//     console.log("this is user supasignin", user)
//     useEffect(() => {
//         const checkUser = async () => {
//         const session = await supabase.auth.getSession()
//         // const { error: signOutError } = await supabase.auth.signOut(); 
//         console.log("the session is>>>>>",session)
//           if (session?.data?.session) {
//             console.log("session true")
//             setUser({
//               user: session?.data?.session?.user,
//               checked: true,
//             });
//           } else {
//             setUser(null);
//           }
//         };
//         checkUser();
//       }, []);

//     const login = async () => {
//        supabase.auth.signInWithOAuth({
//             provider: 'google',
//         })
//     }

//     const signOut = async () => {
//         const { error: signOutError } = await supabase.auth.signOut();

//     }
//     return (
//         <div>
//             {!user ? <button onClick={login} className='bg-green-500 text-white'>Login</button> : <button onClick={signOut} className='bg-red-600 text-white'>Logout</button>}
//         </div>
//     )
// }

// export default SupaSignIn



import React, { useContext } from 'react';
import { supabase } from './client';
import { AuthContext } from '../context/AuthProvider';
import { SIGN_OUT, logEvent } from '../libs/Logs';

const SupaSignIn = () => {
  const { user, setUser } = useContext(AuthContext);
  
  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) console.error('Error signing in:', error.message);
    } catch (error) {
      console.log("error in signing out,supaSignIn",error)
    }
    
  };

  const signOut = async () => {
    console.log("signnnnnnnn00000000000utttttttt",user)
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
    else {
      logEvent(user?.user?.id,SIGN_OUT)
      setUser({ user: null, checked: true })
    };
  };

  return (
    <div>
      {!user?.user ? (
        <button onClick={login} className='bg-green-500 text-white'>Login</button>
      ) : (
        <button onClick={signOut} className='bg-red-600 text-white'>Logout</button>
      )}
    </div>
  );
};

export default SupaSignIn;
