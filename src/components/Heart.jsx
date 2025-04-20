import React from 'react'
import { useState } from 'react';
function Sample() {
    const [like,setlike]=useState(false);
    function handlelike(){
        setlike(!like)
          }
  return (
    <div>
        <div onClick={()=>handlelike()}>
            {like ? (
              
              <i className="bi text-danger bi-heart-fill "></i>

            ):(
              <i className="bi bi-heart "></i>
            )
            }
        </div>
      
      
    
      
    </div>
  )
}

export default Sample
