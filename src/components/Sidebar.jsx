import React from "react";
import SidebarOptions from "./SidebarOptions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import event from "../assets/event.png";
import friends from "../assets/friend.png";
import groups from "../assets/group.png";
import watch from "../assets/watch.png";
import ava from "../assets/ava.jpg";
import { myState } from "../context/Context";

const Sidebar = () => {
  const {
    state: { user },
    dispatch,
  } = myState();

  return (
    <div className="   fixed top-[120px] left-[30px]">
      <SidebarOptions title={user.displayName} src={user.photoUrl} />
      <SidebarOptions title="Friends" src={friends} />
      <SidebarOptions title="Groups" src={groups} />
      <SidebarOptions title="Watch" src={watch} />
      <SidebarOptions title="Events" src={event} />
      <SidebarOptions title="See More" Icon={ArrowDropDownIcon} />
    </div>
  );
};

export default Sidebar;
