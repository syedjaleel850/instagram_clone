import React, { useState } from 'react'

function Follow() {
    const [follow,setfollow]=useState(false)
    function handlefollow(){
        c(!follow)
    }
  return (
    <div>
        {
            follow ? (
                <div onClick={()=>handlefollow()}>
                    <p className='ms-auto text-decoration-none' href="#">Following</p>
                </div>
            ):(
            <div onClick={()=>handlefollow()}>
                <p className='text-decoration-none' href="#">Follow</p>

            </div>)
        }

      
    </div>
  )
}

export default Follow
