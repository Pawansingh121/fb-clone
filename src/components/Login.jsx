import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import fb from "../assets/fb.webp";

import { myState } from "../context/Context";
import { auth } from "../Firebase";

const Login = () => {
  const {
    state: { user },
    dispatch,
  } = myState();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch({
          type: "LOGIN",
          user: {
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          },
        });
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch({
            type: "LOGIN",
            user: {
              email: userAuth.user.email,
              displayName: name,
              photoUrl: profilePic,
            },
          });
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-200 grid grid-cols-2 justify-items-center pt-[150px]">
        <div>
          <img className="w-[200px] h-[50px]" src={fb} alt="" />
          <h2 className="w-[500px] h-[84px] text-[28px] mt-6">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>

        <div className=" flex flex-col items-center  w-[400px] h-[400px] bg-white rounded-xl shadow-lg">
          <input
            className="w-[360px] h-[40px] capitalize border border-gray-300 text-[16px] rounded-lg   outline-blue-500 mt-16"
            placeholder="Full name (required if registering)"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-[360px] h-[40px] border border-gray-300 text-[16px] rounded-lg   outline-blue-500 mt-8"
            placeholder="Profile pic URL (Optional) "
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            className="w-[360px] h-[40px] border border-gray-300 text-[16px] rounded-lg   outline-blue-500 mt-8"
            placeholder="Email "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-[360px] h-[40px] border text-[16px] outline-blue-500  rounded-lg border-gray-300  mt-8"
            type="password"
            placeholder="Password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={loginToApp}
            className="w-[360px] h-[40px] bg-blue-500 text-white mt-8 font-semibold text-[18px] rounded-lg mb-4 "
          >
            Sign In
          </button>
          <p className="mb-6">
            Not a member?{" "}
            <span onClick={register} className=" cursor-pointer text-blue-700">
              {" "}
              Register Now
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
