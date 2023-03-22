import { Avatar } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Story = () => {
  return (
    <div className="flex mt-[30px]  h-auto ">
      <div className=" bg-gray-600 relative rounded-[10px] w-[120px] h-[200px]  shadow-xl mx-[5px]  ">
        <AddIcon className="text-white cursor-pointer absolute top-[90px] left-[40px] " />
      </div>
      <div className=" bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsp7DtCfj_FWNv-cIrKfIHkeeV9wi94vxfMA&usqp=CAU)] relative bg-center bg-cover w-[120px] h-[200px] bg-no-repeat shadow-xl mx-[5px] transition-all rounded-[10px] cursor-pointer hover:scale-[1.07] ">
        <Avatar
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          className="m-[10px] border border-blue-400"
        />
        <h4 className="absolute bottom-[20px] left-[20px] text-[#fff] text-[16px] font-semibold">
          Pawan Airy
        </h4>
      </div>
      <div className=" bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkk3bTsCGUexAWuCrRaJedXosbyO2jCtevA&usqp=CAU)] relative bg-center bg-cover w-[120px] h-[200px] bg-no-repeat shadow-xl mx-[5px] transition-all rounded-[10px] cursor-pointer hover:scale-[1.07] ">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
          className="m-[10px] border border-blue-400"
        />
        <h4 className="absolute bottom-[20px] left-[20px] text-[#fff] text-[16px] font-semibold">
          Nick
        </h4>
      </div>
      <div className=" bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V5MvwfgDo_iDRUGqbYMjz3nwmvBaXivT6A&usqp=CAU)] relative bg-center bg-cover w-[120px] h-[200px] bg-no-repeat shadow-xl mx-[5px] transition-all rounded-[10px] cursor-pointer hover:scale-[1.07] ">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU"
          className="m-[10px] border border-blue-400"
        />
        <h4 className="absolute bottom-[20px] left-[20px] text-[#fff] text-[16px] font-semibold">
          Kritika tyagi
        </h4>
      </div>
      <div className=" bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU)] relative bg-center bg-cover w-[120px] h-[200px] bg-no-repeat shadow-xl mx-[5px] transition-all rounded-[10px] cursor-pointer hover:scale-[1.07] ">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU"
          className=" m-[10px] border border-blue-400"
        />
        <h4 className="absolute bottom-[20px] left-[20px] text-[#fff] text-[16px] font-semibold">
          Jenny
        </h4>
      </div>
    </div>
  );
};

export default Story;
