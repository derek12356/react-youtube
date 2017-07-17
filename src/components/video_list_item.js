
import React from 'react';

// having {video} is equivelent to having props as the argument
// and assigning:
// const video = props.video
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)}  class="list-group-item">
      <div class="video-list media">
        <div class="media-left">
        <img  class="media-object" src={imageURL} />
        </div>

        <div class="media-body">
          <div class="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
