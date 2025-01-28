import React from 'react';

const Card = ({car}) => {
    const { name, price, availability, bookingCount, imageURL } = car;
    console
    return (
        <div>
            <div className="card bg-base-100  shadow-xl transform hover:scale-105 transition duration-500">
                <figure>
                    <img
                        src={imageURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Booking : {bookingCount}</h2>
                    <p> Price: $ {price}</p>
                    <h1 className='border rounded-full w-fit px-2 bg-green-600'>{availability}</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;