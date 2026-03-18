import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

export default function Apps() {
  const apps = useLoaderData();
  return (
    <div className="bg-[#F5F5F5] py-12">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-3xl">Our All Applications</h1>
          <p className="text-sm text-[#627382] mt-3">
            Explore All Apps on the Market developed by us. <br className="md:hidden"/> We code for
            Millions!
          </p>
        </div>
        <div className="flex items-center justify-between mt-10">
          <h1 className="font-semibold">({apps.length}) Apps Found</h1>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search Apps" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {
                apps.map(app => <AppCard app={app} key={app.id}></AppCard>)
            }
        </div>
      </div>
    </div>
  );
}
