import React from "react";
import loadingImg from "../assets/logo.png";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-40 gap-2">
        <img className="animate-spin [animation-duration:0.8s] w-10" src={loadingImg} alt="" />
        <h1 className="font-bold text-2xl">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
