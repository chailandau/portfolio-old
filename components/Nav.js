import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        href={"#work"}
                        to="work"
                        smooth={true}
                        offset={1}
                        duration={750}
                        hashSpy={true}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#about"}
                        to="about"
                        smooth={true}
                        offset={1}
                        duration={750}
                        hashSpy={true}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href={"#contact"}
                        to="contact"
                        smooth={true}
                        offset={1}
                        duration={750}
                        hashSpy={true}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
