import React from 'react';
import VideoListItem from './vdo_list_item';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><em>{video.snippet.title}</em></div>
                <div><strong>{video.snippet.description}</strong></div>
            </div>
        </div>
    );
};

export default VideoDetail;