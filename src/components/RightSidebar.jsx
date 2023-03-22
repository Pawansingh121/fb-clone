import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
const RightSidebar = () => {
  return (
    <div className="  fixed  right-[130px] top-[100px]  ">
      <div className="flex justify-between items-center mt-[20px] mb-[20px] ">
        <div>
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon />
      </div>
      <div>
        <div className="flex items-center mb-[20px]">
          <Avatar src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <h4 className="ml-[10px] text-[14px] ">Camel coder</h4>
        </div>
        <div className="flex items-center mb-[20px] ml-[10px]">
          <NotificationsNoneIcon className="text-[16px] text-gray-500 mr-[10px]" />
          <p className="text-[12px] text-gray-500 ">Notifications</p>
        </div>
        <div className="flex items-center mb-[20px] ml-[10px]">
          <VolumeUpIcon className=" text-[16px] text-gray-500 mr-[10px]" />
          <p className="text-[12px] text-gray-500 "> Create Promotions </p>
        </div>
      </div>
      <div>
        <h1>Your friends</h1>
        <div className="mt-4">
          <div className="flex items-center mb-[20px]">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
            <h4 className="ml-[10px] text-[14px] ">Nick </h4>
          </div>
          <div className="flex items-center mb-[20px]">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU" />
            <h4 className="ml-[10px] text-[14px] "> Kritika tyagi</h4>
          </div>
          <div className="flex items-center mb-[20px]">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU" />
            <h4 className="ml-[10px] text-[14px] ">Jenny </h4>
          </div>
          <div className="flex items-center mb-[20px]">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUrNEG4HZBluFF4ucD8CYMV5y0HR5yvKhFw&usqp=CAU" />
            <h4 className="ml-[10px] text-[14px] ">Rahul</h4>
          </div>
          <div className="flex items-center mb-[20px]">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiWNZ2UfH64J_rj_FqKhvwSqjULdmGokqrDnmcxKqhYPhFL8MZJghNH8tQYnbwBQhrag&usqp=CAU" />
            <h4 className="ml-[10px] text-[14px] ">Deepak</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
