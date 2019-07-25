import React from 'react';

const VideoListItem = ({ video, onVdoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVdoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body pl-2">
                    <div className="media-heading">{video.snippet.title}</div>
                    <p><small><i>{video.snippet.channelTitle}</i></small></p>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;