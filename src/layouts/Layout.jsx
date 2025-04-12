import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header>
        <Navbar />
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer className="h-2/3">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
