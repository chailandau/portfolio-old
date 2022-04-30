import Logo from "./Logo";
import Menu from "./Menu";
const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <Logo />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
