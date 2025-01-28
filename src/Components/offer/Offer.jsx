import React from 'react';

const Offer = () => {
    return (
        <>
        <h1 className="text-3xl text-center text-red-600 font-bold mb-10">-----Special Offer----</h1>
            <div className='md:flex mx-auto justify-center gap-4 mt-10 mb-5 '>
                <div className='bg-gray-100 p-5 w-80 border-amber-400 border-2 rounded-2xl h-52  transform hover:scale-105 transition duration-500 mb-5 ml-5' >
                    <h1 className='text-2xl'>Get 15% Off for Weekend Rentals!</h1>
                    <p className='text-gray-600'>Book your car now and enjoy 15% off dis weekend.</p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>
                <div className='bg-gray-100 p-5 w-80 border-amber-400 border-2 rounded-2xl h-52  transform hover:scale-105 transition duration-500 mb-5 ml-5' >
                    <h1 className='text-2xl'>Luxury Cars at $99/day This Holiday Season!</h1>
                    <p className='text-gray-600'>Experience premium comfort at an unbeatable price..</p>
                    <button className='btn btn-success'>Start Now</button>
                </div>
                <div className='bg-gray-100 p-5 w-80 border-amber-400 border-2 rounded-2xl h-52  transform hover:scale-105 transition duration-500 mb-5 ml-5' >
                    <h1 className='text-2xl'>Get 20% Off on You're First Rental!</h1>
                    <p className='text-gray-600'>Sign up and save big on your first booking.</p>
                    <button className='btn btn-primary'>Learn more</button>
                </div>
            </div>
        </>
    );
};

export default Offer;