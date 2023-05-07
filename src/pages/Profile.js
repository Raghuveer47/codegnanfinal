import React, { useState } from 'react';
import Navbar from '../component/Navbar';

export default function Profile() {
    const [profile, setprofile] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div className='Profile'>
        <div className="navabr">
            <Navbar />
        </div>
        <div className="profileuser">
            <div className="profimg">
                <img src={profile.picture} alt="someone" width={50} height={50} />
            </div>
            <div className="profname">
                {profile.username}
            </div>
            <div className="proemai">
                {profile.email}
            </div>
        </div>
    </div>
  )
}
