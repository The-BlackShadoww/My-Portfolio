// import React from "react";
// import Layout from "../layout/Layout";
// import ProjectList from "../components/ProjectList";
// import MyIntro from "../components/MyIntro";
// import { Outlet } from "react-router-dom";

// const Home = () => {
//     return (
//         <Layout title="Home">
//             <MyIntro />
//             <ProjectList />
//         </Layout>
//     );
// };

// export default Home;

//! ----- Nested Routing using Layout Router and Outlet------
import React, { useEffect } from "react";
import ProjectList from "../components/ProjectList";
import MyIntro from "../components/MyIntro";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    });
    return (
        <div>
            <MyIntro />
            <ProjectList />
        </div>
    );
};

export default Home;
