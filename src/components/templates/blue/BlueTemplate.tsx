import React, { useEffect, useState } from 'react';
import { ThemeProvider, CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { Gradient, PlayJumpIconWrapper, VideoWrapperBlue } from '../../player/VideoPlayerStyle';
import Loading from '../../loading/Loading';
import TouchContainer from '../../player/TouchContainer';
import Video from '../../player/Video';
import Play from '../../tools/Play';
import Jump from '../../tools/Jump';
import BlueToolbar from '../../toolbar/BlueToolbar';
import { usePlayerContext } from '../../../hooks/usePlayerContext';


export const cache = createCache({
    key: 'rtl',
    stylisPlugins: []
})

const BlueTemeplate = () => {
    const { style } = usePlayerContext();
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={style}>
                <VideoWrapperBlue id="video_wrapper_id">
                    <PlayJumpIconWrapper isFaded={isFadeOut}>
                        <Jump type='back' />
                        <Play />
                        <Jump type='forward' />
                    </PlayJumpIconWrapper>
                    <Loading />
                    <TouchContainer canPlayOnClick={false} onShow={(show: boolean) => setIsFadeOut(!show)} >
                        <Video />
                    </TouchContainer>
                    <Gradient isFaded={isFadeOut} />
                    <BlueToolbar isFaded={isFadeOut} />
                </VideoWrapperBlue>
            </ThemeProvider>
        </CacheProvider>
    )
}
export default BlueTemeplate;