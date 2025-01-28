import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const MyCar = () => {
    // const { user } = useAuth()
    // const [cars, setCars] = useState([])
    // useEffect(() => {
    //     const fetchCars = async () => {
    //         const res = await axios.get(`https://car-rental-server-beta.vercel.app/cars/${user.email}`)
    //         console.log(res.data)
    //         setCars(res.data)
    //     }
    //     fetchCars()
    // }, [user.email])

    // const axiosPublic = useAxios()
    // const {user} = useAuth()
    // const { data: allCarData = [] } = useQuery({
    //     queryKey: ['cars',user.email],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/cars/${user.email}`)
    //         return res.data
    //     }
    // })
    // console.log(allCarData)
    return (
        <div>
            <h2 className="text-3xl mt-20 text-center font-bold">My Car</h2>
        </div>
    );
};

export default MyCar;