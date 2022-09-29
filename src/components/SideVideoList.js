import React from "react";
import { useNavigate } from "react-router-dom";
const SideVideoList = ({ videos }) => {
  const navigate = useNavigate();

  const handleClick = (video) => {
    navigate("/videoplayer", { state: { id: `${video.videoId}` } });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="side-video-list">
      {videos.map((video) => (
        <div className="side-video-list_main">
          <div className="side-video-list_thumbnail">
            <img
              src={`../videos/${video.videoThumbnail}`}
              alt="video thumbnail"
              style={{ height: "auto", width: "100%", objectFit: "contain" }}
              onClick={() => {
                handleClick(video);
              }}
            />
          </div>
          <div className="side-video-list_details">
            <span>{video.videoName}</span>
            <div className="side-video-list_details_sub">
              <span>{video.channelName}</span>
              <span>{video.views} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SideVideoList;
