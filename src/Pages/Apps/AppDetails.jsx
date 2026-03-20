import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadLogo from "../../assets/downloads.png";
import ratingsLogo from "../../assets/ratings.png";
import reviewLogo from "../../assets/review.png";
import AppChart from "./AppChart";
import { addAppsToDB, getAppsFromDB } from "../../Database/localStorage";
import Swal from "sweetalert2";

const AppDetails = () => {
    const [installedApps, setInstalledApps] = useState(() => getAppsFromDB());
    const { id } = useParams();
    const apps = useLoaderData();
    
    const singleApp = apps.find((app) => app.id === Number(id));
    
    const isInstalled = installedApps.includes(singleApp.id);

    const {image, title, companyName, description, downloads, ratingAvg, ratings, reviews, size} = singleApp;
    

  const handleInstallBtn = (id) => {
      addAppsToDB(id);

      const storedApps = getAppsFromDB();
        setInstalledApps(storedApps);

        Swal.fire({
  title: `<p><span style="color:#7039E6;">${title}</span> installed successfully!</p>`,
  icon: "success",
  draggable: true
});
      
  };
  return (
    <div className="md:min-h-[calc(100vh-525px)] bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-4/12">
            <img className="rounded-xl" src={image} alt="" />
          </div>
          <div className="md:w-8/12">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="text-[#824BEB] font-semibold">
                {companyName}
              </span>
            </p>
            <hr className="my-3 border-gray-300" />
            <div className="flex items-center gap-20">
              <div className="space-y-1">
                <img className="w-8" src={downloadLogo} alt="" />
                <p className="text-[#314558]">Downloads</p>
                <p className="font-extrabold text-3xl">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </p>
              </div>
              <div className="space-y-1">
                <img className="w-8" src={ratingsLogo} alt="" />
                <p className="text-[#314558]">Average Ratings</p>
                <p className="font-extrabold text-3xl">{ratingAvg}</p>
              </div>
              <div className="space-y-1">
                <img className="w-8" src={reviewLogo} alt="" />
                <p className="text-[#314558]">Total Reviews</p>
                <p className="font-extrabold text-3xl">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(reviews)}
                </p>
              </div>
            </div>
            <button
              onClick={()=> handleInstallBtn(singleApp.id)}
              disabled={isInstalled}
              className={`btn mt-5 bg-[#00D390] text-white border-none hover:text-[#7841E9] ${isInstalled ? "bg-gray-400 text-black" : ""}`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} GB)`}
            </button>
          </div>
        </div>
        <hr className="my-5 border-gray-300" />
        <div>
          <h1 className="font-bold text-lg">Ratings</h1>
          <div>
            <AppChart ratings={ratings}></AppChart>
          </div>
        </div>
        <hr className="my-5 border-gray-300" />
        <div className="space-y-3">
          <h1 className="font-semibold">
            Description: <span className="text-[#713BE7]">{title}</span>
          </h1>
          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
