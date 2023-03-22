import { Avatar, Icon } from "@mui/material";
import React from "react";

const SidebarOptions = ({ title, src, Icon }) => {
  return (
    <div
      className="flex items-center gap-4 pt-2 px-5 mb-3 hover:bg-gray-300
    "
    >
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p className="font-bold text-[14px] capitalize ">{title}</p>
    </div>
  );
};

export default SidebarOptions;
