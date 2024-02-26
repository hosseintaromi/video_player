import React, { useRef } from 'react'
import PlayerTemplate from '../templates/red/PlayerTemplate';
import { PlayerInstance } from '../../@types/player.model';
import VideoPlayerContext from '../../contexts/VideoPlayerContext';
import PlayerInitializer from '../tools/PlayerInitializer';
import MobilePlayerTemplate from '../templates/red/MobilePlayerTemplate';
import BlueMobileTemeplate from '../templates/blue/BlueMobileTemeplate';
import BlueTemeplate from '../templates/blue/BlueTemplate';
import { usePlayerContext } from '../../hooks/usePlayerContext';
import CustomPlayer from '../templates/custom/CustomPlayer';

const VideoPlayer = ({ children, config, src }: { children?: React.ReactNode, config?: PlayerInstance, src?: string }) => {
    const { theme } = usePlayerContext()

    const choosePlayerSize = () => {
        if ((config?.theme || theme) === 'Blue') {
            return <BlueTemeplate />
        } else if ((config?.theme || theme) === 'Custom') {
            return <CustomPlayer />
        } else {
            return window.innerWidth < 768 ? <MobilePlayerTemplate /> : <PlayerTemplate />
        }
    }

    const videoRef = useRef<HTMLVideoElement>();
    if (config && src) {
        config.src = src;
    }
    const configRef = useRef<PlayerInstance>(config || { src } as any);

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
            {children ? children : choosePlayerSize()}
            <PlayerInitializer />
        </VideoPlayerContext.Provider>
    )
}

export default VideoPlayer