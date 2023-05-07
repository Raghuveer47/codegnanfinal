import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

export default function Login() {
    const navigate = useNavigate();
    const [user, setuser] = useState({ email: '', password: '' });
    const changeHandler = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: "109092872940-4tltrf0b6b91qi2vovsi9qrv7jddtebp.apps.googleusercontent.com" })
        })
    }, []);
    const responseGoogle = async (response) => {
        axios.post('http://localhost:5000/api/auth/token', { idToken: response.tokenId }).then(res => {localStorage.setItem("profile", JSON.stringify(res.data)); navigate('/')});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', user).then(res => {
            if (res.data.token) {
                toast('user login sucessfully');
                localStorage.setItem("token", `${res.data.token}`);
                navigate('/');
            }
        }).catch(err => {
            //toast the responce corresponds to the error
            if (err.response.status === 404) {
                toast("user not found");
                return navigate('/register')
            }
            if (err.response.status === 405) {
                toast("password is incorrect");
            }
        });
    }
    return (
        <div className='login'>
            <div className="loginbox rainbow">
                <div className="welcomeback">Welcome Back</div>
                <div className="loginform">
                    <h2 className='loginheading'>Log in</h2>
                    <form className='loginforms' onSubmit={submitHandler}>
                        <input className='logininputs' type="email" name='email' value={user.email} placeholder='Username' onChange={changeHandler} autoComplete="off" required />
                        <input className='logininputs' type="text" name='password' value={user.password} placeholder='Password' onChange={changeHandler} autoComplete="off" required />
                        <a href="#">
                        <span></span>
                         <span></span>
                         <span></span>
                        <span></span>
                               Login
                               </a>
                 
                    </form>
                    <div className="googlesign">
                        <div>
                            <GoogleLogin
                                clientId={"109092872940-4tltrf0b6b91qi2vovsi9qrv7jddtebp.apps.googleusercontent.com"}
                                buttonText="Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                isSignedIn={true}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                    <p className="cant">Can't have an accout <span className='regisli'><Link className='regisli' to='/register'>Register</Link></span> ?</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}