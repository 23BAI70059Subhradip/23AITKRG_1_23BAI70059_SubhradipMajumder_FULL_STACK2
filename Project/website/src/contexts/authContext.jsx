import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const nav = useNavigate(); 

  const HandleLogin = async (username, password) => {
    if (username === "admin" && password === "12345678") {
      localStorage.setItem("isAuth", "true");
      setIsAuthenticated(true);
      nav("/");
    }
  };


  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuth");

    if (storedAuth === "true") {
      setIsAuthenticated(true);
      
    }
    console.log("stored", storedAuth); 

    setAuthLoading(false);
  }, []);


  const HandleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false);
    nav("/login");
  };



  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        HandleLogin,
        HandleLogout,
        authLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
