import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Stories() {
  const [stories, setstories] = useState([])
  const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((data) => data.json())
      .then(stories => setstories(stories))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='d-flex justify-content-spacebetween m-4 storyparent '>
      
      
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className='stories' key={story.id} onClick={()=>{navigate(`/story/${story.id}/${stories.length}`)}}          >
            <div >
            <img className="gradient-border story-dp rounded-circle " src={story.profilePic} alt="img" />
            </div>
          
            <p className='text-truncate' style={{width:"50px"}}>
              {story.userName}
            </p>
            

    </div>


        )
        )
      ) :
        (
          <div>Loading...</div>

        )
      }

    </div>
  )
}

export default Stories
