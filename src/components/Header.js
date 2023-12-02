import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={"/"}>
                <h1 className="font-bold text-4xl pb-2"> Ashikur Rahman Jebal</h1>
            </Link>
        </div>
    );
};

export default Header;
