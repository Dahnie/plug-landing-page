import rafiki_1 from "../assets/images/rafiki-1.svg"
import rafiki_2 from "../assets/images/rafiki-2.svg"
import rafiki_3 from "../assets/images/rafiki-3.svg"
import rafiki_4 from "../assets/images/rafiki-4.svg"
import rafiki_5 from "../assets/images/rafiki-5.svg"
import yellow_line from "../assets/images/yellow-line.svg"
import white_line from "../assets/images/white-line.svg"
import profile from "../assets/images/picss.png"
const Main = () => {
    const profileName = ["Dannyboy", "Sunday", "Akpan", "Anjola", "Kolade", "Laide", "Bunmi", "Iyinoluwa", "Ay"]
    return (
        <main className="font-body w-full overflow-x-hidden">
            <div className="layer-1 grid grid-cols-12 gap-1 w-full">
                <div data-aos="fade-left" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="left col-span-12 md:col-span-6 md:pl-24 flex flex-col justify-center">
                    <div className="major text-3xl md:text-5xl font-semibolder text-primary w-full mx-auto pl-14 md:pl-0">
                        Making sales and<br /> Easier than before
                    </div>
                    <div className="division inline py-5 w-full pl-14 md:pl-0">
                        <img src={yellow_line} alt="line" />
                    </div>
                    <div className="minor text-primary opacity-60 w-3/5 pl-14 md:pl-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                    </div>
                    <div className="mt-8 text-center w-full">
                        <button className="text-center bg-primary text-white w-2/4 font-regular py-2.5 px-1 rounded">Get Started</button>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="right col-span-12 md:col-span-6 flex justify-start">
                    <img src={rafiki_1} width="600" height="600" alt="rafifki-svg" />
                </div>
            </div>
            <div className="layer-2 mt-14" id="how-it-works">
                <div data-aos="fade-up" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="up text-center ">
                    <div className="major text-4xl font-semibolder text-primary">
                        How it works
                    </div>
                    <div className="division py-2 flex justify-center">
                        <img src={yellow_line} alt="line" />
                    </div>
                    <div className="minor text-black font-semibolder opacity-60 w-2/6 mx-auto my-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                    </div>
                </div>
                <div className="down grid grid-cols-12 gap-1 pt-8 text-center md:text-left">
                    <div data-aos="fade-left" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="left col-span-12 md:col-span-6 md:pl-24 flex flex-col items-center md:items-start justify-center">
                        <div className="major text-4xl font-semibolder text-primary">
                            Upload Business
                        </div>
                        <div className="minor text-primary opacity-60 w-4/6 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="right col-span-12 md:col-span-6 flex justify-start">
                        <img src={rafiki_2} width="600" height="600" alt="rafifki-svg" />
                    </div>
                </div>
            </div>
            <div className="layer-3 grid grid-cols-12 gap-1">
                <div data-aos="fade-left" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="left col-span-12 md:col-span-6 flex justify-start">
                    <img src={rafiki_3} width="600" height="600" alt="rafifki-svg" />
                </div>
                <div data-aos="fade-right" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="left col-span-12 md:col-span-6 md:pl-24 flex flex-col items-center md:items-start justify-center text-center">
                    <div className="major text-4xl font-semibolder text-primary">
                        Check Products
                    </div>
                    <div className="minor text-primary opacity-60 w-4/6 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
                    </div>
                </div>
            </div>
            <div className="layer-4 grid grid-cols-12 gap-1 pt-5 md:pt-0">
                <div data-aos="fade-left" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="left col-span-12 md:col-span-6  md:pl-24 flex flex-col items-center md:items-start justify-center text-center">
                    <div className="major text-4xl font-semibolder text-primary">
                        Get plugged
                    </div>
                    <div className="minor text-primary opacity-60 w-4/6 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="right col-span-12 md:col-span-6 flex justify-start">
                    <img src={rafiki_4} width="550" height="550" alt="rafifki-svg" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"
                data-aos-easing="ease-in-out" className="layer-5 bg-primaryGray text-center" id="download">
                <div className="major text-4xl font-semibolder text-primary py-7">Right Business, Right Audience</div>
                <div className="minor w-3/6 mx-auto text-black opacity-75 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Sed sed.
                </div>
                <div className="font-semibolder color text-linkYellow">
                    Read more &gt;
                </div>
                <div className="flex justify-center">
                    <img width="450" height="450" src={rafiki_5} alt="rafiki-svg" />
                </div>
                <div className="minor mx-auto text-secondaryGray opacity-80 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing.
                </div>

                <div className="link mx-auto py-5">
                    <button className="text-center bg-primary text-white font-semibolder py-2.5 px-12 rounded">Download from Google Play</button>
                </div>
            </div>
            <div className="layer-6 bg-primary md:flex pb-16 grid grid-cols-12 overflow-x-hidden">
                <div className="left md:pl-32 col-span-12 pl-12">
                    <div className="minor text-white text-4xl font-thin-italic md:w-1/12 w-full pt-14 flex flex-col justify-center">People Are Saying About Us</div>
                    <div className="division py-4">
                        <img src={white_line} alt="line" />
                    </div>
                    <div className="flex font-regular text-white py-3">
                        See all <button className="w-6 h-6 flex justify-center font-semibolder bg-linkYellow text-white rounded-full  mx-2">&gt;</button>
                    </div>
                </div>
                <div className="right pt-14 col-span-12">
                    <div className="cards-container flex w-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-lg max-width-none">
                        {profileName.map(names => (
                            <div className="card bg-white rounded-md text-center flex flex-col mx-4">
                                <div className="up message font-medium-italic text-black py-3 px-5 text-left leading-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.
                                </div>
                                <div className="down details px-5 pb-4 flex">
                                    <div className="profile ">
                                        <img src={profile} alt="profile" />
                                    </div>
                                    <div className="px-3 pt-1 text-left">
                                        <div className="name font-semibolder text-primary">
                                            {names}
                                        </div>
                                        <div className="status font-semibolder text-sm text-gray-500">
                                            Student
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Main;