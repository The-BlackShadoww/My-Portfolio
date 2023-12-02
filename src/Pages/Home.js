import React from "react";
import Layout from "../layout/Layout";
import ProjectList from "../components/ProjectList";
import MyIntro from "../components/MyIntro";

const Home = () => {
    return (
        <Layout title="Home">
            <MyIntro />
            <ProjectList />
        </Layout>
    );
};

export default Home;
