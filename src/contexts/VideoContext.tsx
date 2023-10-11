import { createContext, useContext } from "react";


type videoContextType = {
    videoRef: any
} | null

const VideoContext = createContext<videoContextType>(null)

export const useVideoRefContext = () => {
    const context = useContext(VideoContext)
    if (!context)
        throw new Error("video context not available!!!!!")
    return context;
}

export default VideoContext;