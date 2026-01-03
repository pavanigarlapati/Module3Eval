import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ childre }) => {
  const [user, setUser} = useStste( 
         JSON.parse(localStorage.getItem("user")) || null
    );
  const login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
{children}
  </AuthContext.Provider>
);
};
