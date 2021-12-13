import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer bg-white flex justify-around py-8">
            <div className="left pl-32">
                <img width="70" height="70" src={logo} alt="logo" />
                <p className="text-secondaryGray font-regular w-5/12 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.</p>
            </div>
            <div className="right flex pr-10">
                <div className="left px-10">
                    <div className="heading text-linkYellow font-semibolder py-3">Products</div>
                    <div className="sub-links text-primary font-semibolder flex flex-col">
                        <Link className="py-2" to="#">Download</Link>
                        <Link className="py-2" to="#">Status</Link>
                    </div>
                </div>
                <div className="middle px-10">
                    <div className="heading text-linkYellow font-semibolder py-3">Products</div>
                    <div className="sub-links text-primary font-semibolder flex flex-col">
                        <Link className="py-2" to="#">About</Link>
                        <Link className="py-2" to="#">Pricing</Link>
                        <Link className="py-2" to="#">Support</Link>
                    </div>
                </div>
                <div className="right px-10">
                    <div className="heading text-linkYellow font-semibolder py-3">Products</div>
                    <div className="sub-links text-primary font-semibolder flex flex-col">
                        <Link className="py-2" to="#">Terms</Link>
                        <Link className="py-2" to="#">Privacy</Link>
                        <Link className="py-2" to="#">Licenses</Link>
                        <Link className="py-2" to="#">Cookie Settings</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;