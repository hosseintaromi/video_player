import React from 'react'
import Icon from '../icons/Icon';

const PictureInPicture = () => {
    const video_player = document.getElementById("video_player");

    function togglePictureInPicture() {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            (video_player as HTMLVideoElement).requestPictureInPicture()
        }
    }

    return (
        <div style={{ color: "#ffffff", cursor: "pointer" }}>
            <Icon type='picInPic' onClick={togglePictureInPicture} />
        </div>

    )
}

export default PictureInPicture