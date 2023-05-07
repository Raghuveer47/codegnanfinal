import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

export default function Register() {
    const navigate = useNavigate();
    const [user, setuser] = useState({ username: "", email: "", password: "", confirmpassword: "" });
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
        axios.post('http://localhost:5000/api/auth/register', user).then((res) => {
            alert("user account created succesfully");
            //redirect the user when the registration is successful
            return navigate('/login');
        }).catch(err => {
            if (err.response.status === 405) {
                alert(err.response.data.message);
            }
            if (err.response.status === 408) {
                alert(err.response.data.message);
            }
        });
    }
    return (
        <div className='register'>
            <div className="registerbox rainbow">
                <div className="joinus">Join us</div>
                <div className="regisform">
                    <h2 className='regishead'>Register</h2>
                    <form className='regisforms' onSubmit={submitHandler}>
                        <input className='registinputs' type="text" value={user.username} name='username' placeholder='Username' onChange={changeHandler} autoComplete='off' required />
                        <input className='registinputs' type="email" value={user.email} name="email" id="email" placeholder='Email' onChange={changeHandler} autoComplete='off' required />
                        <input className='registinputs' type="password" value={user.password} name="password" id="password" placeholder='Password' onChange={changeHandler} autoComplete='off' required />
                        <input className='registinputs' type="password" value={user.confirmpassword} name="confirmpassword" id="cmpassword" placeholder='Confirm Password' onChange={changeHandler} autoComplete='off' required />
                        <input className='registbtn' type="submit" value="Register" />
                    </form>
                    <div className="singin">Sign in with Google</div>
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
                    <p className="cant">alredy have an account <Link className='regisli' to='/login'>Login</Link> ?</p>
                </div>
            </div>
        </div>
    )
}
