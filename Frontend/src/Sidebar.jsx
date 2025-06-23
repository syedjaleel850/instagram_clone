import React from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";
import More from './More'
function Sidebar() {
  
  const navigate=useNavigate();
  return (
    <div className="position-fixed justify-items-center" >
    <div className="d-flex  m-3 flex-column gap-3">
    <img src="https://instagram-clone-backend-igda.onrender.com/assets/Instagramlogo.png" alt="" width="120px" />
    </div>

      <div className=" logo m-3 d-flex flex-column gap-3 mt-4 ">
        <div className="hover-bg" onClick={()=>navigate("/")}><i className="bi bi-house-door-fill"></i>Home</div>
        <div className="hover-bg"><i className="bi bi-search"></i>Search</div>
        <div className="hover-bg"> <i className="bi bi-compass"></i>Explore</div>
        <div className="hover-bg"><i className="bi bi-play-btn"></i>Reels</div>
        <div className="hover-bg"><i className="bi bi-chat-dots"></i>Messages</div>
        <div className="hover-bg"><i className="bi bi-heart"></i>Notifications</div>
        <div className="hover-bg"> <i className="bi bi-plus-square"></i>Create</div>
        <div className="hover-bg"  onClick={()=>navigate('/profile')}><i className="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3 m-3 ">
        <div className="hover-bg"><i className="bi bi-threads "></i>Threads</div>
        {/* <div className="hover-bg"><i className="bi bi-list "></i>Menu</div> */}
        {<More />}
      </div>
    
    </div>
    
  );
}

export default Sidebar;
