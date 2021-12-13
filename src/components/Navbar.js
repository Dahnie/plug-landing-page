import logo from "../assets/images/logo.png"
// import { NavLink } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"
const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between py-3 font-body text-primary bg-white sticky top-0 z-30 w-full">
            <div className="left logo inline px-16 ">
                <img width="60" height="60" src={logo} alt="logo" />
            </div>
            <div className="middle inline">
                <Link to="/" className="px-5 font-semibolder">Home</Link>
                <Link to="#" className="px-5 font-semibolder">About Us</Link>
                <Link to="#download" className="px-5 font-semibolder">Download</Link>
                <Link to="#how-it-works" className="px-5 font-semibolder">How it works</Link>
            </div>
            <div className="right inline pr-24 font-semibolder">
                <button className="px-6 py-1 border border-primary border-r mx-2">Sign In</button>
                <button className="px-6 py-1.5 bg-primary text-white mx-2">Register</button>
            </div>
        </nav >
    );
}

export default Navbar;