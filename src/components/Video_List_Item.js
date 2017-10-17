import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //const video = props.video; I dentical clearning up code, as passing props
    console.log(video);
   
   const imageURL = video.snippet.thumbnails.default.url;

    return (
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                      <img className="media-object" src={imageURL} alt = {video.snippet.title} />
                    </div>
                    <div className="media-body">
                      <div className="media-heading"> 
                            {video.snippet.title}

                      </div>
                    </div>
                </div>
            </li>
    );
}

export default VideoListItem;