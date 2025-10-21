import React from "react";
import { Outlet } from "react-router";
import Header from "../assets/components/Header";
import LatestNews from "../assets/components/LatestNews";
import Navbar from "../assets/components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="left-navbar"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right-navbar"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
