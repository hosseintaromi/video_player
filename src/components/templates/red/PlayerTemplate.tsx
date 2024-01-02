import React, { useRef, useState } from 'react'
import Video from '../../player/Video'
import { Gradient, PlayIconWrapper, VideoWrapper } from '../../player/VideoPlayerStyle'
import { usePlayerContext } from '../../../hooks/usePlayerContext'
import Toolbar from '../../toolbar/Toolbar'
import TouchContainer from '../../player/TouchContainer'
import Play from '../../tools/Play'
import Loading from '../../loading/Loading'

const PlayerTemplate = () => {
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);
    const [isPlay, setIsPlay] = useState<boolean>(false)
    usePlayerContext({
        onPlayPause: (playStatus: boolean) => {
            setIsPlay(true)
            setTimeout(() => {
                setIsPlay(false)
            }, 450);
        }
    })
    return (
        <div className='video-wrapper' id="video_wrapper_id">
            <div className='play-icon-wrapper'
            style={{ animation: isPlay ? `bounce .5s linear 1 normal forwards` : 'none', opacity: isPlay ? 1 : 0 }}>
                <Play />
            </div>
            <Loading />
            <TouchContainer canPlayOnClick onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                <Video />
            </TouchContainer>
            <div className='gradient' style={{ opacity: isFadeOut ? 0 : 1 }}></div>
            <Toolbar isFaded={isFadeOut} />
        </div>
    )
}

export default PlayerTemplate