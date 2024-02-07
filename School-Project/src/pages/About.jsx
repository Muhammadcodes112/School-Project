import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function About(){
    return(
        <div className="container mx-auto mt-4">
            <h2 className="font-bold text-2xl text-gray-400 m-4">About Us:</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Our Mission */}
                <div>
                    <img src="https://via.placeholder.com/600x600" alt="About us" className="rounded-lg shadow-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque omnis laborum excepturi. Harum dolores necessitatibus aperiam, consequatur adipisci earum cum. Sint dolorem at harum sapiente quo ipsa blanditiis, quod accusamus!</p>
                </div>

                {/* Our Vision */}
                <div>
                    <img src="https://via.placeholder.com/600x600" alt="About us" className="rounded-lg shadow-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque omnis laborum excepturi. Harum dolores necessitatibus aperiam, consequatur adipisci earum cum. Sint dolorem at harum sapiente quo ipsa blanditiis, quod accusamus!</p>
                </div>
            </div>
           
        </div>
    )
}
export default About;