import { createContext, ReactNode, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, Auth, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

interface AuthContextType {
  createUser: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  user: any | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const auth: Auth = getAuth(app);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('user observing');
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  },[]);

  const authInfo: AuthContextType = {
    createUser,
    logIn,
    logOut,
    user,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
