import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";


const lap = 4;
const tap = 3;
const phone = 1

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1, 
	autoplay: true,
	autoplaySpeed: 1000,
  };
  
  

  const SlideShow = () =>{
	return(

		<>
    <div className="content">
      <div className="container">
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.alt} className="img" 

			  style={{
				backgroundRepeatP:'no-repeat',
				width:'400px',
				height:'420px',
				position:'contain'
			  }}
			  
			  />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </>

	)
  }

  export default SlideShow;

