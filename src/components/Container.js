import React from "react";
import Layout from "../layout/Layout";

const Container = () => {
    return (
        <Layout title="Home">
            <h1 className="font-medium text-2xl">Write code that helps you.</h1>
            <p className="mt-2 font-medium">
                Hi, I'm Ashikur Rahman, a seasoned full-stack JavaScript
                developer specializing in the MERN stack. I design and build
                impactful solutions using JavaScript, adeptly addressing diverse
                challenges. With expertise in crafting robust applications, my
                focus lies in delivering efficient, scalable, and innovative web
                solutions that effectively tackle real-world problems.
            </p>
            <div className="mt-10">
                <h1 className="font-bold text-2xl">Projects</h1>
                <p>These are some project I built at some point in my life.</p>
                <div className="mt-5">
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                    <span className="underline">
                        <a href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend">
                            E-Commerce app backend
                        </a>
                    </span>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default Container;
