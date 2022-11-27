import React from "react";
import {
  DiJsBadge,
  DiHtml5,
  DiDatabase,
  DiGo,
  DiUnitySmall,
} from "react-icons/di";

const main = () => {
  return (
    <div className="p-24 w-full">
      <div className="text-[#F3EFE0]">
        <h2>Skills</h2>
      </div>
      <div className="text-[#F0FF42] ">
        <DiJsBadge className="w-32 h-32 border-4 border-blue-800"></DiJsBadge>
      </div>
      <div className="text-[#F0FF42] ">
        <DiHtml5 className="w-32 h-32 border-4 border-blue-800"></DiHtml5>
      </div>
      <div className="text-[#F0FF42] ">
        <DiDatabase className="w-32 h-32 border-4 border-blue-800"></DiDatabase>
      </div>
      <div className="text-[#F0FF42] ">
        <DiGo className="w-32 h-32 border-4 border-blue-800"></DiGo>
      </div>
      <div className="text-[#F0FF42] ">
        <DiUnitySmall className="w-32 h-32 border-4 border-blue-800"></DiUnitySmall>
      </div>
    </div>
  );
};

export default main;
