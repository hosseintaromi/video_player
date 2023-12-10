import { createContext } from "react";
import { PlayerContextType } from "../@types/player.model";


//TODO: how to fix this any
const VideoPlayerContext = createContext<PlayerContextType>({} as any)

export default VideoPlayerContext;