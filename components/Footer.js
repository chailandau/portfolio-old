import Nav from "./Nav";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="wrapper">
                <div className="copyright">Copyright © Chai Landau {currentYear}</div>
                <div className="menu">
                    <Nav />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
