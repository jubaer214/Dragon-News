import React from 'react';
import { Outlet } from 'react-router';
import Header from '../assets/components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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