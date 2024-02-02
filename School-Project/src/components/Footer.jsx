import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer(){
    return(
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">

                    {/* Left section pof the footer */}

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>Email:Niit@gmail.com</p>
                        <p>Phone: +234567891</p>
                        <p>Address: 3 Kanta Road</p>                        
                    </div>

                    {/* Right section */}
                    <div>
                        <h3 className="text-x1 font-bold mb-4">
                            Our Socials.
                        </h3>
                        <div className="flex justify-between">
                            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
                            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
                            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;