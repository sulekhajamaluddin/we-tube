import { useLocation } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";

const SearchResults = ({ videos }) => {
  const location = useLocation();
  const searchWord = location.state.searchWord;

  const searchResults = videos.filter((video) => {
    return video.videoName.toLowerCase().includes(searchWord.toLowerCase());
  });

  console.log(searchResults);

  return (
    <div className="main-videos-container top-align">
      {searchResults.map((video) => {
        return <VideoThumbnail video={video} />;
      })}
    </div>
  );
};
export default SearchResults;
