import { useState, useEffect } from "react";

const Menu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    useEffect(() => {
        let html = document.querySelector("html");
        let menuLinks = document.querySelectorAll("header nav > ul > li > a");

        // close menu when you click something on mobile
        const closeMenu = () => {
            html.classList.remove("nav-open");
            // need to toggle state as well
            setHamburgerOpen(!hamburgerOpen);
        };

        if (hamburgerOpen) {
            html.classList.add("nav-open");
            // close mobile menu if click on link
            menuLinks.forEach((menuLink) => {
                menuLink.addEventListener("click", closeMenu);
            });
        } else {
            html.classList.remove("nav-open");
        }
    }, [hamburgerOpen]);

    return (
        <div className="menu">
            <button className="menu-toggle" onClick={toggleHamburger}>
                <span className="top line"></span>
                <span className="middle line"></span>
                <span className="bottom line"></span>
            </button>
            <nav>
                <ul>
                    <li>Work</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
