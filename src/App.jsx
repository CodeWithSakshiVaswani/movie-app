import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
