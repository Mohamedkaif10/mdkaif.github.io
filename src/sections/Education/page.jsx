import IITH from "../../assets/IITHLOGONEW.png";

const Education = () => {
    return (
        <div id="Education" className="flex flex-col justify-center items-center h-screen bg-white text-center">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="group">
                    <div className="relative mx-auto">
                        <img src={IITH} alt="IIT Hyderabad" className="w-80 h-auto" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-300 group-hover:w-full transition-all duration-300"></div>
                    </div>
                    <p className="mt-4 text-xl text-iithColor">IIT Hyderabad</p>
                    <p className="text-md text-gray-500">Institute</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
