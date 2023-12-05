import { createContext } from "react";
import { PlayerContextType } from "../@types/player";


//TODO: how to fix this any
const VideoPlayerContext = createContext<PlayerContextType>({} as any)

export default VideoPlayerContext;