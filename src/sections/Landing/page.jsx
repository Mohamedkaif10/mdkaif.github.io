import Bgvideo from "../../assets/bgvideo.gif";

const Landing = () => {
    return (
        <div className="relative w-full h-screen">
            <img src={Bgvideo} alt="landing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">I'm Mohamed Kaif</h1>
                    <p className="text-2xl text-white mt-2">Developer</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
