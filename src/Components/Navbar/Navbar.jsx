import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut, theme, setTheme } = useAuth()

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const links = <>
        {
            user ? <>
                <NavLink to='/' > <li><a className='light'>Home</a></li></NavLink>
                <NavLink  to='/availableCar'> <li><a>Available Cars</a></li></NavLink>
                <NavLink  to='/addCar'> <li><a className='light'>Add Car</a></li></NavLink>
                {/* <NavLink className={({isActive})=> `${isActive ? 'text-red-500 font-bold':''}`} to='/myCar'> <li><a>My Car</a></li></NavLink> */}
                <NavLink  to='/MyBooking'> <li><a className='light'>My Booking</a></li></NavLink>
            </> : <>
                <NavLink to='/' > <li><a className='light'>Home</a ></li></NavLink>
                <NavLink  to='/availableCar'> <li><a className='light'>Available Cars</a></li></NavLink>
            </>
        }

    </>
    return (
        <div className={`${theme ? ' text-gray-800' : 'text-white'}`}>
            <div className="navbar shadow-sm fixed opacity-90 z-10 top-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-10' src={logo} alt="" />
                        <h2 className="text-2xl">Car Rental</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='p-5' onClick={() => setTheme(!theme)}>
                        {
                            theme ? <CiLight className='text-4xl' title='Light' /> : <MdDarkMode className='text-4xl' title='Dark' />
                        }

                    </div>
                    {
                        user ? <>
                            <p className='mr-4'>{user.displayName}</p>
                            <img className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt="" />
                            <button onClick={handelLogOut} className='btn btn-primary'>logOut</button>
                        </> : <>
                            <Link to='/login'><a className="btn mr-1.5">Login</a></Link>
                            <Link to='/signUp'><a className="btn">Sign Up</a></Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;