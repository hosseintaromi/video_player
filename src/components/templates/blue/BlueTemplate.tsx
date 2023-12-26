import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { Gradient, PlayJumpIcon, PlayJumpIconFix, PlayJumpIconWrapper, VideoWrapperBlue } from '../../player/VideoPlayerStyle';
import Loading from '../../loading/Loading';
import TouchContainer from '../../player/TouchContainer';
import Video from '../../player/Video';
import { useStyle } from '../../../hooks/useStyle';
import Play from '../../tools/Play';
import { usePlayerContext } from '../../../hooks/usePlayerContext';
import JumpBack from '../../tools/JumpBack';
import JumpForward from '../../tools/JumpForward';
import BlueToolbar from '../../toolbar/BlueToolbar';

const BlueTemeplate = () => {
    const { style } = useStyle();
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);


    useEffect(() => {
        console.log('firstdddd', isFadeOut)
    }, [isFadeOut])
    return (
        <ThemeProvider theme={style}>
            <VideoWrapperBlue id="video_wrapper_id">
                <PlayJumpIconWrapper>
                    <JumpBack />
                    <PlayJumpIconFix>
                        <Play />
                    </PlayJumpIconFix>
                    <JumpForward />
                </PlayJumpIconWrapper>
                <Loading />
                <TouchContainer canPlayOnClick={false} onShow={(show: boolean) => { console.log('show', show); setIsFadeOut(!show) }} >
                    <Video />
                </TouchContainer>
                <Gradient isFaded={isFadeOut} />
                <BlueToolbar isFaded={isFadeOut} />
            </VideoWrapperBlue>
        </ThemeProvider>
    )
}
export default BlueTemeplate;