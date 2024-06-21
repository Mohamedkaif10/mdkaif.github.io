
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub, faGitlab, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaBar = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-200">
      <div className="flex space-x-6 text-gray-500">
        <FontAwesomeIcon icon={faFacebookF} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
        <FontAwesomeIcon icon={faTwitter} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
        <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
        <FontAwesomeIcon icon={faGithub} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
        <FontAwesomeIcon icon={faGitlab} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
        <FontAwesomeIcon icon={faInstagram} className="hover:text-black transform hover:-translate-y-1 transition-all duration-300" />
      </div>
    </div>
  );
};

export default SocialMediaBar;
