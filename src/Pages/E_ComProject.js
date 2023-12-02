import React from "react";
import Layout from "../layout/Layout";

const E_ComProject = () => {
    return (
        <Layout title="e-commerce">
            {" "}
            <div>
                <h1 className="text-3xl font-semibold mb-2">E-Commerce App</h1>
                <a
                    href="https://github.com/The-BlackShadoww/E-Commerce-App-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-700 text-sm"
                >
                    Frontend GitHub Link
                </a>
                <br />
                <a
                    href="https://github.com/The-BlackShadoww/E-Commerce-App-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-700 text-sm"
                >
                    Backend GitHub Link
                </a>
            </div>
            <div className="mt-5">
                <p>
                    This app is a cutting-edge, full-stack e-commerce
                    application meticulously crafted using the MERN (MongoDB,
                    Express.js, React, Node.js) stack, designed to provide a
                    seamless online shopping experience. Leveraging robust
                    technologies, intuitive design, and secure payment
                    solutions, it stands at the forefront of modern e-commerce
                    platforms.
                </p>
                <div className="p-8">
                    <span className="font-bold">Key Features</span>
                    <ol className="list-disc">
                        <li className="mt-2">
                            <span className="font-bold">
                                {" "}
                                MERN Stack Foundation:{" "}
                            </span>
                            Powered by MongoDB for flexible database management,
                            Express.js for streamlined server-side operations,
                            React for dynamic user interfaces, and Node.js for
                            scalable backend execution.
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">
                                {" "}
                                Intuitive User Experience:{" "}
                            </span>{" "}
                            A user-centric interface ensures a smooth navigation
                            experience, allowing customers to effortlessly
                            browse through products, add to cart, and proceed to
                            checkout with ease.
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">
                                {" "}
                                SSLCommerz Integration:{" "}
                            </span>
                            The seamless integration of SSLCommerz payment
                            gateway ensures secure and hassle-free transactions
                            for customers, offering various payment options and
                            bolstering trust through encrypted payment
                            processing.
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">
                                {" "}
                                Responsive Design:{" "}
                            </span>
                            Built with a responsive design approach, the
                            application adapts flawlessly across various devices
                            and screen sizes, providing a consistent experience
                            to users on desktops, tablets, and mobile devices.
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">
                                Robust Administration Panel:
                            </span>
                            Robust Administration Panel: A comprehensive admin
                            panel empowers administrators with tools for
                            managing products, inventory, orders, and customer
                            data efficiently.
                        </li>
                        <li className="mt-2">
                            <span className="font-bold">
                                {" "}
                                Scalable Architecture:{" "}
                            </span>
                            The scalable architecture of the app enables
                            effortless handling of increased traffic and
                            business growth, ensuring optimal performance even
                            during peak periods.
                        </li>
                    </ol>
                </div>
            </div>
        </Layout>
    );
};

export default E_ComProject;
