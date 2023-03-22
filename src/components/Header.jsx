import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Avatar } from "@mui/material";

import { myState } from "../context/Context";
import { auth } from "../Firebase";
const Header = () => {
  const {
    state: { user },
    dispatch,
  } = myState();
  const logoutHandle = () => {
    dispatch({
      type: "LOGOUT",
    });
    auth.signOut();
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 w-full bg-white fixed top-0 z-40 shadow-lg text-gray-600">
        <div className="flex items-center">
          <img className="w-32" src={Logo} alt="" />
          <div className="bg-gray-200 rounded-xl p-1">
            <SearchIcon />
            <input
              className="bg-gray-200 outline-none"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="flex gap-16">
          <HomeIcon className="text-blue-600 underline " fontSize="large" />
          <OndemandVideoIcon fontSize="large" />
          <GroupIcon fontSize="large" />
          <SportsEsportsIcon fontSize="large" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Avatar src={user.photoUrl} />
            <h5 className="capitalize">{user.displayName}</h5>
          </div>
          <AppsIcon fontSize="large" />
          <QuestionAnswerIcon fontSize="large" />
          <NotificationsIcon fontSize="large" />
          <button onClick={logoutHandle}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Header;
