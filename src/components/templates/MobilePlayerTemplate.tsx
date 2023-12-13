import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Video from '../player/Video'
import { useStyle } from '../../hooks/useStyle'
import { MobileGradient, MobileVideoWrapper } from '../player/VideoPlayerStyle'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import TouchContainer from '../player/TouchContainer'
import Loading from '../loading/Loading'
import MobileToolbar from '../toolbar/MobileToolbar'

const MobilePlayerTemplate = () => {
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
            <MobileVideoWrapper id="video_wrapper_id">
                <Loading />
                <TouchContainer onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                    <Video />
                    <MobileGradient isFaded={isFadeOut} />
                    <MobileToolbar isFaded={isFadeOut} />
                </TouchContainer>
            </MobileVideoWrapper>
        </ThemeProvider>
    )
}

export default MobilePlayerTemplate