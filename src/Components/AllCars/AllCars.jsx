import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const AllCars = () => {
    const axiosPublic = useAxios()
    const { data: allCars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cars')
            return res.data
        }
    })
    console.log(allCars)
    return (
        <div>
            <div>
                
            <h1 className="text-3xl text-center text-red-600 font-bold mb-10">-----Recent Cars----</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        allCars?.slice(0,6).map(car => <Card key={car._id} car={car}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCars;