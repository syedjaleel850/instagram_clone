import React from 'react'
import Sidebar from './Sidebar'
import Stories from './Stories'
import Feed from './Feed'
import Suggestions from './Suggestions'
function App() {
  return (

    <div className="vh-100 d-flex">
    <div className='w-20'> <Sidebar/></div>
    <div className='w-50 '> 
      <Stories/> 
      <Feed/>
      </div>
    <div className='w-30'> <Suggestions/> </div>
    </div>
 
  )
}

export default App
