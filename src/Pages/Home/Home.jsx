import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Video from '../../Components/video/Video';
import AllCars from '../../Components/AllCars/AllCars';
import Offer from '../../Components/offer/Offer';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Video></Video>
           <AllCars></AllCars>
           <Offer></Offer>
        </div>
    );
};

export default Home;