import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-200">
      <div className="flex space-x-6 text-gray-500">
        <a
          href="https://twitter.com/twitter-handle" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faTwitter} 
            className="hover:text-black transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-kaif-182636259" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faLinkedinIn} 
            className="hover:text-black transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
          />
        </a>
        <a
          href="https://github.com/mohamedkaif10" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faGithub} 
            className="hover:text-black transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
          />
        </a>
        <a
          href="https://instagram.com/md_kkaiff_10" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faInstagram} 
            className="hover:text-black transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" 
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBar;
