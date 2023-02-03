import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../assets/Amazon_logo.svg.webp";


const Header = () => {
  return (
    <header>
    <div className="w-full px-1 py-4 flex justify-center items-center">
      <Link to="/" className="cursor-pointer w-[6.5rem]">
        <img src={Logo} alt="amazon" className="object-cover" />
      </Link>
    </div>
  </header>
  )
}

export default Header;
