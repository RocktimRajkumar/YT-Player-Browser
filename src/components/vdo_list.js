import React from 'react';
import VideoListItem from './vdo_list_item';

const VideosList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem onVdoSelect={props.onVdoSelected} key={video.etag} video={video} />
    });
    return (
        <div className="col-md-4">
            <ul className="col-md-12 list-group">
                {videoItems}
            </ul>
        </div>
    );
};

export default VideosList;