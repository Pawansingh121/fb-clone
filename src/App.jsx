import React, { useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Login from "./components/Login";
import { myState } from "./context/Context";
import { auth } from "./Firebase";
const App = () => {
  const {
    state: { user },
    dispatch,
  } = myState();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: "LOGIN",
          user: {
            email: userAuth.email,

            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="bg-gray-200">
          <Header />
          <div className="flex   overflow-x-hidden overflow-y-auto">
            <Sidebar />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
