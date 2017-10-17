import React from  'react';

const VideoDetail = (video) => {
    const videoId = video.videoId.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
       <div className="video-detail col-md-8">
           <div className="embed-reponsive embed-reponsive-16by9">
            <iframe src={url} className="embed-responsive-item">
            </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                 <div>{video.snippet.description}</div>
            </div>
        </div>   
    );
}