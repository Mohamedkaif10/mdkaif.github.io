import React from 'react';
import Qoptars from "../../assets/qoptars_cover.jpeg"
import Fastech from "../../assets/fastech_one_logo.jpeg"
const WorkExperience = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="flex justify-center space-x-12">
        <div className="text-center">
          <p className="text-sm font-semibold mb-2">Previous Company (Internship)</p>
          <img src={Qoptars} alt="Qoptars" className="h-20 mx-auto" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold mb-2">Previous Company (Internship)</p>
          <img src={Fastech} alt="Fastech" className="h-20 mx-auto" />
        </div>
        
      </div>
    </div>
  );
}

export default WorkExperience;
