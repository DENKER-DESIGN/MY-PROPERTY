import './navbar.css'


const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">World Of Drivers</div>
            <ul className="nav-menu">
                <li className='nav-menu'><a href="/" className='nav-menu'>Home</a></li>
                <li className='nav-menu'><a href="/explore" className='nav-menu'>Explore</a></li>
                <li className='nav-menu'><a href="" className='nav-menu'>Contact</a></li>
                <li className="nav-contact ">About</li>
            </ul>
        </div>
    );
}

export default Navbar;
