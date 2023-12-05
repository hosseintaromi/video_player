import React, { useContext, useEffect } from 'react'
import { useVideoHls } from '../../hooks/useVideoHls';
import VideoPlayerContext from '../../contexts/VideoPlayerContext';
import { useLocale } from '../../hooks/useLocale';

const PlayerInitializer = () => {
    const { loadHlsVideo } = useVideoHls();
    const context = useContext(VideoPlayerContext);
    const { changeLocale } = useLocale({});

    useEffect(() => {
        context.loadVideo = loadHlsVideo;
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