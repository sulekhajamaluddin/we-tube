import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const VideosContainer = ({ videos }) => {
  return (
    <div className="main-videos-container top-align">
        {videos.map((video)=>{
         return <VideoThumbnail video={video}/>
        })}
    </div>
  );
};
export default VideosContainer;
