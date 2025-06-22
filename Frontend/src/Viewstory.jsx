import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Viewstory() {
  const { id, tot } = useParams();
  const numberid = Number(id);
  const numbertot = Number(tot);
  const [story, setStory] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://instagram-clone-backend-igda.onrender.com/api/story/${id}`)
      .then((data) => data.json())
      .then((story) => setStory(story))
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, [id]);

  useEffect(() => {
    if (numberid <= 0 || numberid > numbertot) {
      navigate("/");
    }
  }, [numberid, numbertot, navigate]);

  return (
    <div className="d-flex align-items-center justify-content-center bg-black">
      <div
        className="d-flex m-3 flex-column gap-3"
        style={{
          filter: "invert(1)",
          position: "absolute",
          left: "0px",
          top: "0",
        }}
      >
      
        <img
          src="https://instagram-clone-backend-igda.onrender.com/api/assets/Instagramlogo.png"
          alt=""
          width="120px"
        />
      </div>
      <div
        className="d-flex m-3 flex-column gap-3"
        style={{
          position: "absolute",
          right: "0px",
          top: "0",
          cursor:"pointer"
        }}
      ><a onClick={()=>navigate('/')}><i className="bi bi-x-lg text-white fs-4"></i></a></div>
      {story ? (
        <div className="viewstories position-relative d-flex justify-content-center align-items-center flex-column">
          <div
            style={{ width: "50%" }}
            className="d-flex align-items-center justify-content-between  my-3 position-absolute top-0"
          >
            <div className="d-flex align-items-center overflow-hidden">
              <img
                className="dp rounded-circle "
                src={story.profilePic}
                alt="img"
                style={{ width: "50px", height: "50px" }}
              />
              <h5 className="text-white">{story.userName}</h5>
            </div>

            <div>
              <i class="bi bi-pause text-white fs-2"></i>
              <i class="bi bi-volume-mute-fill text-white fs-2"></i>
              <i class="bi bi-three-dots text-white fs-2 "></i>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link to={`/story/${numberid - 1}/${numbertot}`}>
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
            <img
              className=" stories"
              style={{ width: "40%" }}
              src={story.image}
              alt=""
            />
            <Link to={`/story/${numberid + 1}/${numbertot}`}>
              <i className="bi bi-arrow-right-circle-fill"></i>
            </Link>{" "}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    // <div>{id}</div>
  );
}

export default Viewstory;
