import logo from "../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between py-3 font-body text-primary">
            <div className="left logo inline px-16 ">
                <img width="60" height="60" src={logo} alt="logo" />
            </div>
            <div className="middle inline">
                <NavLink to="#" className="px-5 font-semibolder" activeClassName="is-active">Home</NavLink>
                <NavLink to="#" className="px-5 font-semibolder" activeClassName="is-active">About Us</NavLink>
                <NavLink to="#" className="px-5 font-semibolder" activeClassName="is-active">Download</NavLink>
                <NavLink to="#" className="px-5 font-semibolder" activeClassName="is-active">How it works</NavLink>
            </div>
            <div className="right inline pr-24 font-semibolder">
                <button className="px-6 py-1 border border-primary border-r mx-2">Sign In</button>
                <button className="px-6 py-1.5 bg-primary text-white mx-2">Register</button>
            </div>
        </nav >
    );
}

export default Navbar;