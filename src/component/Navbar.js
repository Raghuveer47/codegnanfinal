import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div className='sidebar'>
            <nav className='navele'>
                <Link className='sidenavbtns' to='/' >Home</Link>
                <Link className='sidenavbtns' to='/profile' >Profile</Link>
                <Link className='sidenavbtns' to='/virtualcafe' >Virtual Cafe</Link>
                <Link className='sidenavbtns' to='/spposts' >Special posts</Link>
                <div className='logout-container'>
                <GoogleLogout
                    clientId="109092872940-4tltrf0b6b91qi2vovsi9qrv7jddtebp.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}>
                </GoogleLogout>
                </div>
            </nav>
        </div>
    )
}