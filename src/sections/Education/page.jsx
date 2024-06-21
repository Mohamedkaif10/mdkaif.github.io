import IITH from "../../assets/iithyderabad.png";
const Education = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="grid grid-cols-2 gap-10">
          
          <div className="text-center group">
            <div className="w-40 h-40 flex justify-center items-center relative">
              <img src={IITH} alt="IIT Hyderabad" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-300 group-hover:w-full transition-all duration-300"></div>
            </div>
            <p className="mt-4 text-xl text-iithColor">IIT Hyderabad</p>
            <p className="text-md text-gray-500">Mentor Institute</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;