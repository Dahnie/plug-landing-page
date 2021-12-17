import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer bg-white md:flex justify-around py-8 grid grid-cols-12 w-full overflow-x-hidden">
            <div data-aos="fade-left" data-aos-duration="1000"
                data-aos-easing="ease-in-out" className="left pl-24 lg:pl-32 col-span-12">
                <img width="70" height="70" src={logo} alt="logo" />
                <p className="text-secondaryGray font-regular w-5/12 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000"
                data-aos-easing="ease-in-out" className="right flex pl-12 md:pr-10 col-span-12 grid grid-cols-12">
                <div className="left md:px-10 col-span-6 lg:col-span-4">
                    <div className="heading text-linkYellow font-semibolder py-3 ">Products</div>
                    <div className="sub-links text-primary font-semibolder flex flex-col">
                        <Link className="py-2" to="#">Download</Link>
                        <Link className="py-2" to="#">Status</Link>
                    </div>
                </div>
                <div className="middle md:px-10 col-sapn-6 lg:col-span-4">
                    <div className="heading text-linkYellow font-semibolder py-3">Products</div>
                    <div className="sub-links text-primary font-semibolder flex flex-col">
                        <Link className="py-2" to="#">About</Link>
                        <Link className="py-2" to="#">Pricing</Link>
                        <Link className="py-2" to="#">Support</Link>
                    </div>
                </div>
                <div className="right md:px-10 col-span-6 lg:col-span-4">
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