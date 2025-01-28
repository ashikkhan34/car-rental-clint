import React from 'react';
import { FaCar } from 'react-icons/fa';

const Cars = ({ cars }) => {
    const { name, price, imageURL,location,publishedDate } = cars
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={imageURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Brand : {name} </h2>
                    <p>Price:$ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;