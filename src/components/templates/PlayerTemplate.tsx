import React, { useRef, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Video from '../player/Video'
import { useStyle } from '../../hooks/useStyle'
import { Gradient, PlayIconWrapper, VideoWrapper } from '../player/VideoPlayerStyle'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import Toolbar from '../toolbar/Toolbar'
import TouchContainer from '../player/TouchContainer'
import Play from '../tools/Play'
import Loading from '../loading/Loading'

const PlayerTemplate = () => {
    const { style } = useStyle()
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
        <ThemeProvider theme={style}>
            <VideoWrapper id="video_wrapper_id">
                <PlayIconWrapper isClicked={isPlay}>
                    <Play />
                </PlayIconWrapper>
                <Loading />
                <TouchContainer onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                    <Video />
                </TouchContainer>
                <Gradient isFaded={isFadeOut} />
                <Toolbar isFaded={isFadeOut} />
            </VideoWrapper>
        </ThemeProvider>
    )
}

export default PlayerTemplate