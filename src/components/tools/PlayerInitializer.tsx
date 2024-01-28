import React, { useContext, useEffect } from 'react'
import { usePlayerEvents } from '../../hooks/usePlayerEvents';
import VideoPlayerContext from '../../contexts/VideoPlayerContext';
import { useLocale } from '../../hooks/useLocale';

const PlayerInitializer = () => {
    const { loadVideo } = usePlayerEvents();
    const context = useContext(VideoPlayerContext);
    const { changeLocale } = useLocale({});

    useEffect(() => {
        context.loadVideo = loadVideo;
        context.config.loadVideo = loadVideo;
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