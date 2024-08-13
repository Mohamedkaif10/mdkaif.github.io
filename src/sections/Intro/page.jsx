import React from 'react';
import Kaif from "../../assets/image.png";

const ProfileSection = () => {
  return (
    <div id ="Intro" className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="relative mb-8 md:mb-0 md:mr-8">
          <div className="border-4 border-gray-600 p-2">
            <img
              src={Kaif}
              alt="Mohamed Kaif"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Hallo, <br /> I am Mohamed Kaif</h1>
          <p className="text-lg">
            A prefinal year undergraduate student at the Indian Institute of Technology Hyderabad which started in 2008. I am a passionate learner and a tech enthusiast. I am a Full Stack Developer and a Competitive Programmer. I am a quick learner and a team player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
