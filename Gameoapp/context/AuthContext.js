import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { signinUrl } from "../utils/config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState(null);

  const login = ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    axios
      .post(signinUrl, {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.idToken;
        const userInfo = res.data.displayName;
        AsyncStorage.setItem("userInfo", userInfo);
        AsyncStorage.setItem("token", token);
        setUserToken(token);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        if (error.response) {
          console.log("Response data:", error.response.data);
          setError(error.response.data.error.message); // Set error message
        } else {
          setError("An error occurred while logging in.");
        }
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);

    // Use the correct key "token" to remove the token from AsyncStorage
    AsyncStorage.removeItem("token")
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error removing token:", error);
        setIsLoading(false);
      });
  };

  const isLogIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("token");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`Logged in error ${e}`);
    }
  };
  useEffect(() => {
    isLogIn;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userToken, // Make userToken available in context
        isLoading, // Make isLoading available in context
        login, // Make login function available in context
        logout, // Make logout function available in context
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
