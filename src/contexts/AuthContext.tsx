import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api/api';

type SignInCredentials = {
  user: string;
  password: string;
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void | string>
  signOut: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const signOut = () => {
  console.log('signOut');
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleSignOut() {
    signOut();
    setIsAuthenticated(false);
    router.push('/').then(() => {
      setIsAuthenticated(false);
    })
  }

  useEffect(() => {
    
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      api.defaults.headers['Authorization'] = token;
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    } 
    setLoading(true);
  }, []);

  async function signIn({ user, password }: SignInCredentials) {
    return await api
      .post('/accounts/login/', {
        user,
        password
      })
      .then((response) => {
        const { jwt, refreshToken } = response.data;
        setCookie(undefined, 'nextauth.token', jwt, {
          maxAge: 60 * 60 * 1, // 1 hour
          path: '/',
        });
        
        api.defaults.headers['Authorization'] = jwt;
        router.push('/dashboard').then(() => {
          setIsAuthenticated(true);
        })
      })
      .catch((error) => {
        console.log(error);
        alert('Usuario o contraseña incorrectos');
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut: handleSignOut, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);