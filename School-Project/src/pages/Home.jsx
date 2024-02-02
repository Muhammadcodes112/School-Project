import React from "react";
import Slider from "react-slick";
import Hero from "../components/Hero";

function Home(){
    return(
        <div className="container mx-auto">
            <Hero/>
            {/* Home */}

            <div className="text-center">
                <h1>Welcome to the best school in <span className="text-blue-500">Africa.</span></h1>
                <p className="text-gray-700">Providing Quality education since 1900</p>
            </div>

            {/* Image */}
            <img src="https://media.licdn.com/dms/image/C4D1BAQGJi-SP3H2Uxg/company-background_10000/0/1583353561819?e=2147483647&v=beta&t=N7tpQKERojzBg3iucgpCUTePlDekYGRnwXF0Dk8i5js" alt="Niit Image"  className="rounded-md shadow-lg mt-4 hover:scale-100 "/>

            {/* Content */}

            <div className="mt-8 text-center px-10">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem incidunt excepturi vero impedit, fugiat inventore libero laborum reiciendis id facilis at iste a odio voluptates ea architecto perferendis sequi.</p>
            </div>


            {/* COurses */}
            <div className="mt-8 text-center">
                <h2 className="text-2x1 font-bold mb-4">Courses</h2>
                <p className="text-gray-700">Latest Courses on cutting edge technologies</p>
                <li>Blockchain</li>
                <li>Artificial Intelligence</li>
                <li>Big Data</li>
                <li>Data Analytics</li>

            </div>
        </div>

     
        
    )
}
export default Home;