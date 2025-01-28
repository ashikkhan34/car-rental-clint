import React from "react";
import video from '../../assets/2f48093d-ef67-4155-a956-6bbf3120af3d.mp4'
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <div className="relative w-full h-[75vh]">
            {/* Background */}
            <video
                src={video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 z-10">
                {/* Heading */}
                <h1 className="text-2xl md:text-4xl text-white font-bold text-center shadow-lg">
                    Drive Your Dreams Today!
                </h1>
                <Link to="/availableCar">
                    <button
                        className="mt-6 px-8 py-3 backdrop-blur-md text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-500 transition duration-300">
                        View Available Cars
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Video;