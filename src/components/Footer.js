import React from "react";

const Footer = () => {
    return (
        <div className="flex">
            <a
                href="https://github.com/The-BlackShadoww"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a
                href="https://www.facebook.com/Rahman.Jebal21"
                className="mx-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Facebook
            </a>
            <a
                href="https://twitter.com/Rahman_jebal111"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                X
            </a>
            <a
                href="https://www.linkedin.com/in/ashikur-rahman-5b55a4276/"
                className="mx-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Linkedin
            </a>
            <a href="mailto:ashikur.jebu111@gmail.com" className="hover:underline">
                E-mail
            </a>
        </div>
    );
};

export default Footer;
