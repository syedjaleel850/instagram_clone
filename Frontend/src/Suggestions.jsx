import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Follow from './components/Follow'

function Suggestions() {
    const [profile,setProfile]=useState([])
    const [suggestion,setSuggestion]=useState([])
    const[follow,setFollow]=useState(true)
    useEffect(()=>{
        fetch("https://instagram-clone-backend-igda.onrender.com/api/Profile")
        .then((data)=>{return data.json()})
        .then(profile1=>setProfile(profile1))
        .catch(err=> console.log(err))
    },[])
    useEffect(()=>{
        fetch("https://instagram-clone-backend-igda.onrender.com/api/Suggestions")
        .then((data)=>{return data.json()})
        .then(suggestions=>setSuggestion(suggestions))
        .catch(err=> console.log(err))
    },[])
   const handlesuggestion= async(id,profilePic,userName)=>{
    console.log(id,profilePic,userName)
    await axios.post("https://instagram-clone-backend-igda.onrender.com/api/followers",{id:id,
        profilePic:profilePic,
        userName:userName
    })
        
    
    .catch(err=>console.log(err))
        setFollow(false)
    
    
        setTimeout(()=>{
            setSuggestion(prev=>prev.filter(s=>s.id!==id));
       },2000)
    await axios.delete("https://instagram-clone-backend-igda.onrender.com/api/Suggestions",{id:id,
        profilePic:profilePic,
        userName:userName
    })
        setTimeout(()=>{
        setSuggestion(prev=>prev.filter(s=>s.id!==id));
   },2000)
    }
   
  return (
    <div className='d-flex justify-content-center flex-column m-4'>
        <div >
    {profile.length > 0 ?(
        <div>
            <div >
                {profile.map((profile)=>
                (
                <div key={profile.id}>
                    <div className='profile d-flex align-items-center my-3'>
                         <img className="dp rounded-circle "src={profile.profilePic} alt="img" />
                         <p style={{margin:'0px'}}>{profile.userName}</p>
                         <a className='ms-auto text-decoration-none'href="#">Switch</a>
                    </div>
                    
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
    
    <div className='my-3'>
        <div className='d-flex my-3 align-items-center'>
        <div>Suggested for you</div>
        <a className='ms-auto text-decoration-none' href="#">See All</a>
        </div>
        {suggestion.length>0 ?(
            <div>
            {suggestion.map((suggest)=>(
            <div key={suggest.id} className='suggestions d-flex  my-3 d-flex align-items-center'>
                <img  className='dp rounded-circle'src={suggest.profilePic} alt="" />
                <p className='my-0'>{suggest.userName}</p>
                <a className='ms-auto' style={{cursor:"pointer"}}  onClick={()=>handlesuggestion(suggest.id,suggest.profilePic,suggest.userName)}><Follow /></a>

                </div>
        ))}
            </div>
        ):(
            <div>
                Loading...
                </div>
        )
        }
    </div>
    </div>
    </div>
)
 
}


export default Suggestions
