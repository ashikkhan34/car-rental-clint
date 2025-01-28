import React from 'react';
import toast from 'react-hot-toast';
import useAxios from '../../Hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxios()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.data)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
                toast.success('Login Successful')

            })
        navigate('/')
    }
    return (
        <div>
             <div className='flex gap-2'>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full flex items-center gap-2'> <FaGoogle></FaGoogle> Continue with Google</button>
        </div>
        </div>
    );
};

export default GoogleLogin;