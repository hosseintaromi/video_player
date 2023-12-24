import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { Gradient, PlayJumpIcon, PlayJumpIconWrapper, VideoWrapperBlue } from '../../player/VideoPlayerStyle';
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
    const [isPlay, setIsPlay] = useState<boolean>(false);
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
            <VideoWrapperBlue id="video_wrapper_id">
                <PlayJumpIconWrapper>
                    <JumpBack />
                    <PlayJumpIcon isClicked={isPlay}>
                        <Play />
                    </PlayJumpIcon>
                    <JumpForward />
                </PlayJumpIconWrapper>
                <Loading />
                <TouchContainer onShow={(show: boolean) => { setIsFadeOut(!show) }} >
                    <Video />
                </TouchContainer>
                <Gradient isFaded={isFadeOut} />
                <BlueToolbar isFaded={isFadeOut} />
            </VideoWrapperBlue>
        </ThemeProvider>
    )
}
export default BlueTemeplate;