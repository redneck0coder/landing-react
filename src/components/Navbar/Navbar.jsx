import Nav from "../Nav/Nav.jsx";
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Nav/>
        </div>
    );
};

export default Navbar;