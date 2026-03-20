import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        {navigation.state === "loading" ? (
          <Loading></Loading>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
