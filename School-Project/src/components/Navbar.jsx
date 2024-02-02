import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-blue-500 px-20 py-7 ">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo of the school */}
                <div className="text-white font-bold text-1g">
                    School Logo
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white
                         hover:text-gray-500" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="text-white hover:text-gray-400">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;