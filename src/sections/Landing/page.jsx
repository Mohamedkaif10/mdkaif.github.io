import Bgvideo from "../../assets/bgvideo.gif";
import MobileBg from "../../assets/mobile_bg.gif";
import Typewriterfuntion from "./Typewriterfuntion";

const Landing = () => {
    return (
        <div id="landing" className="relative w-full h-screen">
            {/* Desktop View */}
            <img src={Bgvideo} alt="landing" className="hidden sm:block w-full h-full object-cover" />
            {/* Mobile View */}
            <img src={MobileBg} alt="landing" className="block sm:hidden w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white mb-4">I'm Mohamed Kaif</h1>
                <div className="text-2xl text-white mt-2">
                    <Typewriterfuntion />
                </div>
            </div>
        </div>
    );
}

export default Landing;
