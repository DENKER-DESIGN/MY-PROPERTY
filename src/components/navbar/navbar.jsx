import './navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">World Of Drivers</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>Contact</li>
                <li className="nav-contact ">About</li>
            </ul>
        </div>
    );
}

export default Navbar;
