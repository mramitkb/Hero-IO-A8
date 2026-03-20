import React, { useState } from "react";
import { getAppsFromDB, removeAppsFromDB } from "../../Database/localStorage";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import InstalledApps from "./InstalledApps";
import { Bounce, toast } from "react-toastify";
import { useLoaderData } from "react-router";


const Installation = () => {
  const apps = useLoaderData();
  const storedApps = getAppsFromDB();
  const initialApps = apps.filter((app) => storedApps.includes(app.id))
  const [installedApps, setInstalledApps] = useState(initialApps);
  const [sort, setSort] = useState("");

  const handleUninstallApps = (id) => {
    removeAppsFromDB(id);
    const updateApps = installedApps.filter((uApps) => uApps.id !== id);
    toast.error("App uninstall Completed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setInstalledApps(updateApps);
  };

  const handleSort = (sortType) => {
    setSort(sortType);
    if(sortType === "High-Low") {
        const sortHigh = [...installedApps].sort((a,b)=> b.downloads - a.downloads);
        setInstalledApps(sortHigh);
    }
    else if(sortType === "Low-High") {
        const sortLow = [...installedApps].sort((a,b) => a.downloads - b.downloads);
        setInstalledApps(sortLow);
    }
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto py-12">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl">Your Installed Apps</h1>
          <p className="text-sm text-[#627382] mt-3">
            Explore All Trending Apps on the Market developed by us.{" "}
            <br className="md:hidden" /> We code for Millions!
          </p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <h1 className="font-semibold">({installedApps.length}) Apps Found</h1>
          {/* Sorting */}
          <div>
            <details className="dropdown">
              <summary className="btn m-1">
                {/* Sort By: <FaArrowDown /> <FaArrowUp /> */}
                {
                    sort ? `Sort by: ${sort}` : (<>Sort by: Downloads <FaArrowDown /> </>)
                }
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={() => handleSort("High-Low")}>High-Low</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Low-High")}>Low-High</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        {/* show apps */}
        <div className="mt-6">
          {installedApps.map((iApps) => (
            <InstalledApps
              iApps={iApps}
              key={iApps.id}
              handleUninstallApps={handleUninstallApps}
            ></InstalledApps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
