import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg- navy to-red-600-900 text-white py-4">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/calabweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/MabuyaVan99096"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <p>&copy; {new Date().getFullYear()}calabmaboya</p>
        </div>

        <div className="flex flex-col">
          <p>Phone:0798117279/0813324587</p>
          <p>Email:calabmaboya@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
