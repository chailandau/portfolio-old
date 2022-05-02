const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="wrapper">
                <div className="copyright">Copyright © Chai Landau {currentYear}</div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>Work</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
