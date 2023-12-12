import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Video from '../player/Video'
import { useStyle } from '../../hooks/useStyle'
import { Gradient, PlayIconWrapper, VideoWrapper } from '../player/VideoPlayerStyle'
import { usePlayerContext } from '../../hooks/usePlayerContext'
import Toolbar from '../toolbar/Toolbar'
import TouchContainer from '../player/TouchContainer'
import Play from '../tools/Play'

const PlayerTemplate = () => {
    const { style } = useStyle()
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

    return (
        <ThemeProvider theme={style}>
            <TouchContainer onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                <VideoWrapper id="video_wrapper_id">
                    <PlayIconWrapper>
                        <Play />
                    </PlayIconWrapper>
                    <Video />
                    <Gradient opacity={isFadeOut} />
                    <Toolbar opacity={isFadeOut} />
                </VideoWrapper>
            </TouchContainer>
        </ThemeProvider>
    )
}

export default PlayerTemplate