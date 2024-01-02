import React, { useState } from 'react'
import Video from '../../player/Video'
import { MobileGradient, MobileVideoWrapper } from '../../player/VideoPlayerStyle'
import { usePlayerContext } from '../../../hooks/usePlayerContext'
import TouchContainer from '../../player/TouchContainer'
import Loading from '../../loading/Loading'
import MobileToolbar from '../../toolbar/MobileToolbar'

const MobilePlayerTemplate = () => {
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
        <div className='video-wrapper mobile-video-wrapper ' id="video_wrapper_id">
            <Loading />
            <TouchContainer canPlayOnClick onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                <Video />
                <div className='gradient mobile-gradient' style={{ opacity: isFadeOut ? 0 : 1 }}></div>
                <MobileToolbar isFaded={isFadeOut} />
            </TouchContainer>
        </div>
    )
}

export default MobilePlayerTemplate