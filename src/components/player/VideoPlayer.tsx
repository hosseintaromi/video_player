import React, { useRef } from 'react'
import PlayerTemplate from '../templates/PlayerTemplate';
import { PlayerObjectType } from '../../@types/player.model';
import VideoPlayerContext from '../../contexts/VideoPlayerContext';
import PlayerInitializer from '../tools/PlayerInitializer';
import MobilePlayerTemplate from '../templates/MobilePlayerTemplate';

const VideoPlayer = ({ children, config, src }: { children?: React.ReactNode, config?: PlayerObjectType, src?: string }) => {

    const videoRef = useRef<HTMLVideoElement>();
    if (config && src) {
        config.src = src;
    }
    const configRef = useRef<PlayerObjectType>(config || { src } as any);

    const listenOnLoad = useRef<(() => void)[]>([])
    const playListeners = useRef<((play: boolean) => void)[]>([])
    const setVideoRef = (ref: HTMLVideoElement) => {
        videoRef.current = ref
    }
    const getVideoRef = () => {
        return videoRef.current;
    }
    const togglePlay = () => {
        playListeners.current.forEach(listener => listener?.(true))
    }
    const listenPlayPause = (listener: (play: boolean) => void) => {
        playListeners.current.push(listener)
    }

    return (
        <VideoPlayerContext.Provider value={{
            getVideoRef,
            setVideoRef,
            togglePlay,
            listenPlayPause,
            config: configRef.current,
            listenOnLoad: listenOnLoad.current,

        }}>
            {children ? children : <PlayerTemplate />}
            <PlayerInitializer />
        </VideoPlayerContext.Provider>
    )
}

export default VideoPlayer