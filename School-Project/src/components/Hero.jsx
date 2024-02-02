import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
          <div>
            <img className="size-full" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1661641210797-9f974ee57677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2glMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2glMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </Slider>
      );
}
export default Hero;