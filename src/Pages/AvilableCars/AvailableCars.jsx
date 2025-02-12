import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Available from './Available';
import { FaSearch } from 'react-icons/fa';

const AvailableCars = () => {
    const axiosPublic = useAxios()
    const { data: allCars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cars')
            return res.data
        }
    })
    return (
        <div className=''>
            <div className='flex p-3 justify-evenly items-center mt-20'>
              <div className='flex items-center'>
                    <FaSearch className='text-2xl mr-2'></FaSearch>
              <input type="search" placeholder='search car' className='bg-gray-200 px-6'/>
              </div>
                <button className='btn btn-primary'>
                    <select
                        className="select select-ghost w-full ">
                        <option disabled selected value='default'>filter</option>
                        <option value='available'>Newest</option>
                        <option value='un-available'>Oldest</option>
                        <option value='un-available'>Lowest Price</option>
                        <option value='un-available'>Hights Price</option>
                    </select>
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    allCars?.map(data => <Available key={data._id} data={data}></Available>)
                }
            </div>
        </div>
    );
};

export default AvailableCars;