import React, { useEffect, useState } from 'react'
import Heart from './components/Heart'
import axios from 'axios'
function Feed() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/posts")
        .then((data)=>{
            return data.json()
        }).then(data=>setPosts(data)).catch(err=>console.log(err))
    },[])
    
    const handlelike = async (id, currentlike) => {
        const updatedlike = currentlike + 1;
        try {
            const postToUpdate = posts.find((post) => post.id === id);
            if (!postToUpdate) {
                console.error('Post not found');
                return;
            }

            const response = await axios.put(`http://localhost:3000/posts/${id}`, {
                ...postToUpdate,
                likes: updatedlike
            });
            console.log(response.data);

            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === id ? { ...post, likes: updatedlike } : post
                )
            );
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div className='d-flex justify-content-center'>
    {posts.length > 0 ?(
        <div>
            <div className="key">
                {posts.map((post)=>
                (
                <div key={post.id}>
                    <div className='d-flex align-items-center my-3 feed'>
                         <img className="dp-feed rounded-circle "src={post.profilePic} alt="img" />
                         <h5>{post.userName}</h5>
                    </div>
                    <div className='image bg-black'><img src={post.image} alt=""  /></div>
                    <div style={{width:"60%"}}className='d-flex'onClick={()=>handlelike(post.id,post.likes)}><Heart />
                    <i className="bi bi-chat"></i>
                    <i className="bi bi-send"></i>
                    
                    </div>
                    <div style={{width:"60%"}}><b>{post.likes} Likes</b> </div>
                    <p className="caption">{post.caption}</p>


                </div>
                
                ))}
            </div>
        </div>
    ):
    (
    <div>
        Loading...
    </div>
    )}
    </div>
  )
}

export default Feed
