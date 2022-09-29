import { useNavigate } from "react-router-dom";

const VideoThumbnail = ({ video }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/videoplayer", { state: { id: `${video.videoId}` } });
  };
  return (
    <div className="video-thumbnail">
      <img
        src={`../videos/${video.videoThumbnail}`}
        alt="video thumbnail"
        style={{ height: "auto", width: "100%", objectFit: "contain" }}
        onClick={() => handleClick()}
      />
      <div className="video-thumbnail-details">
        <img
          height={35}
          width={35}
          style={{ borderRadius: "50%" }}
          src={`../channels/${video.channelThumbnail}`}
          alt="channel thumbnail"
        />
        <div className="video-thumbnail-details_name">
          {video.videoName}
          <span className="video-thumbnail-details_channel-views">
            {video.channelName}
          </span>
          <span className="video-thumbnail-details_channel-views">
            {video.views} views
          </span>
        </div>
      </div>
    </div>
  );
};
export default VideoThumbnail;
