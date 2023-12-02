import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
    return (
        <div className="mt-10">
            <h1 className="font-bold text-2xl">Projects</h1>
            <p>These are some project I built at some point in my life.</p>
            <div className="mt-5">
                <span className="underline">
                    <Link to={"/e-commerce"}>E-Commerce app </Link>
                </span>
                <br />
            </div>
        </div>
    );
};

export default ProjectList;
