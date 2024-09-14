// import { createContext, useState } from "react";

// import React from 'react'
// export const AuthContext = createContext({
// })

// const AuthProvider = ({ children }) => {
//   const [user,setUser] = useState()
//   return (
//     <AuthContext.Provider value={{ user: user, setUser: setUser }}>{children}</AuthContext.Provider>
//   )
// }

// export default AuthProvider




import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseAuth/client';
import { SIGN_IN, SIGN_OUT, logEvent } from '../libs/Logs';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      console.log("this is session", session)
      if (session) {
        setUser({ user: session.user, checked: true });
        logEvent(session?.user?.id, SIGN_IN)
      } else {
        setUser({ user: null, checked: true });

      }
    };
    checkUser();

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session changeeeeeee", session, _event)
      if (session) {
        setUser({ user: session.user, checked: true });
      } else {
        setUser({ user: null, checked: true });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
