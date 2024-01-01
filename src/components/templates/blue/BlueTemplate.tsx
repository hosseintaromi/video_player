import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { Gradient, PlayJumpIconWrapper } from '../../player/VideoPlayerStyle';
import Loading from '../../loading/Loading';
import TouchContainer from '../../player/TouchContainer';
import Video from '../../player/Video';
import { useStyle } from '../../../hooks/useStyle';
import Play from '../../tools/Play';
import Jump from '../../tools/Jump';
import BlueToolbar from '../../toolbar/BlueToolbar';
import '../../player/VideoPlayerStyle.css';

const BlueTemeplate = () => {
    const { style } = useStyle();
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

    return (
        <ThemeProvider theme={style}>
            <div className='video-wrapper' id="video_wrapper_id">
                <div className='play-jump-wrapper' style={{ opacity: isFadeOut ? 0 : 1 }}>
                    <Jump type='back' />
                    <Play />
                    <Jump type='forward' />
                </div>
                <Loading />
                <TouchContainer canPlayOnClick={false} onShow={(show: boolean) => setIsFadeOut(!show)} >
                    <Video />
                </TouchContainer>
                <div className='gradient' style={{ opacity: isFadeOut ? 0 : 1 }}></div>
                <BlueToolbar isFaded={isFadeOut} />
            </div>
        </ThemeProvider>
    )
}
export default BlueTemeplate;