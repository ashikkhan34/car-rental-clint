import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const { newDate, oldDate,_id} = useLoaderData()
    const navigate = useNavigate()
    const axiosPublic = useAxios()
    const { register, handleSubmit} = useForm()
    const handleUpdate = async (data) => {
        console.log(data, _id)
        const bookingData = {
            newDate: data.newDate,
            oldDate: data.oldDate
        }
        const booking = await axiosPublic.patch(`/bookings/${_id}`, bookingData)
        console.log(booking.data)
        if (booking.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Date is added to the booking list`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/myBooking')
        }
    }
    console.log(newDate, oldDate)
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-800 font-bold mt-20'>--Update Booking Date-- </h1>
            <div className='w-2/3 mx-auto shadow-2xl p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mb-5 mt-5'>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <label htmlFor="newDate">New Date</label>
                <input {...register('newDate')} required className='w-full p-2' type="date" id="newDate" name="newDate" /><br />
                <label htmlFor="oldDate">Old Date</label>
                <input {...register('oldDate')} required className='w-full p-2' type="date" id="oldDate" name="oldDate" />
                <button onClick={()=>handleUpdate(data)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Update</button>
            </form>
            </div>
        </div>
    );
};

export default UpdateBook;