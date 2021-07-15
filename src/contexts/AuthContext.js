import React, { useState, useContext, useEffect } from "react";
import {
  auth,
  GoogleAuthProvider,
  FaceBookProver,
  GithubAuthProvider,
} from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  const loginWithSocialMedia = async (type) => {
    console.log("type---->", type);
    try {
      let providerObj = null;
      switch (type) {
        case "google":
          providerObj = GoogleAuthProvider;

          break;
        case "facebook":
          providerObj = FaceBookProver;
          break;
        case "github":
          providerObj = GithubAuthProvider;
          break;
        default:
          providerObj = GoogleAuthProvider;
      }

      const response = await auth.signInWithPopup(providerObj);

      if (!response) {
        console.log("response--->", response);
        return;
      }
    } catch (error) {
      console.log("error-->", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
    resetPassword,
    updateEmail,
    updatePassword,
    loginWithSocialMedia,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
