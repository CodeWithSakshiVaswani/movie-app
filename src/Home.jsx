import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

const Home = () => {
    return (
        <>
            <Sidebar />
            <div
                className="flex-1 text-center overflow-y-auto [scrollbar-color:rgb(62,65,68)_rgb(22,24,28)] 
             scroll-p-12"
            >
                <MainContent />
            </div>
        </>
    );
};

export default Home;
