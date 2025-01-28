import React from 'react';
import { FaCar, FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxios from '../../Hooks/useAxios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Details = () => {
    const { name, price, availability, bookingCount, imageURL, location, publishedDate, _id, description } = useLoaderData()
    const navigate = useNavigate()
    const { user } = useAuth()
     const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm()
       
    const axiosPublic = useAxios()
    const handleBooking = async(data) =>{
        console.log(data)
        const bookingData = {
            carId:_id,
            name:name,
            price:price,
            imageURL:imageURL,
            newDate: data.newDate,
            oldDate: data.oldDate,

        }
        const carRes = await axiosPublic.post('/bookings', bookingData)
                console.log(carRes.data)
                if (carRes.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is added to the booking list`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myBooking')
        
                }


    }
    
    return (
        <>
            <div className='flex w-2/3 shadow-2xl mx-auto p-5 gap-6 mt-20' >
                <div>
                    <img src={imageURL} alt="" className='w-[400px]' />
                </div>
                <div>
                    <h1 className='text-2xl inline-flex items-center'><FaCar className='mr-2'></FaCar> {name}</h1>
                    <h1>Price : ${price}</h1>
                    <h1 className='inline-flex  items-center'>Location : {location} <FaLocationDot /> </h1>
                    <h1>Published Date : {publishedDate}</h1>
                    <h1>Availability : {availability}</h1>
                    <h1>Booking Count : {bookingCount}</h1>
                    <h1>Description : {description}</h1>
                    <div>
                        <h1>Booking Information</h1>
                        <form onSubmit={handleSubmit(handleBooking)}>
                            <label >new booking</label>
                            <input {...register('newDate')} required type="date" className='w-1/2'/><br />
                            <label htmlFor="">old booking</label>
                            <input {...register('oldDate')} required type="date"  className='w-1/2'/>
                            <button  className='btn btn-primary mt-2'>Book Now</button>
                        </form>
                    </div>
                  

                  
                </div>
                
            </div>
            <div className='w-2/3 mx-auto mt-10 mb-10'>
                    {
                        user ? <>
                            <div className='flex gap-4'>
                                <img src={user.photoURL} alt="" className='w-14 h-14 rounded-full'/>
                                <div>
                                    <h1>{user.displayName}</h1>
                                    <h1>{user.email}</h1>
                                </div>
                            </div>
                        </> : <>
                        <h1>Don't Have any user</h1>
                        </>
                    }
                </div>
        </>
    );
};

export default Details;