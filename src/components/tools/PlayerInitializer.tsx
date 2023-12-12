import React, { useContext, useEffect } from 'react'
import { useVideo } from '../../hooks/useVideo';
import VideoPlayerContext from '../../contexts/VideoPlayerContext';
import { useLocale } from '../../hooks/useLocale';

const PlayerInitializer = () => {
    const { loadVideo } = useVideo();
    const context = useContext(VideoPlayerContext);
    const { changeLocale } = useLocale({});

    useEffect(() => {
        context.loadVideo = loadVideo;
        if (!context.config) {
            return;
        }
        context.config.loadVideo = context.loadVideo;
        if (context.config.src) {
            context.loadVideo(context.config.src)
        }
        context.config.changeLocale = changeLocale;
    }, [])

    return (
        <></>
    )
}

export default PlayerInitializer