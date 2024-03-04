import React, { useEffect, useState } from 'react';
import { ThemeProvider, CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import Loading from '../../loading/Loading';
import TouchContainer from '../../player/TouchContainer';
import Video from '../../player/Video';
import Play from '../../tools/Play';
import Jump from '../../tools/Jump';
import BlueToolbar from '../../toolbar/BlueToolbar';
import { usePlayerContext } from '../../../hooks/usePlayerContext';
import './BlueTemplate.css';


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
                <div className={`video-wrapper ${isFadeOut ? 'is-faded' : ''}`} id="video_wrapper_id">
                    <div className="center-box play-jump-wrapper">
                        <Jump type='back' />
                        <Play />
                        <Jump type='forward' />
                    </div>
                    <Loading />
                    <TouchContainer canPlayOnClick={false} onShow={(show: boolean) => setIsFadeOut(!show)} >
                        <Video />
                    </TouchContainer>
                    <div className="gradient" />
                    <BlueToolbar isFaded={isFadeOut} />
                </div>
            </ThemeProvider>
        </CacheProvider>
    )
}
export default BlueTemeplate;




// var source = {
//     dash: 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
//     hls: 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
//     progressive: 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
//     poster: 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/poster.jpg',
//     thumbnailTrack: {
//       url: 'https://cdn.bitmovin.com/content/assets/art-of-motion-dash-hls-progressive/thumbnails/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.vtt'
//     }