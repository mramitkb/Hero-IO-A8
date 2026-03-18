import React from "react";
import downloadLogo from "../../assets/downloads.png";
import ratingLogo from "../../assets/ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/appDetails/${id}`} className="cursor-pointer transition-transform duration-700 hover:scale-105">
      <div className="bg-white p-5 rounded-lg shadow-lg space-y-3">
        <div>
          <img className="rounded-lg object-cover" src={image} alt="" />
        </div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1 bg-[#F1F5E8] p-2 rounded-lg">
            <img className="w-3" src={downloadLogo} alt="" />
            <p className="text-[#00D390] text-sm">
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(downloads)}
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 bg-[#FFF0E1] p-2 rounded-lg">
            <img className="w-3" src={ratingLogo} alt="" />
            <p className="text-[#FF8811] text-sm">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
