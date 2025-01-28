import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';

const MyBooking = () => {
    const axiosPublic = useAxios()
    const { data: allBookingData = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookings')
            return res.data
        }
    })
    console.log(allBookingData)
    

    const handleDelete = async (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert dis!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/bookings/${data._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${book.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });

    }
    return (
        <div>
            <div className="overflow-x-auto mt-20">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-200 hover'>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>New date</th>
                            <th>Old date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBookingData?.map(data => <tr key={data._id} className='hover:bg-gray-100'>
                                <td>
                                    <img src={data.imageURL} alt="" className='w-20' />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.newDate}</td>
                                <td>{data.oldDate}</td>
                                <td>
                                    <button onClick={() => handleDelete(data)}> <RiDeleteBinLine className='text-2xl text-red-600' /></button> <br />
                                    <Link to={`/updateBooking/${data._id}`}><MdBrowserUpdated className='text-2xl text-green-600'></MdBrowserUpdated></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;