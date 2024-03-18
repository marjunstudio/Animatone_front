import React from "react"

import logo from "../../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 text-center">
      <div className="mb-6">
        <img src={logo} alt="Animatone" className="mx-auto h-auto max-w-[150px]" />
      </div>
      <div className="text-sm text-gray-500">
        <p>&copy; 2023 Animatone. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
