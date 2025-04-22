import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Home from "../pages/Home";
import Works from "../pages/Works";

function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header>
        <Navbar />
      </header>
      <main className="h-full w-full">
      <Outlet/>
      </main>
      
      <footer className="h-full w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
