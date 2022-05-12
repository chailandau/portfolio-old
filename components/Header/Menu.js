import { useState, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import Nav from "../Nav";
import Logo from "./Logo";

const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

const scrollTop = () => {
    // include this so it works with ssr
    if (typeof window !== "undefined") {
        scroll.scrollToTop({ duration: 750 });
    }
};

const Menu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    useEffect(() => {
        const mobileBreakpoint = window.matchMedia("(max-width: 1199px)");

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

        window.addEventListener("resize", () => {
            setTimeout(() => {
                // remove nav open and reset state on resize
                if (hamburgerOpen && !mobileBreakpoint.matches) {
                    closeMenu();
                }
            }, 200);
        });
    }, [hamburgerOpen]);

    return (
        <>
            <FocusTrap active={hamburgerOpen}>
                <div className="menu">
                    <button className="logo-btn" onClick={scrollTop}>
                        <Logo />
                    </button>
                    <button className="menu-toggle" onClick={toggleHamburger}>
                        <span className="top line"></span>
                        <span className="middle line"></span>
                        <span className="bottom line"></span>
                    </button>
                    <Nav />
                </div>
            </FocusTrap>
        </>
    );
};

export default Menu;
