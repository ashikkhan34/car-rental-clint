import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Available = ({data}) => {
    const { name, price, imageURL,location,publishedDate,_id } = data
       return (
           <div>
               <div className="card bg-base-100  shadow-xl">
                   <figure>
                       <img
                           src={imageURL}
                           alt="Shoes" />
                   </figure>
                   <div className="card-body">
                       <h2 className="card-title">Brand : {name} <FaCar></FaCar></h2>
                       <p>Price:${price}</p>
                          <p>Location : {location}</p>
                          <p>Added:{publishedDate}</p>
                          <Link to={`/details/${data._id}`} >
                          <button className='w-full btn btn-primary'>Book Now</button>
                          </Link>
                   </div>
               </div>
           </div>
         );
};

export default Available;