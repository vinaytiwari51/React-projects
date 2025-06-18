import React from 'react';
import { useDispatch } from 'react-redux';
import authentiService from '../../authServices/auth_services';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authentiService.logout().then(() => {
            dispatch(logout())
        }) 
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
      )
}

export default LogoutBtn
