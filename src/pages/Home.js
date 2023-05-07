import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';

export default function Home() {
    const [content, setcontent] = useState('');
    const [photo, setphoto] = useState();
    const [postopen, setpostopen] = useState(false);
    const [allposts, setallposts] = useState([]);
    const openpost = () => {
        setpostopen(prev => !prev);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/post', localStorage.getItem('token') ? {content : content, photo: photo} : { content: content, photo: photo , userid: JSON.parse(localStorage.getItem('profile'))._id }, localStorage.getItem('token') && { headers: { 'x-token': localStorage.getItem('token') } }).then(res => window.location.reload(false));
    }
    useEffect(() => {
        axios.get('http://localhost:5000/api/post').then(res => { setallposts(res.data); console.log(res.data) });
    }, []);
    return (
        <div className='home'>
            <div className="navbarhm">
                <Navbar />
            </div>
            <div className="homewrap">
                <div className="askques"><h1 >If are with any doubt, post it here</h1> <span onClick={openpost} className='fedpostlink'>..</span></div>
            </div>
            <div className="postdiaopen">
                {postopen && <form onSubmit={submitHandler}>
                    <input value={content} onChange={(e) => setcontent(e.target.value)} type="text" name='text' placeholder='text' autoComplete='off' required />
                    <input type="text" value={photo} onChange={(e) => setphoto(e.target.value)} name='images' placeholder='images url' autoComplete='off' required/>
                    <input type="submit" value="Post" />
                </form>}
            </div>
            <div className="posts">
                {allposts.length > 0 && allposts.map((posts) => {
                    return (
                      
                        <div key={posts.id} className="singlepost">
                            <div className="userimg"><img src="default.jpeg" alt="something" width={50} height={50} /></div>
                            <div className="username">{posts.userid.username}</div>
                            <div className="userpost">{posts.content}</div>
                            {posts.photo && <img src={posts.photo} alt='something' width={200} height={200} />}
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}
