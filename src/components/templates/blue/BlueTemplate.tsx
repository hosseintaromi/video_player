import React, { useState } from 'react';
import Loading from '../../loading/Loading';
import TouchContainer from '../../player/TouchContainer';
import Video from '../../player/Video';
import Play from '../../tools/Play';
import Jump from '../../tools/Jump';
import BlueToolbar from '../../toolbar/BlueToolbar';
import '../../player/VideoPlayerStyle.css';

const BlueTemeplate = () => {
    const [isFadeOut, setIsFadeOut] = useState<boolean>(false);

    return (
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
    )
}
export default BlueTemeplate;