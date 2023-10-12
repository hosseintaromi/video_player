import { RefObject, createContext, useContext } from "react";
import { LevelType, MediaPlaylistType } from "../@types/hooks/UseVideoHlsType";


type videoContextType = {
    videoRef: RefObject<HTMLVideoElement>,
    videoWrapperRef: RefObject<HTMLDivElement>,
    levels: LevelType,
    currentSpeed: number,
    currentLevel: number,
    subtitleList: MediaPlaylistType,
    currentSubtitle: number,
    audioTrackList: MediaPlaylistType,
    currentAudioTrack: number,
    changeHlsLevel: (val: number) => void,
    changeHlsSubtitle: (val: number) => void,
    changeHlsAudioTrack: (val: number) => void,
    changeSpeed: (val: number) => void,

} | null

const VideoContext = createContext<videoContextType>(null)

const checkContext = () => {
    const context = useContext(VideoContext)
    if (!context)
        throw new Error("video context not available!!!!!")
    return context;
}

export const useVideoRefContext = () => {
    const context = checkContext()
    return { videoRef: context.videoRef };
}

export const useVideoWrapperRef = () => {
    const context = checkContext()
    return { videoWrapperRef: context.videoWrapperRef };
}

export const useLevel = () => {
    const context = checkContext()
    return {
        levels: context.levels,
        changeHlsLevel: context.changeHlsLevel
    };
}

export const useSubtitle = () => {
    const context = checkContext()
    return { subtitleList: context.subtitleList, changeHlsSubtitle: context.changeHlsSubtitle };
}

export const useAudioTrack = () => {
    const context = checkContext()
    return { audioTrackList: context.audioTrackList, changeHlsAudioTrack: context.changeHlsAudioTrack };
}
export const useLevelCurrent = () => {
    const context = checkContext()
    return { currentLevel: context.currentLevel };
}

export const useSubtitleCurrent = () => {
    const context = checkContext()
    return { currentSubtitle: context.currentSubtitle };
}

export const useAudioTrackCurrent = () => {
    const context = checkContext()
    return { currentAudioTrack: context.currentAudioTrack };
}

export const useSpeedCurrent = () => {
    const context = checkContext()
    return { currentSpeed: context.videoRef.current?.playbackRate };
}

export const useSpeed = () => {
    const context = checkContext()
    return { speedList: [1, 2, 3], changeSpeed: context.changeSpeed };
}





export default VideoContext;