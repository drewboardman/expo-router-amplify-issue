import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth'

interface AuthContextValue {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextValue>({
  authToken: null,
  setAuthToken: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const session = await fetchAuthSession();
      setAuthToken(session.tokens?.idToken?.toString()!!);
    };

    fetchToken();
  }, []); // Empty dependency array ensures fetching only once

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
