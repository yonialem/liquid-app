import { createContext, useState, ReactNode } from "react";
import {useRouter} from "expo-router";

type AuthContextType = {
 isAuthenticated: boolean;
 login: () => void;
 logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const router = useRouter();

 const login = () => {setIsAuthenticated(true); router.replace("/(main)");}
 const logout = () => {setIsAuthenticated(false); router.replace("/(auth)");}

 return (
   <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
    {children}
   </AuthContext.Provider>
 );
};
