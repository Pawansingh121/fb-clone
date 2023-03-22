import { Avatar } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
const Post = ({ photoUrl, image, username, timestamp, message }) => {
  return (
    <>
      <div className="bg-[#fff] rounded-[10px] mt-[20px] p-[10px] mb-3 ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Avatar src={photoUrl} />
            <div className="ml-[10px] ">
              <h4 className=" capitalize font-semibold text-[20px]">
                {username}
              </h4>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="">
          <p className="mt-[20px] capitalize">{message}</p>
          {image && (
            <img
              className="w-[100%] h-[346px] mt-4 object-contain "
              src={image}
              alt=""
            />
          )}
        </div>
        <div className="flex  justify-between  border-t border-gray-200 mt-[10px] pt-[10px]">
          <div className="flex items-center cursor-pointer">
            <ThumbUpIcon /> <p className="ml-[5px]">Like</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <ChatBubbleOutlineIcon /> <p className="ml-[5px]">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <ShareIcon /> <p className="ml-[5px]">Share</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
