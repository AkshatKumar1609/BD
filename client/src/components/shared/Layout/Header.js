import React from 'react'
import { MdBloodtype } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';
import {useNavigate}  from 'react-router-dom';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    //logout
    const handleLogout = () => {
        localStorage.clear();
        alert('Logout Successfully');
        navigate('/login');
    };
  return (
    <>
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand'><MdBloodtype  color='red'/> Blood Bank App</div>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item mx-3'>
                        <p className='nav-link'>
                            <BiUserCircle /> Welcome {user?.name || user?.hospitalName || user?.organizationName} &nbsp;
                            <span class="badge text-bg-secondary">{user?.role}</span>
                        </p>
                    </li>
                    <li className='nav-item mx-3'>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header