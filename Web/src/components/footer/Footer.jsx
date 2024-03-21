import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} ITPM Project. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-red-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-red-600"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-red-600"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-red-600"
            >
              Address
            </a>
          </li>
          <li className="flex flex-col items-center"> {/* Changed to a flex column to align items vertically */}
            <a
              target="blank"
              href=""
              className="text-base font-medium text-gray-600 hover:text-red-600 mb-2" // Added margin bottom to create space between link and icon
            >
              Stay On Touch
            </a>
            <div className="flex items-center"> {/* Flex container for the social icons */}
              <FaFacebook className="text-2xl text-gray-600 hover:text-green-600 mr-2" />
              <FaTwitter className="text-2xl text-gray-600 hover:text-green-600 mr-2" />
              <FaInstagram className="text-2xl text-gray-600 hover:text-green-600" />
              <FaWhatsapp className="text-2xl text-gray-600 hover:text-green-600" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
