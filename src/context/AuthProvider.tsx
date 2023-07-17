import { createContext, ReactNode, useState } from 'react';
import { createUserWithEmailAndPassword, Auth, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

interface AuthContextType {
  createUser: (email: string, password: string) => Promise<void>;
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

  const authInfo: AuthContextType = {
    createUser,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
