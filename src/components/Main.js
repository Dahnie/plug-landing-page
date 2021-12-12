import rafiki_1 from "../assets/images/rafiki-1.svg"
import rafiki_2 from "../assets/images/rafiki-2.svg"
import rafiki_3 from "../assets/images/rafiki-3.svg"
import rafiki_4 from "../assets/images/rafiki-4.svg"
import rafiki_5 from "../assets/images/rafiki-5.svg"
import yellow_line from "../assets/images/yellow-line.svg"
const Main = () => {
    return (
        <main className="font-body">
            <div className="layer-1 grid grid-cols-12 gap-1">
                <div className="left col-span-6 pl-24 flex flex-col justify-center">
                    <div className="major text-5xl font-semibolder text-primary">
                        Making sales and<br /> Easier than before
                    </div>
                    <div className="division inline py-5">
                        <img src={yellow_line} alt="line" />
                    </div>
                    <div className="minor text-primary opacity-60 w-3/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                    </div>
                    <div className="mt-8">
                        <button className="text-center bg-primary text-white w-2/4 font-regular py-2.5 px-1 rounded">Get Started</button>
                    </div>
                </div>
                <div className="right col-span-6 flex justify-start">
                    <img src={rafiki_1} width="600" height="600" alt="rafifki-svg" />
                </div>
            </div>
            <div className="layer-2 gap-1 mt-14">
                <div className="up text-center ">
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
                <div className="down grid grid-cols-12 gap-1">
                    <div className="left col-span-6  pl-24 flex flex-col justify-center">
                        <div className="major text-4xl font-semibolder text-primary">
                            Upload Business
                        </div>
                        <div className="minor text-primary opacity-60 w-4/6 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
                        </div>
                    </div>
                    <div className="right col-span-6 flex justify-start">
                        <img src={rafiki_2} width="600" height="600" alt="rafifki-svg" />
                    </div>
                </div>
            </div>
            <div className="layer-3">
                <div className="right grid grid-cols-12 gap-1">
                    <div className="left col-span-6 flex justify-start">
                        <img src={rafiki_3} width="600" height="600" alt="rafifki-svg" />
                    </div>
                    <div className="left col-span-6  pl-24 flex flex-col justify-center">
                        <div className="major text-4xl font-semibolder text-primary">
                            Check Products
                        </div>
                        <div className="minor text-primary opacity-60 w-4/6 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;