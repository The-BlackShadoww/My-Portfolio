// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import E_ComProject from "../Pages/E_ComProject";
// import Home from "../Pages/Home";

// const RoutesComponent = () => {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" Component={Home}></Route>
//                 <Route path="/e-commerce" Component={E_ComProject}></Route>
//             </Routes>
//         </div>
//     );
// };

// export default RoutesComponent;

//! ----- Nested Routing using Layout Router and Outlet, Relative route, index route ------
import React from "react";
import { Route, Routes } from "react-router-dom";
import E_ComProject from "../Pages/E_ComProject";
import Home from "../Pages/Home";
import Layout from "../layout/Layout";

const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index Component={Home}></Route>
                    <Route
                        path="e-commerce-app"
                        Component={E_ComProject}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default RoutesComponent;

//! ----------- Loaders and ----------
// import React from "react";
// import {
//     Route,
//     createBrowserRouter,
//     RouterProvider,
//     createRoutesFromElements,
// } from "react-router-dom";
// import Home from "../Pages/Home";

// const router = createBrowserRouter(
//     createRoutesFromElements(<Route path="/" element={<Home />} />)
// );

// const RoutesComponent = () => {
//     return <RouterProvider router={router}/>;
// };

// export default RoutesComponent;

