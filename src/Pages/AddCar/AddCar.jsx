import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';

const AddCar = () => {
    const axiosPublic = useAxios()
    const { user,theme } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const carItem = {
            email: user.email,
            name: data.CarName,
            price: data.price,
            bookingCount: data.bookingCount,
            registrationNumber: data.registrationNumber,
            availability: data.availability,
            location: data.location,
            feature: data.feature,
            imageURL: data.imageURL,
            description: data.description,
            publishedDate: new Date()
        }
        const carRes = await axiosPublic.post('/cars', carItem)
        console.log(carRes.data)
        if (carRes.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.CarName} is added to the Asset`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }
    return (
        <div className={`${theme ? ' text-gray-300' : ''}`}>
            <div>
                <div>
                    <h1 className='text-4xl text-rose-500 text-center mt-16'>---Add a Car---</h1>
                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input {...register("CarName", { required: true })} type="name" placeholder="car model" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Daily Rental Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Daily Rental Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Booking Count</span>
                            </label>
                            <input {...register("bookingCount", { required: true })} type="number" placeholder="booking Count" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Vehicle Registration Number</span>
                            </label>
                            <input {...register("registrationNumber", { required: true })} type="name" placeholder="registration number " className="input input-bordered" required />
                        </div>
                        <div className='form-control'>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Availability</span>
                                </div>
                                <select
                                    defaultValue='default'
                                    {...register('availability', { required: true })}
                                    className="select select-ghost w-full ">
                                    <option disabled selected value='default'>Availability</option>
                                    <option value='available'>Availability</option>
                                    <option value='un-available'>Un Availability</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input {...register("location", { required: true })} type="name" placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Feature</span>
                            </label>
                            <input {...register("feature", { required: true })} type="name" placeholder="feature" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input {...register("imageURL", { required: true })} type="name" placeholder="image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register('description')} placeholder='Description' color='5' rows={5} className='w-full'></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary hover:rounded-full  w-full">Add Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddCar;