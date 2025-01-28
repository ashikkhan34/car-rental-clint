import React from 'react';
import error from '../../assets/animation/Animation - 1737900478975.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Lottie animationData={error}></Lottie>
            <div>
                <h1 className="text-2xl">Cannot find your location</h1>
               <Link to='/'> <button className='btn btn-primary'>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default Error;