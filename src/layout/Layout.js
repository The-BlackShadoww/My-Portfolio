import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ title = "Title", children }) => {
    useEffect(() => {
        document.title = title;
    });
    return (
        <div className="max-w-3xl md:mx-auto mx-2 my-8">
            <div className="bg-white w-full p-10 shadow-lg rounded-md">
                <div className="border-b border-gray-950">
                    <Header />
                </div>
                <div className="py-8">{children}</div>
                <div className="border-t py-3 border-gray-950 w-full">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
