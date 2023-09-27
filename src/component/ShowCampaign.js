import React from "react";
import useCampaign from "../hooks/useCampaign";
import Image from "../assets/crowd-fund.jpg";

const ShowCampaign = () => {
  const retrievecampaign = useCampaign();
  console.log(retrievecampaign);
  return (
    <div className="grid gap-5 max-w-[80%] mx-auto mt-8">
      {retrievecampaign.map((item, index) => (
        <div
          key={index}
          className="border-2 border-orange-500 py-5 px-5 hover:bg-orange-500 hover:text-white w-[50%] mx-auto"
        >
          <div className="w-[90%] mx-auto">
            <img src={Image} className="w-full" />
          </div>
          <h1 className="text-3xl font-bold">Title: <span className="text-red-500 text-3xl">{item[0]}</span></h1>
          <p className="text-2xl font-semibold">
            Owner: <span className="text-red-500 text-sm">{item[2]}</span>
          </p>
          <p>Goal: {item[1].toString()} ETH</p>
          <p>Duration Time: {item[3].toString()} seconds</p>
          <p>Is Active: {item[4] ? "Yes" : "No"}</p>
          <p>Balance: {item[5].toString()} ETH</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCampaign;