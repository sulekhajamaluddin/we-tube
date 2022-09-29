import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "../data.json";
import SideVideoList from "./SideVideoList";

const VideoPlayer = () => {
  const location = useLocation();

  return (
    <div className="video-container top-align">
      <ReactPlayer width={900} height={600} style={{marginTop:'1.5em'}} url={`${location.state.id}`} />
      <SideVideoList videos={Videos}/>
    </div>
  );
};
export default VideoPlayer;
