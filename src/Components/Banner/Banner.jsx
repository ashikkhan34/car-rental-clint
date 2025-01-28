import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../assets/1.avif'
import image2 from '../../assets/2.avif'
import image3 from '../../assets/3.avif'

const Banner = () => {

    return (
        <div>
            <Carousel className=' text-center' autoPlay={true}>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;