import { Nav } from "../Nav/Nav";
import './Header.css'
import logo from '../../../public/images/logo.png';
import './Header.css'


export const Header = () => {
    return (
        <header>
            <h2 className="logo">
                <a href="#"><img src={logo} alt="Logo" /></a>
            </h2>
            <Nav />
        </header>
    );
};
