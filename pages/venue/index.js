import React from "react";

const main = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 grid place-content-center ">
      <div style={{ backgroundColor: "blue" }}>Test</div>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => alert("Ini Alert")}
      >
        Click Here
      </button>
    </div>
  );
};

export default main;
