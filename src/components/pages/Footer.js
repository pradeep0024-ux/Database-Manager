import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
      <div className=" bg-[#56bff1] text-white flex justify-center space-x-6 py-[15px]">
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>

          <a
            href="https://facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>

          <a
            href="https://instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        <div className="text-lg flex justify-center space-x-6">
          <p>Contact Us: kpradeep0024@gmail.com</p>
          <p>Atraith Bazar,Bhudhanpur Road ,Azamgarh, UP</p>
        </div>
        <div>
          <p>&copy; 2023 My Company. All Rights Reserved.</p>
        </div>
      </div>
  );
}

export default Footer;
