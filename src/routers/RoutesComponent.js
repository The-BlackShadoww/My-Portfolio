import React from "react";
import { Route, Routes } from "react-router-dom";
import E_ComProject from "../Pages/E_ComProject";
import Home from "../Pages/Home";

const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/e-commerce" Component={E_ComProject}></Route>
            </Routes>
        </div>
    );
};

export default RoutesComponent;
