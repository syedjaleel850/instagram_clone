import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import Follow from "./components/Follow";

function Profile() {
  const [profile, setProfile] = useState();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios("https://instagram-clone-backend-igda.onrender.com/api/Profile")
      .then((data) => setProfile(data.data[0]))
      .catch((err) => console.log(err));
    axios("https://instagram-clone-backend-igda.onrender.com/api/followers")
      .then((data) => setFollowers(data.data)
      )
      .catch((err) => console.log(err));
  }, []);

  function handleOnchange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const handleUpdate = async () => {
    await axios
      .put(`https://instagram-clone-backend-igda.onrender.com/api/Profile/${profile.id}`, profile)
      .then(console.log("updated"))
      .catch((err) => console.log(err));
  };

  const refreshFollowers = async () => {
    try {
      const response = await axios("https://instagram-clone-backend-igda.onrender.com/api/followers");
      setFollowers(response.data);
    } catch (err) {
      console.error('Error refreshing followers:', err);
    }
  };
const handleremove=async(id)=>{
  await axios.delete(`https://instagram-clone-backend-igda.onrender.com/api/followers/${id}`)
  .then(()=>refreshFollowers())
}

  

  return (
    <div>
      {profile ? (
        <div>
          <Sidebar />
          <div className="position-relative">
            <div
              key={profile.id}
              className="position-absolute w-50 profile d-flex align-items-start justify-content-center flex-column"
            >
              <img
                className="dp-profile rounded-circle"
                src={profile.profilePic}
                alt="Profile"
              />
              <p className="my-2 fs-5">{profile.userName}</p>
              <input
                className="w-75 form-control"
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleOnchange}
              />
              <button onClick={handleUpdate} className="btn btn-primary my-4">
                update
              </button>
              <div style={{width:'100%'}}>
                <h3>Followers...</h3>
                
                {followers.length > 0 ? (
                  <div>
                    {followers.map((item) => (
                      <div key={item.id} >
                      <div className='profile d-flex align-items-center my-3'>
                           <img className="dp rounded-circle "src={item.profilePic} alt="img" />
                           <p style={{margin:'0px'}}>{item.userName}</p>
                           <button onClick={()=>{handleremove(item.id)}}className="ms-auto btn btn-info" >Remove</button>
                      </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
