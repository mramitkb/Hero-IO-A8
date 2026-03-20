import React from "react";
import downloadLogo from "../../assets/downloads.png";
import ratingLogo from "../../assets/ratings.png";

const InstalledApps = ({ iApps, handleUninstallApps }) => {
  const { id, image, title, downloads, size, ratingAvg } = iApps;

  const handleUninstall = (id) => {
    handleUninstallApps(id);
  }
  return (
    <div className="flex items-center justify-between bg-white mb-4 p-3 rounded-lg">
      <div className="flex gap-3">
        <img className="w-20 rounded-lg" src={image} alt="" />
        <div className="space-y-1">
          <h1 className="font-semibold">{title}</h1>
            <div className="flex items-center justify-between gap-1 md:gap-3">
              <div className="flex items-center justify-center gap-1 bg-[#F1F5E8] px-2 py-1 rounded-lg">
                <img className="w-3" src={downloadLogo} alt="" />
                <p className="text-[#00D390]  text-[12px]">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 bg-[#FFF0E1] px-2 py-1 rounded-lg">
                <img className="w-3" src={ratingLogo} alt="" />
                <p className="text-[#FF8811] text-[12px]">{ratingAvg}</p>
              </div>
              <p className=" text-[12px]">{size} GB</p>
            </div>
        </div>
      </div>
      <button onClick={() => handleUninstall(id)} className="btn btn-sm md:btn-md text-white bg-[#00D390] border-none">
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;
